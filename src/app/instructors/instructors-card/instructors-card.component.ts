import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'instructors-card',
  templateUrl: './instructors-card.component.html',
  styleUrls: ['./instructors-card.component.css'],
})
export class InstructorsCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  instructors = [
    { img: '', name: 'Leon Adams', type: 'Asst. Professor - Marketing' },
    { img: '', name: 'Cecelia Logan', type: 'Instructor - Design' },
    { img: '', name: 'Bruce Lee', type: 'Professor - Business & Analytics' },
    { img: '', name: 'Hazel Black', type: 'Instructor - Photography' },
    { img: '', name: 'Lydia Bell', type: 'Professor - Finance' },
    { img: '', name: 'Danielle Osborne', type: 'Instructor - Technology' },
    { img: '', name: 'Connie Alexander', type: 'Instructor - Beauty' },
    { img: '', name: 'William Curtis', type: 'Professor - Music' },
    { img: '', name: 'Casey Evans', type: 'Professor - Language' },
    { img: '', name: 'Vivian Allison', type: 'Asst. Instructor - Technology' },
    { img: '', name: 'Rose Cohen', type: 'Asst. Instructor - Design' },
    { img: '', name: 'Estelle Fernandez', type: 'Professor - Marketing' },

  ];
}
