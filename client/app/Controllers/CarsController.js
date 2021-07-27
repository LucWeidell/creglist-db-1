import { ProxyState } from "../AppState.js"
import { carsService } from "../Services/CarsService.js"


function _draw(){
  let template = ''
  let cars= ProxyState.cars
  cars.forEach(car => {
    template += car.getTemplate()

  })
  document.getElementById('cars').innerHTML = template
}

export default class CarsController {
  constructor(){
    //When cars changes in the ProxyState, run teh draw method
    ProxyState.on('cars', _draw)
    _draw()
    this.getAllCars()
  }

  async createCar(){
    try{
      event.preventDefault()
      console.log(event.target)
      let form = event.target

      let rawCar = {
        make: form.make.value,
        model: form.model.value,
        year: form.year.value,
        price: form.price.value,
        description: form.description.value,
        imgUrl: form.imgUrl.value
      }

      await carsService.createCar(rawCar)
    // let rawCar = {
    //   make: form.make.value,
    //   model: form.model.value,
    //   year: form.year.value,
    //   price: form.price.value,
    //   description: form.description.value,
    //   imgUrl: form.imgUrl.value
    // }
      carsService.createCar(rawCar)
      form.reset()
    } catch (error){
      console.log('creating car fail:', error)
    }
  }
  async getAllCars(){
    try{
    carsService.getAllCars()
    } catch (error) {
      console.log("getting cars error", error)
    }
  }
}