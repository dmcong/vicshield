// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import 'vrc25/contracts/VRC25.sol';

contract VicContractFactory is VRC25 {
  struct ContractData {
    address owner;
    bytes32 contractHash;
    uint256 expirationDate;
    uint256 contractValue;
    address payable recipient;
    uint256 threshold;
    mapping(address => bool) signatories;
    mapping(address => bool) hasSigned;
    uint256 signaturesCount;
    bool contractActive;
    bool contractSigned;
  }

  mapping(uint => ContractData) public contracts;
  uint public contractsCount;

  constructor() VRC25('VicShield', 'VIS', 0) {}

  function createContract(
    bytes32 _contractHash,
    address[] memory _signatories,
    uint256 _expirationDate,
    uint256 _contractValue,
    address payable _recipient
  ) public {
    ContractData storage c = contracts[contractsCount++];
    c.contractHash = _contractHash;
    c.expirationDate = _expirationDate;
    c.contractValue = _contractValue;
    c.recipient = _recipient;
    c.threshold = _signatories.length;
    for (uint i = 0; i < _signatories.length; i++) {
      c.signatories[_signatories[i]] = true;
      _mint(_signatories[i], 1);
    }
    c.contractActive = true;
  }

  function signContract(uint _contractId) public {
    ContractData storage c = contracts[_contractId];
    require(c.contractActive, 'Contract is not active');
    require(c.signatories[msg.sender], 'Not authorized to sign');
    require(!c.hasSigned[msg.sender], 'Already signed');
    require(block.timestamp < c.expirationDate, 'Contract expired');

    c.hasSigned[msg.sender] = true;
    c.signaturesCount++;

    if (c.signaturesCount >= c.threshold) {
      c.contractSigned = true;
      c.contractActive = false;
    }
  }

  function modifyContract(uint _contractId, bytes32 _newContractHash) public {
    ContractData storage c = contracts[_contractId];
    require(msg.sender == c.owner, 'Only owner can modify');
    require(c.signaturesCount == 0, 'Contract already signed');
    c.contractHash = _newContractHash;
  }

  function _estimateFee(
    uint256 value
  ) internal view virtual override returns (uint256) {
    return 1;
  }
}
