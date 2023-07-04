import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  list:any =[];

  add(inputControl: { value: string; }){
    if (inputControl.value=== ' ' ) {
      return;
    }
    this.list.push(
      {description: inputControl.value ,
        completed: false
      });
    inputControl.value= ' ';
  }

  remove(item: { description: any; }){
    const index = this.list.findIndex((each: { description: any; }) => {
      return each.description === item.description;
    });
    this.list.splice(index,1);
  }

  toggle(item: { completed: boolean; }){
    item.completed = !item.completed
  }
}
