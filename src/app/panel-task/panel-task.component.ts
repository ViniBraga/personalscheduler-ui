import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-task',
  templateUrl: './panel-task.component.html',
  styleUrls: ['./panel-task.component.css']
})
export class PanelTaskComponent implements OnInit {

  tasks = [
    {
        "id": 2,
        "description": "Comer",
        "lastUpdate": "2019-02-01T21:02:34.789",
        "createdAt": "2019-02-01T21:02:11.841",
        "done": false
    },
    {
        "id": 3,
        "description": "fazer o tema",
        "lastUpdate": "2019-02-01T21:02:12.145",
        "createdAt": "2019-02-01T21:02:12.145",
        "done": false
    },
    {
        "id": 4,
        "description": "fazer o tema",
        "lastUpdate": "2019-02-01T21:02:12.467",
        "createdAt": "2019-02-01T21:02:12.467",
        "done": false
    },
    {
        "id": 5,
        "description": "fazer o tema",
        "lastUpdate": "2019-02-01T21:02:12.806",
        "createdAt": "2019-02-01T21:02:12.806",
        "done": false
    },
    {
        "id": 6,
        "description": "fazer o tema",
        "lastUpdate": "2019-02-01T21:02:13.18",
        "createdAt": "2019-02-01T21:02:13.18",
        "done": false
    }
];

  constructor() { }

  ngOnInit() {
  }

}
