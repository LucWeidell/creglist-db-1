import mongoose from 'mongoose'
const Schema = mongoose.Schema

const House = new Schema(
  {
    fillIN: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default House
