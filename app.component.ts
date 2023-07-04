import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  list = [ ];

  add(inputControl){
    if (inputControl.value==''){
      return;
    }
    this.list.push(inputControl.value);
    inputControl.value= ' ';
  }

  remove(item){
    const index = this.list.findIndex(each => each===item);
    this.list.splice(index,1);
  }
}
