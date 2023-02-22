import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(private route: Router, private relative: ActivatedRoute){}


  ngOnInit(){}

  logout(){
    window.location.reload();
  }
}
