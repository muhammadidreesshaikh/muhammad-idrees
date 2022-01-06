import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  data: any = [];
  cards: any = [];
  icons: any = [];
  profile: any = [];
  review: any = [];


  constructor() { }

  ngOnInit(): void {
    this.data =[
      {
        id: 1,
        image: './assets/img/service1.png',
        name: 'Web Development',
      },
      {
        id: 2,
        image: './assets/img/service2.png',
        name: 'Graphic Design',
      },
      {
        id: 3,
        image: './assets/img/service3.png',
        name: 'Application Development',
      },
      {
        id: 4,
        image: './assets/img/service4.png',
        name: 'Research & Insights',
      },
      {
        id: 5,
        image: './assets/img/service5.png',
        name: 'Quality Assurance',
      },
      {
        id: 6,
        image: './assets/img/service6.png',
        name: 'SEO Optimization',
      }
    ]

    this.icons =[
      {
        id: 1,
        icon: 'far fa-check-circle',
        number: '4500',
        name: 'PROJECT COMPLETED',
      },
      {
        id: 2,
        icon: 'fas fa-user-tie',
        number: '1,000',
        name: 'OUR STAFF',
      },
      {
        id: 3,
        icon: 'fas fa-headset',
        number: '350',
        name: 'SERVICES PROVIDE',
      },
      {
        id: 4,
        icon: 'far fa-smile',
        number: '7,650',
        name: 'HAPPY CUSTOMERS',
      },
    ]

    this.profile =[
      {
        id: 1,
        image: './assets/img/awais.JPG',
        name: 'm. awais',
        text: 'Full Stack Developer',
      },
      {
        id: 2,
        image: './assets/img/idrees.JPG',
        name: 'm. idrees',
        text: 'UI / UX Developer',
      },
      {
        id: 3,
        image: './assets/img/ilyas.JPG',
        name: 'ilyas ahmed',
        text: 'Fronted Developer',
      },
      {
        id: 4,
        image: './assets/img/anis.JPG',
        name: 'm. anees',
        text: 'Backend Developer',
      }
    ]

    this.review =[
      {
        id: 1,
        text: 'Idrees is motivated, team player and forward-thinking. A person who has passion to learn and work on new technologies. A person who is eager to learn new things.',
        image: './assets/img/man.jpg',
        name: 'Abdul Raziq Advani',
        job: 'Software Engineer',
      },
      {
        id: 2,
        text: 'We are proudly saying to have a resource like Muhammad Idrees in our team as a Sr. Mobile App Developer. We wish a very best of luck in his future with us',
        image: './assets/img/man2.png',
        name: 'Ilyas Shaikh',
        job: 'Web Developer',
      },
      {
        id: 3,
        text: 'Idrees is an ideal team member. Always comes up with innovative solutions for the most complex problems. He is the all rounder cum specialist for the skill sets he is having.',
        image: './assets/img/man3.png',
        name: 'Adom Accy',
        job: 'Full Stack Developer',
      }
    ]
  }

}
