import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	// Variable declaration
	username:string;
	occupation:string;
	day:string;
	todos:string;
	nameErr:boolean = false;
	occupationErr:boolean = false;
	dayErr:boolean = false;
	todosErr:boolean = false;
	infoHeader:boolean = false;
	todos_arr = [];


  constructor() { }
  ngOnInit() {
  	
  }

  createToDo(e) {
  	let username = this.username;
  	let occupation = this.occupation;
  	let day = this.day;
  	let todos = this.todos;

  	if (e.keyCode == 13 || e === "submit") {  		
  		if (!username) {
  			this.nameErr = true;
  		}
  		if (!occupation) {
  			this.occupationErr = true;
  		}
  		if (!day) {
  			this.dayErr = true;
  		}
  		if (!todos) {
  			this.todosErr = true;
  		}
  		if (username && occupation && day && todos) {
  			this.todos_arr.push(todos);
  			this.todos = '';
  		}
  	}
  }


  dayOnChange() {
  	let username = this.username;
  	let occupation = this.occupation;
  	let day = this.day;

  	this.dayErr = false;
  	this.todos_arr = [];
  	if (username && occupation && day) {
		this.infoHeader = true;
	}
  }

}
