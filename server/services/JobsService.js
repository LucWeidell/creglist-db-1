import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class JobsService {
  async getAll(query = {}) {
    const job = await dbContext.Jobs.find(query)
    return job
  }

  async getById(id) {
    const job = await dbContext.Cars.findById(id)
    if (!job) {
      throw new BadRequest('Invalid ID')
    }
    return job
  }

  async create(body) {
    const job = await dbContext.Cars.create(body)
    return job
  }

  async edit(body) {
    const job = await dbContext.Jobs.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    if (!job) {
      throw new BadRequest('Invalid ID')
    }
    return job
  }

  async delete(id) {
    const job = await dbContext.Jobs.findByIdAndDelete(id)
    if (!job) {
      throw new BadRequest('Invalid ID')
    }
    return job
  }
}

export const jobsService = new JobsService()
