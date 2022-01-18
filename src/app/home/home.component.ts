import { Component, OnInit } from '@angular/core';
import { Team } from '../model/team';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  teams: Team[] = [];
  constructor() {
    this.teams.push(new Team(1, "barcelona"));
    this.teams.push(new Team(2, "Real Madrid"));
    this.teams.push(new Team(3, "Atletico Madrid"));

  }

  ngOnInit(): void {
  }

}
