import { Component, OnInit } from '@angular/core';
import {PostTaskPayload, Task,UpdateTasksReminderPayload} from '../../Task';
import {TaskService } from '../../services/task.service';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks:Task[]=[]
  post:any=[];
  constructor( private taskServices:TaskService) { }

  ngOnInit(): void {
     this.taskServices.getTasks().subscribe(
      
      (tasks)=>(this.tasks=tasks.data.map(task=>({
        
        id:task.id,
        text:task.attributes.text,
        day:task.attributes.day,
        reminder:task.attributes.reminder,

      }))))
    }

  deleteTask(task:Task){
    this.taskServices.deleteTask(task).subscribe(
      (task)=>(this.tasks=this.tasks.filter(t=>t.id !== task.data.id)))
  }
  toggleReminder(task:UpdateTasksReminderPayload){
    console.log(task.data.reminder);
    task.data.reminder = !task.data.reminder
    this.taskServices.updateTaskReminder(task).subscribe()

    
  }

  addTask(task: PostTaskPayload) {
    this.taskServices.postTask(task)
    .subscribe((task) => this.tasks.push(task));
  }

}
