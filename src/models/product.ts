import { model, Schema, Document } from "mongoose";

interface IProduct extends Document {
  name: string;
  price: string;
}

const ProductSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  iso2code: {
    type: String,
  },
});

const ProductModel = model<IProduct>("Product", ProductSchema);

export { ProductModel, IProduct };
