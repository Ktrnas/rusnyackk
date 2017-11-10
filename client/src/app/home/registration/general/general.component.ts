import { Component, OnInit,Input, Output ,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
@Input() company:object;

@Output() generalSaved=new EventEmitter();
file:File;
public logoloaded=false;
  constructor() {
  }

  ngOnInit() {
  }

  getFile(event)
  {
  	this.file=event.target.files[0];
  	this.company["logo"]=this.file.name;
  	this.logoloaded=true;
  }
savegeneral() {
	this.generalSaved.emit(this.company);
}
}