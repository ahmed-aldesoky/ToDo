import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faCalendarTimes,faCalendar } from '@fortawesome/free-solid-svg-icons';
import { Task,PostTaskPayload} from '../../Task';




@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  faCalendar=faCalendar
  faCalendarTimes=faCalendarTimes

@Output() onAddTask: EventEmitter<PostTaskPayload> = new EventEmitter();
  mydata:PostTaskPayload= {
    data:{text:"",
      day:"",
      reminder:false}
     
  };
 
text:string="aaaa";
day:string ="aa";
reminder:boolean=false


  constructor() { }

  ngOnInit(): void {}


  onSubmit(){

    const newTask: PostTaskPayload = {
      data:{text: this.mydata.data.text,
        day: this.mydata.data.day,
        reminder: this.mydata.data.reminder}
    };
// send data to task componnent
    this.onAddTask.emit(newTask);

    this.mydata.data.text = '';
    this.mydata.data.day = '';
    this.mydata.data.reminder = false;
    
  }

}
