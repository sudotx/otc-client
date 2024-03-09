import { Document, model, Schema } from "mongoose";

/**
 * Type to model the Listing Schema for TypeScript.
 * @param tokenType:string
 * @param description:string
 * @param creatorId:string
 * @param status:string
 * @param quantity:number
 * @param price:number
 */

export type TListing = {
  tokenType: string;
  description: string;
  creatorId: string;
  status: string;
  quantity: number;
  price: number;
};

/**
 * Mongoose Document based on TListing for TypeScript.
 * https://mongoosejs.com/docs/documents.html
 *
 * TListing
 * @param tokenType:string
 * @param description:string
 * @param creatorId:string
 * @param status:string
 * @param quantity:number
 * @param price:number
 */

export interface IListing extends TListing, Document {}

const listingSchema: Schema = new Schema({
  tokenType: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  creatorId: {
    type: String,
  },
  status: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

/**
 * Mongoose Model based on TListing for TypeScript.
 * https://mongoosejs.com/docs/models.html
 *
 * TListing
 * @param tokenType:string
 * @param description:string
 * @param creatorId:string
 * @param status:string
 * @param quantity:number
 * @param price:number
 */

const Listing = model<IListing>("Listing", listingSchema);

export default Listing;
