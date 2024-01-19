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
      url: 'assets/images/slider1.jpg',
      title: 'Flowers',
      description: 'Flowers are the beautiful and often fragrant reproductive structures of angiosperms, playing a crucial role in pollination and seed production within the plant life cycle.',
    },
    {
      url: 'assets/images/slider2.jpg',
      title: 'Vegetable',
      description: 'Vegetables are plant-based foods that are rich in nutrients and essential for a balanced diet.',
    },
    {
      url: 'assets/images/slider3.jpg',
      title: 'Vegetable',
      description: 'Vegetables are plant-based foods that are rich in nutrients and essential for a balanced diet.',
    },
  ];


  constructor(private router: Router) {}

  navigateTo(page: string): void {
    this.router.navigate([page]);
  }
  carouselInterval = 5000;
}
