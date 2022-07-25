import { Injectable } from '@angular/core';
import {DeleteTasksResponse, PostTaskPayload, Task, TasksResponse,UpdateTasksReminderPayload,UpdateTasksResponse} from '../Task';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers:new HttpHeaders({
    'content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
 private apiUrl= 'http://localhost:1337/api/tasks'


  constructor(private http:HttpClient) { }
  getTasks(): Observable<TasksResponse>{
   return this.http.get<TasksResponse>(this.apiUrl)
  }

  deleteTask(task:Task):Observable<DeleteTasksResponse>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<DeleteTasksResponse>(url);
  }
  updateTaskReminder(task:UpdateTasksReminderPayload):Observable<UpdateTasksResponse>{
    const url = `${this.apiUrl}/${task.data.id}`;
    return this.http.put<UpdateTasksResponse>(url,task,httpOptions);
  }

  postTask(task:PostTaskPayload):Observable<any>{
    const url = `${this.apiUrl}`;
    return this.http.post<any>(url,task,httpOptions);
  }


}
