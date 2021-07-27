import { ProxyState } from "../AppState.js";
import { jobsService } from "../Services/JobsService.js";


function _draw(){
  let template = ''
  let jobs = ProxyState.jobs
  jobs.forEach(job => {
    template += job.getTemplate()
  });
  document.getElementById('jobs').innerHTML = template
}

export default class JobsController{


  constructor(){
    ProxyState.on('jobs', _draw)

    _draw()
    this.getAllJobs()
  }

  async getAllJobs(){
    try{
    await jobsService.getAllJobs()
    } catch(error) {
      console.log('error job getting', error)
    }
  }

  async createJob(){
    try{
      event.preventDefault()
      console.log(event.target)
      let form = event.target

      let rawJob = {
        position: form.position.value,
        salary: form.salary.value,
        city: form.city.value,
        hrWeek: form.hrWeek.value,
        overTime: form.overtime.value,
        description: form.description.value,
        imgUrl: form.imgUrl.value
      }

      await jobsService.createJob(rawJob)
      form.reset()
    } catch (error){
      console.log('creating job fail:', error)
    }
  }
}