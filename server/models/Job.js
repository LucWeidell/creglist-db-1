import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Job = new Schema(
  {
    fillIN: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Job
