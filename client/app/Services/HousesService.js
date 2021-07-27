import { ProxyState } from "../AppState.js"
import House from "../Models/House.js"
import {api} from "./AxiosService.js"

class HousesService{

  async getAllHouses(){
    const res = await api.get('houses')
    console.log('houses getter:', res.data)
    debugger
    ProxyState.houses = res.data.map(h => new House(h))
  }

  async createHouse(rawHouse){
    const res = await api.post('houses', rawCar)

    console.log('your new house sir',res.data)
    ProxyState.houses = [...ProxyState.houses, new House(rawHouse)]
  }
  async deleteHouse(houseId){

    ProxyState.houses = ProxyState.houses.filter(h => c.id != carID)
    const res = await api.delete('houses/' + carID)
    ProxyState.houses = ProxyState.house.filter(h => h.id != houseId)
  }
}

export const housesService = new HousesService()