import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
  export class ContentComponent implements OnInit {
    @Input()
    contentTitle:string='';
    @Input()
    contentImages:string='';
    @Input()
    contentDescription:string='';
  constructor() { }

  ngOnInit(): void {
  }

}
