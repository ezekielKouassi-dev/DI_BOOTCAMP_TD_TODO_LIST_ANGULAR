import { Component, Input } from '@angular/core';
import { Tasks } from 'src/app/models/tasksModel/tasks';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task! : Tasks;

  // TODO : add a method that open a new route to display task description
  
}
