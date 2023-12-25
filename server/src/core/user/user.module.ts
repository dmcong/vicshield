import { Module } from '@nestjs/common'

import { UserController } from './controllers/user.controller'
import { UserService } from './user.service'
import { MongooseModule } from '@nestjs/mongoose'
import { UserModel, UserSchema } from './user.entity'
import { AdminUserController } from './controllers/admin-user.controller'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserModel.name, schema: UserSchema }]),
  ],
  controllers: [UserController, AdminUserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
