export const shortenAddress = (
  address: string,
  before = 4,
  after = 4,
  delimiter = '...',
) => {
  return (
    address.substring(0, before) +
    delimiter +
    address.substring(address.length - after, address.length)
  )
}
