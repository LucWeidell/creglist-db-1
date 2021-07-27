import { ProxyState } from "../AppState.js"
//NOTE why does service need to know car class to make one : THINK I KNOW WHU
import Car from "../Models/Car.js"
import { api } from "./AxiosService.js"



class CarsService {
  constructor(){}


  async getAllCars(){
    const res = await api.get('cars')
    console.log('your car getter',res.data)
    ProxyState.cars = res.data.map(c => new Car(c))
  }
  async createCar(rawCar){
    const res = await api.post('cars', rawCar)
    console.log('your new car sir',res.data)
    ProxyState.cars = [...ProxyState.cars, new Car(res.data)]
  }

  async deleteCar(carID){
    // NOTE api delete here
    ProxyState.cars = ProxyState.cars.filter(c => c.id != carID)
    const res = await api.delete('cars/' + carID)
    console.log('your deleted car sir',res.data)
  }

  async bidCar(carID){
    let foundCar = ProxyState.cars.find(c.id = carID)
    foundCar.price += 100
    const res = await api.put('cars/'+carID, foundCar)
    console.log('your fixed car sir',res.data)
    ProxyState.cars = ProxyState.cars
  }
}

// NOTE you are using all the services not change the object
// Singleton: only gets instantiated once and just passed around
export const carsService = new CarsService()