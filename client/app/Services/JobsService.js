import { ProxyState } from "../AppState.js"
import Job from "../Models/Job.js"
import {api} from "./AxiosService.js"


class JobsService{

  async getAllJobs(){
    const res = await api.get('jobs')
    console.log('jobs getter:', res.data)
    ProxyState.jobs = res.data.map(j => new Job(j))
  }

  async createJob(rawJob){
    const res = await api.post('jobs', rawCar)

    console.log('your new job sir',res.data)
    ProxyState.jobs = [...ProxyState.jobs, new Job(res.data)]
  }

  async deleteJob(jobId){
    const res = await api.delete('houses/' + jobId)
    console.log('your deleted job sir',res.data)
    ProxyState.jobs = ProxyState.jobs.filter(j => j.id != jobId)
  }


}

export const jobsService = new JobsService()