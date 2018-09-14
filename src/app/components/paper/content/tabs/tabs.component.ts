import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  public tab: number;
  constructor(){}
  ngOnInit() {
    this.tab = 0;
  }
  change(number){
   this.tab = number;
  }

}
