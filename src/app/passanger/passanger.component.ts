import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-passanger',
  templateUrl: './passanger.component.html',
  styleUrls: ['./passanger.component.css']
})
export class PassangerComponent implements OnInit, OnChanges {
  @Input('item') item:any;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  ngOnInit(): void {
    console.log(this.item)
  }

}
