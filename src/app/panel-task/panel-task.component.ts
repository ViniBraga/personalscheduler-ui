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

    moveTasks(event: CdkDragDrop<string[]>) {

        moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);

        this.tasks[event.previousIndex].position = event.currentIndex + 1;

        var sortedTasks: string[] = this.tasks.sort((n1,n2) => {
            if(n1.position > n2.position) return 1;
            else return -1
        });

        this.normalizePositions(sortedTasks);
        
        this.taskService.updateAll(sortedTasks).subscribe();

    }

    normalizePositions(sortedTasks) {
        for (let index = 0; index < sortedTasks.length; index++) {
            sortedTasks[index].position = (index + 1) * 2;
        }
    }

}
