import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-panel-task',
  templateUrl: './panel-task.component.html',
  styleUrls: ['./panel-task.component.css']
})
export class PanelTaskComponent implements OnInit {

    tasks = [];

    constructor(
        private taskService: TaskService
    ) { }

    ngOnInit() {
        this.renderScreen();
    }

    renderScreen() {
        this.taskService.list().subscribe(res => this.tasks = <any> res);
    }

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
    }

    

}
