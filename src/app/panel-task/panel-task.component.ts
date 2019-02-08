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
        var oldPosition = event.previousIndex;
        var attempedPosition = event.currentIndex;
        this.normalizePositions(oldPosition, attempedPosition);
        // this.taskService.updateAll(this.tasks).subscribe();
    }

    normalizePositions(oldPosition, attempedPosition) {
        var movingTask = this.tasks.find(t => t.position == oldPosition);
        if(oldPosition > attempedPosition) {
            this.normalizePositionsUpToDown(movingTask, attempedPosition);
        } else if (oldPosition < attempedPosition) {
            this.normalizePositionsDownToUp(movingTask, attempedPosition);
        }
    }

    normalizePositionsUpToDown(movingTask, attempedPosition) {
        var nextAttempedPosition = attempedPosition + 1;
        this.normalizeRecursively(this.normalizePositionsUpToDown, movingTask, attempedPosition, nextAttempedPosition)
        // var existingTask = this.tasks.find(t => t.position == attempedPosition);
        // movingTask.position = attempedPosition;
        // if(existingTask){
        //     this.normalizePositionsUpToDown(existingTask, nextAttempedPosition);
        // }
    }

    normalizePositionsDownToUp(movingTask, attempedPosition) {
        var existingTask = this.tasks.find(t => t.position == attempedPosition);
        movingTask.position = attempedPosition;
        if(existingTask){
            this.normalizePositionsDownToUp(existingTask, attempedPosition - 1);
        }
    }

    normalizeRecursively(callback, movingTask, attempedPosition, nextAttempedPosition){
        var existingTask = this.tasks.find(t => t.position == attempedPosition);
        movingTask.position = attempedPosition;
        if(existingTask){
            callback(existingTask, nextAttempedPosition);
        }
    }

    function fn(x: () => void) {
        x();
    }

}
