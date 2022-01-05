import { Component } from '@angular/core';
import { DeveloperService } from './Services/developer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  devs: any;
  title = 'angular_test';

  constructor(private developerService: DeveloperService){
    this.listarDevs();
  }

  listarDevs(){
    this.developerService.listarDevs().subscribe((data) => {

      this.devs = data;
    },
    (error) => {
      console.log(error);
    })
  }

  excluirDevs(){

  }
}
