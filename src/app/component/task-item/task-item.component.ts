import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { faSquare ,faCheckSquare,faTrash,faPencilAlt,faInfoCircle,faSquareFull} from '@fortawesome/free-solid-svg-icons';
import {Task,UpdateTasksReminderPayload} from '../../Task';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  faSquare=faSquare 
  faCheckSquare=faCheckSquare
  faTrash=faTrash
  faPencilAlt=faPencilAlt
  faInfoCircle=faInfoCircle
  @Input() data!:Task
  @Output() onDeleteTask:EventEmitter<Task> =new EventEmitter()
  @Output() onToggleReminder:EventEmitter<UpdateTasksReminderPayload> =new EventEmitter()

  
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(data: Task){
    console.log("delete task item")
    this.onDeleteTask.emit(data)
  }

  
  onToggle(paylaod: UpdateTasksReminderPayload){
    this.onToggleReminder.emit(paylaod)
  }


}
