import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcomponent',
  templateUrl: './newcomponent.component.html',
  styleUrls: ['./newcomponent.component.css']
})
export class NewcomponentComponent implements OnInit {
  color='red';
  constructor() { }

  ngOnInit(): void {
  }
  onClick(color){
    this.color = 'red';
    
  }
}
