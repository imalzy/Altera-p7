import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input('title') title!:string;
  @Input() description!:string
  @Output() trigger = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  onFeedback():void{
    this.trigger.emit('Hi ini Output !!')
  }

}
