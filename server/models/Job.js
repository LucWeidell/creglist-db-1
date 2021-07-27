import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Job = new Schema(
  {
    salary: { type: Number, required: true },
    jobTitle: { type: String, required: true },
    city: { type: String, required: true },
    hours: { type: Number, required: true },
    company: { type: String, required: false },
    overtime: { tpe: Number, required: false },
    imgUrl: { type: String, required: false }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Job
