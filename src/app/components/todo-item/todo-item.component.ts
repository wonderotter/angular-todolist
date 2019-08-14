import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent implements OnInit {
  @Input() hippo: Todo;

  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

  //Set Dynamic Classes(css)
  setClasses = () => {
    let classes = {
      "todo": true, //"" 없이 todo라고 해도 된다 -> 두 단어 이상일떄는 꼭 "" 써야하는 듯
      "is-completed": this.hippo.completed
    }

    return classes;
  }

  onToggle(todo) {
    //Toggle in UI
    todo.completed = !todo.completed;
    //Toggle on Server
    this.todoService.toggleCompleted(todo).subscribe(res => {
      console.log(res);
    });
  }

  onDelete(todo) {
    console.log('delete');
    console.log(todo.title);
  }
}
