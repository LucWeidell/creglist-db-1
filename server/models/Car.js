import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Car = new Schema(
  {
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: false },
    imgUrl: { type: String, required: false }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Car
