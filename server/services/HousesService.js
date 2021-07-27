import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class HousesService {
  async getAll(query = {}) {
    const house = await dbContext.Houses.find(query)
    return house
  }

  async getById(id) {
    const house = await dbContext.Houses.findById(id)
    if (!house) {
      throw new BadRequest('Invalid ID')
    }
    return house
  }

  async create(body) {
    const house = await dbContext.Houses.create(body)
    return house
  }

  async edit(body) {
    const house = await dbContext.Houses.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    if (!house) {
      throw new BadRequest('Invalid ID')
    }
    return house
  }

  async delete(id) {
    const house = await dbContext.Houses.findByIdAndDelete(id)
    if (!house) {
      throw new BadRequest('Invalid ID')
    }
    return house
  }
}

export const housesService = new HousesService()
