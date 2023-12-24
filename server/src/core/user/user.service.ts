import { BadRequestException, Injectable } from '@nestjs/common'

import { InjectModel } from '@nestjs/mongoose'

import { Model, Types } from 'mongoose'

import { JwtService } from '@nestjs/jwt'

import { UserDocument, UserModel } from './user.entity'
import { SignUpDto } from './dto/sign-up.dto'
import { SignInDto } from './dto/sign-in.dto'

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
}
