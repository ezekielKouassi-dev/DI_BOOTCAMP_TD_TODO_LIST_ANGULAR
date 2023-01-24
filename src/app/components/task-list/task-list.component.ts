import { Component, OnInit } from '@angular/core';
import { Tasks } from 'src/app/models/tasksModel/tasks';
import { TaskService } from 'src/app/services/taskServices/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  taskList! : Tasks[];

  constructor(private taskService : TaskService) { }

  ngOnInit(): void {
    this.taskList = this.taskService.getAllTasksList();
  }

  addNewTasks(name : string, description : string) {
    const newTask : Tasks = {
      name : name,
      description : description
    };

    this.taskService.addTask(newTask);
  }
  
}
