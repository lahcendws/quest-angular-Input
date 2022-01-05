import { Component, OnInit } from '@angular/core';
import { Skill } from '../common/skill.model';
import { Developer } from '../common/developer.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
 
 skills: Skill[] = [
 
  {name: 'java spring', logo: 'java', site: 'spring.com'},
  {name: 'php symfony', logo: 'php', site: 'php.net'},
 

]

currentSkill:Skill = new Skill();
  constructor() { }

  ngOnInit(): void {
  }

}
