import {
  ExecutionContext,
  Injectable,
  CanActivate,
  UnauthorizedException,
} from '@nestjs/common'

import { AuthContext, ValidateAuthResult } from 'src/types/auth-context.type'
import { Request } from 'express'
import { UserService } from 'src/core/user/user.service'
import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'
import { EnvironmentVariables } from 'src/configs'
import { IUser } from 'src/types/user.type'

const BEARER_PREFIX = 'Bearer '
const parseBearerToken = (authorization?: string): string | undefined => {
  if (!authorization || !authorization.startsWith(BEARER_PREFIX))
    return undefined
  return authorization.replace(BEARER_PREFIX, '')
}

@Injectable()
export class HttpAuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private readonly userService: UserService,
    private config: ConfigService<EnvironmentVariables>,
  ) {}

  private readonly jwtSecret = this.config.get('jwt', { infer: true })?.secret

  protected async validate(
    authorization?: string,
  ): Promise<ValidateAuthResult> {
    const bearer = parseBearerToken(authorization)
    if (!bearer) throw new UnauthorizedException()

    const payload = await this.jwtService.verifyAsync<IUser>(bearer, {
      secret: this.jwtSecret ?? '',
    })

    const user = await this.userService.findById(payload._id)

    if (!user) throw new UnauthorizedException('User not join Vicshield yet!')
    return { valid: true, user }
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: AuthContext<Request> = context.switchToHttp().getRequest()

    const authorization = request.headers?.authorization

    const { valid, user } = await this.validate(authorization)
    request.user = user
    return valid
  }
}
