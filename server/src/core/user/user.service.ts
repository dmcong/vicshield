import { Injectable } from '@nestjs/common'

import { InjectModel } from '@nestjs/mongoose'

import { Model } from 'mongoose'

import { UserDocument, UserModel } from './user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModel.name)
    private userModel: Model<UserDocument>,
  ) {}
}
