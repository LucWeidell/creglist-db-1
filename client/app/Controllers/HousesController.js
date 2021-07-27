import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js";


function _draw(){
  let template = ''
  let houses = ProxyState.houses
  houses.forEach(house => {
    template += house.getTemplate()
  });
  document.getElementById('houses').innerHTML = template
}

export default class HousesController{

  constructor(){
    ProxyState.on('houses', _draw)
    _draw()

    this.getAllHouses()
  }

  async getAllHouses(){
    try{
    housesService.getAllHouses()
    } catch (error) {
      console.log("getting house error", error)
    }
  }

  async createHouse(){
    try{
      event.preventDefault()
      console.log(event.target)
      let form = event.target

      let rawHouse = {
        year: form.year.value,
        levels: form.levels.value,
        squareFt: form.squareFeet.value,
        bedrooms: form.bed.value,
        bathrooms: form.bath.value,
        price: form.price.value,
        description: form.description.value,
        imgUrl: form.imgUrl.value
      }

      await housesService.createHouse(rawHouse)
      form.reset()
    } catch (error){
      console.log('creating house fail:', error)
    }
  }
}