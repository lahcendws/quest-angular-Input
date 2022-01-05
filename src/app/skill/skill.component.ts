import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../common/skill.model';
import { Developer } from '../common/developer.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  @Input()
  skill:Skill=new Skill();
  
  constructor() { }

  ngOnInit(): void {
  }

}
