import { Document, model, Schema } from "mongoose";

/**
 * Type to model the Points Schema for TypeScript.
 * @param email:string
 * @param password:string
 * @param avatar:string
 */

export type TPoints = {
  email: string;
  amount: number;
};

/**
 * Mongoose Document based on TPoints for TypeScript.
 * https://mongoosejs.com/docs/documents.html
 *
 * TPoints
 * @param email:string
 * @param amount:number
 */

export interface IPoints extends TPoints, Document {}

const PointsSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

/**
 * Mongoose Model based on TPoints for TypeScript.
 * https://mongoosejs.com/docs/models.html
 *
 * TPoints
 * @param email:string
 * @param amount:number
 */

const Points = model<IPoints>("Points", PointsSchema);

export default Points;
