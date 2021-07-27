import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Car = new Schema(
  {
    fillIN: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Car
