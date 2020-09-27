import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-networth-show',
  templateUrl: './networth-show.component.html',
  styleUrls: ['./networth-show.component.css']
})
export class NetworthShowComponent implements OnInit {

  @Input()
  netWorth: number;

  constructor() { }

  ngOnInit(): void {
  }

}
