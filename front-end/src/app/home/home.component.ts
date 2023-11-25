import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  faPhone,
  faEnvelope,
  faLocationDot,
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
      url: 'assets/images/slider_bg02.jpg',
      title: 'Farming',
      description: 'Farming description',
    },
    {
      url: 'assets/images/slider_bg03.jpg',
      title: 'Planting',
      description: 'Plating description',
    },
  ];

  constructor(private router: Router) {}

  navigateTo(page: string): void {
    this.router.navigate([page]);
  }
  carouselInterval = 5000;
}
