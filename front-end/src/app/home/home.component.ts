import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FaConfig } from '@fortawesome/angular-fontawesome';
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faPinterestSquare,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  homeicon = faLocationDot;
  emailicon = faEnvelope;
  phoneicon = faPhone;
  facebookicon = faFacebookSquare;
  tweetrericon = faTwitterSquare;
  pinteresticon = faPinterestSquare;
  instagramicon = faInstagramSquare;

  images = [
    {
      url: 'assets/images/jute1.jpg',
      title: 'Image 1',
      description: 'This is the first image description.',
    },
    {
      url: 'assets/images/vegetables.jpg',
      title: 'Image 2',
      description: 'This is the second image description.',
    },
    {
      url: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFncmljdWx0dXJlfGVufDB8fDB8fHww',
      title: 'Image 3',
      description: 'This is the third image description.',
    },
  ];

  constructor(private router: Router) {}

  navigateTo(page: string): void {
    this.router.navigate([page]);
  }
  carouselInterval = 5000;
}
