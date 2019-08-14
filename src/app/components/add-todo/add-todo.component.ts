import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  //any인 이유: id가 없어서 Todo 모양이 되지 않기 때문 
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  title:String;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const todo = {
      title: this.title,
      complete: false
    }

    this.addTodo.emit(todo);
  }
}
