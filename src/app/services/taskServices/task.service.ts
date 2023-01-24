import { Injectable, OnInit } from '@angular/core';
import { Tasks } from 'src/app/models/tasksModel/tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService implements OnInit {

  tasks : Tasks[] = [
    {
      name : "to eat",
      description: "I have to eat at 09 O'clock"
    },
    {
      name : "do exercice todo-list",
      description : "this exercice has been gave by mister doumbia"
    },
    {
      name : "send mail to miss salome",
      description : "miss salome is the secretariat woman"
    },
    {
      name : "go home",
      description : "After doing TD with mister Doumbia, I have to go home for rest myself"
    }
  ];

  constructor() { }

  ngOnInit(): void {

    // FIXME : method onInit not charging my table data
    this.tasks = [
      {
        name : "to eat",
        description: "I have to eat at 09 O'clock"
      },
      {
        name : "do exercice todo-list",
        description : "this exercice has been gave by mister doumbia"
      },
      {
        name : "send mail to miss salome",
        description : "miss salome is the secretariat woman"
      },
      {
        name : "go home",
        description : "After doing TD with mister Doumbia, I have to go home for rest myself"
      }
    ];
  }

  getAllTasksList() {
    return this.tasks;
  };

  addTask(task : Tasks) {
    this.tasks.unshift(task);
  }
}
