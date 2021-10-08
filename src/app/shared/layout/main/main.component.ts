import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public gobBlocks = Array(30).fill(1);

  constructor() { }

  ngOnInit(): void {
  }

}
