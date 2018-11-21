import { Component, OnInit } from '@angular/core';
import { TodoInterface } from '../interfaces/todo-interface';
import { Todo } from '../models/todo';
import { TODOS } from '../mocks/mock-todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: TodoInterface[] = TODOS;
  newTodo: TodoInterface = new Todo();

  constructor() { }

  addTodo() {
    const lastIndex: number = this.todos.length - 1;
    const last: TodoInterface = this.todos[lastIndex];
    this.newTodo.id =  last.id + 1;
    if (this.newTodo.name.trim().length >= 1) {
      this.todos.push(this.newTodo);
      this.newTodo = new Todo();
    }
  }

  toggleCompleteTodo(todo) {
    todo.isCompleted = !todo.isCompleted;
  }

  toggleDeletedTodo(todo) {
    todo.isDeleted = !todo.isDeleted;
  }

  deleteTodo(todo) {
    const remove: number = this.todos.indexOf(todo);
    if (remove !== -1) {
      this.todos.splice(remove, 1);
    }
  }

  renderIsCompletedText(todo: TodoInterface) {
    return todo.isCompleted ? 'Uncomplete' : 'Complete';
  }

  renderText(tags): String {
    return tags.join(', ');
  }

  ngOnInit() {
    console.log(this.todos);
  }

}
