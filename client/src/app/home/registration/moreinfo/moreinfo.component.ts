import { Component, OnInit,Input, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-moreinfo',
 templateUrl: './moreinfo.component.html',
 styleUrls: ['./moreinfo.component.scss']
})
export class MoreinfoComponent implements OnInit {


  @Input() company:object;

@Output() moreinfoSaved=new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  	
  }
savemoreinfo() {
	this.moreinfoSaved.emit(this.company);
}

}