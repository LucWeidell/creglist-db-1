import { ProxyState } from "../AppState.js";
import Car from "../Models/Car.js";
import House from "../Models/House.js";
import Job from "../Models/Job.js";



export function saveState() {
  localStorage.setItem('taskMaster', JSON.stringify({
    cars: ProxyState.cars,
    houses: ProxyState.houses,
    jobs: ProxyState.jobs
  }))
  console.log('saved state', ProxyState)
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('taskMaster'))
  console.log(data)
  if (data != null) {
    ProxyState.cars = data.lists.map(c => new Car(c))
    ProxyState.houses = data.tasks.map(h => new House(h))
    ProxyState.jobs = data.tasks.map(j => new Job(j))
  }

}