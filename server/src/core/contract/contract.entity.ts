import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, SchemaTypes, Types } from 'mongoose'

import { IContract, ISignature } from 'src/types/contract.type'

export type ContractDocument = HydratedDocument<ContractModel>

@Schema({ timestamps: true, autoIndex: true, optimisticConcurrency: true })
export class ContractModel implements Omit<IContract, '_id'> {
  @Prop({ type: SchemaTypes.ObjectId })
  categoryId: Types.ObjectId

  @Prop({
    type: [{ type: SchemaTypes.ObjectId }],
    default: [],
  })
  signatures: ISignature[]

  @Prop({ type: SchemaTypes.String })
  content: string

  @Prop({ type: SchemaTypes.Number })
  value: number

  @Prop({ type: SchemaTypes.String })
  recipient?: string

  @Prop({ type: SchemaTypes.Date })
  expiredDate?: Date
}

export const ContractSchema = SchemaFactory.createForClass(ContractModel)
