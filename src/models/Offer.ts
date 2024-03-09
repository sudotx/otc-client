import { Document, model, Schema } from "mongoose";

/**
 * Type to model the Offer Schema for TypeScript.
 * @param listingId:string
 * @param offerCreatorId:string
 * @param status:string
 * @param price:number
 * @param quantity:number
 */

export type TOffer = {
  listingId: string;
  offerCreatorId: string;
  status: string;
  price: number;
  quantity: number;
};

/**
 * Mongoose Document based on TOffer for TypeScript.
 * https://mongoosejs.com/docs/documents.html
 *
 * TOffer
 * @param listingId:string
 * @param offerCreatorId:string
 * @param status:string
 * @param price:number
 * @param quantity:number
 */

export interface IOffer extends TOffer, Document {}

const OfferSchema: Schema = new Schema({
  listingId: {
    type: String,
    required: true,
    unique: true,
  },
  offerCreatorId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
});

/**
 * Mongoose Model based on TOffer for TypeScript.
 * https://mongoosejs.com/docs/models.html
 *
 * TOffer
 * @param listingId:string
 * @param offerCreatorId:string
 * @param status:string
 * @param price:number
 * @param quantity:number
 */

const Offer = model<IOffer>("Offer", OfferSchema);

export default Offer;
