import { Component, OnInit } from '@angular/core';
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	// Variable declaration
	username:string;
	occupation:string;
	day:string = "select";
	todos:string;
	nameErr:boolean = false;
	occupationErr:boolean = false;
	dayErr:boolean = false;
	todosErr:boolean = false;
	infoHeader:boolean = false;
	incompleteToDos:boolean = true;
	completedToDos:boolean = false;
	isIncArrZero:boolean = false;
	isCmpArrZero:boolean = false;
	editToDoInput:boolean = false;
	checkToDo:boolean = false;
	editToDoErr:boolean = false;
	moveToDoMsg:boolean = false;
	updateToDoText:string;
	undoTodoText:string;
	editToDoIndex:number;
	undotodoIndex:number;
	inc_todos_arr = [
	"Practising Java script components",
	"Learning Jquery components",
	"Learning angularjs routing",
	];
	c_todos_arr = ["Learning basic element structure"];

  constructor() { }

  ngOnInit() {
  	if (this.inc_todos_arr.length === 0) {
  		this.isIncArrZero = true;
  	}
  	if (this.c_todos_arr.length === 0) {
  		this.isCmpArrZero = true;
  	}
  }

  // Create To Do list
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
  		if (day === "select") {
  			this.dayErr = true;
  		}
  		if (!todos) {
  			this.todosErr = true;
  		}
  		if (username && occupation && day && todos) {
  			this.inc_todos_arr.push(todos);
  			this.isIncArrZero = false;
  			this.todos = '';
  		}
  	}
  }

  // On change today or tomorrow
  dayOnChange() {
  	let username = this.username;
  	let occupation = this.occupation;
  	let day = this.day;

  	this.dayErr = false;
  	this.inc_todos_arr = [];
  	if (username && occupation && day) {
		this.infoHeader = true;
	}
  }

  // Username on change
  nameOnChange() {
  	let username = this.username;
  	if (!username) {
  		this.nameErr = true;
  	} else {
  		this.nameErr = false;
  	}
  }

  // Occupation on change
  occupOnChange() {
  	let occupation = this.occupation;
  	if (!occupation) {
  		this.occupationErr = true;
  	} else {
  		this.occupationErr = false;
  	}
  }

  // To Do on change
  todoOnChange() {
  	let todos = this.todos;
  	if (!todos) {
  		this.todosErr = true;
  	} else {
  		this.todosErr = false;
  	}
  }

  // Toggle complete and incomplete tabs
  showTabs(status) {
  	if (status === "incomplete") {
  		this.incompleteToDos = true;
  		this.completedToDos = false;
  		this.moveToDoMsg = false;
  	} else {
  		this.completedToDos = true;
  		this.incompleteToDos = false;
  		this.editToDoInput = false;
  	}
  }

  // Move To Do into completed to do list
  moveToDoToCmp(todo) {
  	let index = this.inc_todos_arr.indexOf(todo);

  	this.undotodoIndex = this.inc_todos_arr.indexOf(todo);

  	this.undoTodoText = todo;

  	setTimeout(() => {
			this.inc_todos_arr.splice(index, 1);
  		this.c_todos_arr.push(todo);
  		this.moveToDoMsg = true;
  		$('.message').fadeIn(500);

  		if (this.inc_todos_arr.length === 0) {
	  		this.isIncArrZero = true;
	  	}
		}, 500);


  	this.isCmpArrZero = false;
  	setTimeout(() => {
	     $('.message').fadeOut();
		}, 15000);
}

  // Edit to do
  editToDo(i,todo) {
  	this.editToDoInput = true;
  	this.editToDoErr = false;
  	this.updateToDoText = todo;
  	this.editToDoIndex = i;
  }

  // Update To Do 
  updateToDo(e,i) {
  	if (e.keyCode == 13) {
  		if (this.updateToDoText === '') {
  			this.editToDoErr = true;
  		} else {
  			this.inc_todos_arr.splice(i, 1, this.updateToDoText);
  			this.editToDoInput = false;
  		}
  	}
  }

  // Delete completed to-do's
  deleteCmpTodo(i) {
  	if(window.confirm('You want to delete this To-Do ?')){
	 	this.c_todos_arr.splice(i, 1);  
	 	if (this.c_todos_arr.length === 0) {
	  		this.isCmpArrZero = true;
	  	}
	}
  }

  // Delete incompleted to-do's
  deleteInCmpTodo(i) {
  	if(window.confirm('You want to delete this To-Do ?')){
	 	this.inc_todos_arr.splice(i, 1);  
	 	if (this.inc_todos_arr.length === 0) {
	  		this.isIncArrZero = true;
	  	}
	}
  }

  // Undo move to-do to completed list
  undoToDo() {
  	let index = this.inc_todos_arr.indexOf(this.undoTodoText);
  	console.log(index);
  	this.c_todos_arr.splice(index, 1);
  	// this.inc_todos_arr.push(this.undoTodoText);
  	this.inc_todos_arr.splice(this.undotodoIndex, 0, this.undoTodoText);
  	this.moveToDoMsg = false;

  	if (this.inc_todos_arr.length > 0) {
  		this.isIncArrZero = false;
  	}
  } 
}


// setTimeout(() => {
//   		if (index > -1) {
// 		    this.inc_todos_arr.splice(index, 1);
// 		}
//   		this.c_todos_arr.push(todo);
//   		this.moveToDoMsg = true;
//   		$('.message').fadeIn(500);
// 	}, 500);
// 	if(this.inc_todos_arr.length === 1) {
// 	  	 	this.inc_todos_arr.splice(-1,1)
// 	  	}
//   	this.isCmpArrZero = false;
//   	setTimeout(() => {
// 	     $('.message').fadeOut();
// 	}, 15000);
// 	console.log(this.inc_todos_arr)
// 	if (this.inc_todos_arr.length === 0) {
//   		this.isIncArrZero = true;
//   	}