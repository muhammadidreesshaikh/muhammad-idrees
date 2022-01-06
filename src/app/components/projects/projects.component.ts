import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  cards: any = [];

  constructor() { }

  ngOnInit(): void {
    this.cards =[
      {
        id: 1,
        image: '/assets/img/portfolio2.jpeg',
        link: 'https://www.unation.com/',
        name: 'Unation',
      },
      {
        id: 2,
        image: '/assets/img/portfolio2.jpeg',
        link: 'https://www.mimik.app//',
        name: 'Mimik',
      },
      {
        id: 3,
        image: '/assets/img/portfolio2.jpeg',
        link: 'https://www.zkteco.com.pk/product_category/70.html',
        name: 'Zkteco',
      },
      {
        id: 4,
        image: '/assets/img/portfolio2.jpeg',
        link: 'https://www.gamelist.club/',
        name: 'Gamelist',
      },
      {
        id: 5,
        image: '/assets/img/portfolio2.jpeg',
        link: 'https://www.getinsurance.pk/',
        name: 'Jubilee',
      },
      {
        id: 6,
        image: '/assets/img/portfolio2.jpeg',
        link: 'https://www.bankalhabib.com/',
        name: 'Al Habib',
      },
      {
        id: 7,
        image: '/assets/img/portfolio2.jpeg',
        link: 'https://www.luxresearchinc.com/',
        name: 'Lux',
      },
      {
        id: 8,
        image: '/assets/img/portfolio2.jpeg',
        link: 'https://nuovopay.com/',
        name: 'Nuovopay',
      },
      {
        id: 9,
        image: '/assets/img/portfolio2.jpeg',
        link: 'https://www.mycnote.com/',
        name: 'My Cnote',
      },
      {
        id: 10,
        image: '/assets/img/portfolio2.jpeg',
        link: 'https://thehongkongopen.com/',
        name: 'Hong Kong',
      }
    ]
  }

}
