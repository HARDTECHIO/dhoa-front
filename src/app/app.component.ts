import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'doa-front';

  constructor(
    private router: Router
  ){}

  ngOnInit(){
    if(environment.token == ''){
      this.router.navigate(['/site'])
    }
  }
}
