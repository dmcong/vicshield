import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, SchemaTypes, Types } from 'mongoose'

import { IContract, ISignatory } from 'src/types/contract.type'

export type ContractDocument = HydratedDocument<ContractModel>

@Schema({ timestamps: true, autoIndex: true, optimisticConcurrency: true })
export class ContractModel implements Omit<IContract, '_id'> {
  @Prop({ type: SchemaTypes.ObjectId })
  categoryId: Types.ObjectId

  @Prop({
    type: [{ type: ISignatory }],
    default: [],
  })
  signatories: ISignatory[]

  @Prop({ type: SchemaTypes.String })
  content: string

  @Prop({ type: SchemaTypes.String })
  value: string

  @Prop({ type: SchemaTypes.String })
  recipient?: string

  @Prop({ type: SchemaTypes.Date })
  expirationDate: Date

  @Prop({ type: SchemaTypes.Date })
  contractExpirationDate?: Date

  @Prop({ type: SchemaTypes.Boolean, default: false })
  active: boolean

  @Prop({ type: SchemaTypes.Date, default: new Date() })
  createdAt: Date
}

export const ContractSchema = SchemaFactory.createForClass(ContractModel)
