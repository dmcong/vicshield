import { BadRequestException, Injectable } from '@nestjs/common'

import { InjectModel } from '@nestjs/mongoose'

import { FilterQuery, Model, Types } from 'mongoose'

import { JwtService } from '@nestjs/jwt'

import { UserDocument, UserModel } from './user.entity'
import { SignUpDto } from './dto/sign-up.dto'
import { SignInDto } from './dto/sign-in.dto'
import { CreateKYCDto } from './dto/create-kyc.dto'
import { VerifyKYCDto } from './dto/verify-kyc.dto'
import { GetUsersDto } from './dto/get-users.dto'
import {
  DEFAULT_PAGE,
  DEFAULT_PAGE_SIZE,
} from 'src/shared/constants/pagination.const'

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModel.name)
    private userModel: Model<UserDocument>,

    private jwtService: JwtService,
  ) {}

  async signUp(dto: SignUpDto) {
    const user = await this.userModel.findOne({
      $or: [{ wallet: dto.wallet }, { username: dto.username }],
    })

    if (user) throw new BadRequestException()

    const newUser = await this.userModel.create(dto)

    return this.createJWT(newUser)
  }

  async signIn(dto: SignInDto) {
    const user = await this.userModel.findOne({
      $or: [{ wallet: dto.wallet }, { username: dto.username }],
    })

    if (!user) throw new BadRequestException()

    return this.createJWT(user)
  }

  async findById(userId: string | Types.ObjectId) {
    return this.userModel.findById(userId)
  }

  private createJWT(payload: any) {
    return this.jwtService.sign(payload)
  }

  async createKYC(payload: CreateKYCDto, wallet: string) {
    const user = await this.userModel.findOne({ wallet })
    if (!user) throw new BadRequestException()

    if (user.isKyc) throw new BadRequestException()

    user.kyc = payload
    return user.save()
  }

  async verifyKYC({ wallet, valid }: VerifyKYCDto) {
    const user = await this.userModel.findOne({ wallet })
    if (!user || !user.kyc) throw new BadRequestException()

    if (valid)
      return this.userModel.findOneAndUpdate({ wallet }, { isKyc: true })

    return this.userModel.findOneAndUpdate(
      { wallet },
      { $unset: { kyc: undefined } },
    )
  }

  async getUsers({
    page = DEFAULT_PAGE,
    limit = DEFAULT_PAGE_SIZE,
    isKyc,
  }: GetUsersDto) {
    const filter: FilterQuery<UserModel> = {}
    if (isKyc !== undefined) {
      filter.isKyc = isKyc
    }

    const [data, total] = await Promise.all([
      this.userModel
        .find(filter)
        .skip(page * limit)
        .limit(limit),
      this.userModel.countDocuments(filter),
    ])

    return { data, total }
  }
}
