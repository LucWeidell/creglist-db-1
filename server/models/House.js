import mongoose from 'mongoose'
const Schema = mongoose.Schema

const House = new Schema(
  {
    year: { type: String, required: true },
    levels: { type: Number, required: true },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    squareFt: { type: Number, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: false },
    imgUrl: { type: String, required: false }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default House
