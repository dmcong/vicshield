import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, SchemaTypes } from 'mongoose'

export type TrialDocument = HydratedDocument<TrialModel>

@Schema({ timestamps: true, autoIndex: true, optimisticConcurrency: true })
export class TrialModel {
  @Prop({ type: SchemaTypes.String })
  firstName: string

  @Prop({ type: SchemaTypes.String })
  lastName: string

  @Prop({ type: SchemaTypes.String })
  email: string

  @Prop({ type: SchemaTypes.String })
  title: string

  @Prop({ type: SchemaTypes.String })
  company: string

  @Prop({ type: SchemaTypes.String })
  employees: string

  @Prop({ type: SchemaTypes.String })
  phone: string

  @Prop({ type: SchemaTypes.String })
  country: string
}

export const TrialSchema = SchemaFactory.createForClass(TrialModel)
