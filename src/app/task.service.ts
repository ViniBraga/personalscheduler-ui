import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  apiUrl = 'http://localhost:8080/tasks'

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get(this.apiUrl);
  }

  add(task: any) {
    return this.httpClient.post(this.apiUrl, task);
  }

  update(task: any) {
    return this.httpClient.put(this.apiUrl, task);
  }

  updateAll(tasks: any) {
    return this.httpClient.put(this.apiUrl + "/all", tasks);
  }

}
