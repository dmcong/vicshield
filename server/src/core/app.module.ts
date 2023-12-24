import { Global, Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { JwtModule } from '@nestjs/jwt'

import { AppController } from './app.controller'
import { AppService } from './app.service'

import configuration, { EnvironmentVariables } from 'src/configs'
import { ContractModule } from './contract/contract.module'
import { UserModule } from './user/user.module'

@Global()
@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (
        configService: ConfigService<EnvironmentVariables>,
      ) => {
        return {
          global: true,
          secret: configService.get('jwt').secret,
          signOptions: { expiresIn: configService.get('jwt').ttl },
        }
      },
      inject: [ConfigService],
    }),
  ],
  exports: [JwtModule],
})
export class GlobalModule {}

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (
        configService: ConfigService<EnvironmentVariables>,
      ) => {
        return {
          uri: configService.get('mongodb').uri,
        }
      },
      inject: [ConfigService],
    }),
    ContractModule,
    UserModule,
    GlobalModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
