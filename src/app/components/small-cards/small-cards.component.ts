import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-cards',
  templateUrl: './small-cards.component.html',
  styleUrls: ['./small-cards.component.css']
})
export class SmallCardsComponent implements OnInit {
  @Input()
  smallCardPhoto:string='';
  @Input()
  smallCardTitle:String=''

  constructor() { }

  ngOnInit(): void {
  }

}
