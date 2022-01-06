import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  data: any = [];
  
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
  }

}
