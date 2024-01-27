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
      url: '/assets/images/pick_up.jpg',
      title: 'Farming',
      description: 'Farmers grow food by planting seeds and taking care of plants. They use tools like tractors to make farming easier. Harvest time is when they pick ripe fruits and vegetables.',
    },
    {
      // url: 'https://media.istockphoto.com/id/855504838/photo/agriculture-on-rooftop.jpg?s=612x612&w=0&k=20&c=Lp2ARf2hv3aXuinUZeace5mg8OH4Eh3dhOB9BFR41wc=',
      // title: 'Planting',
      // description: 'Plating description',
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
    {
      url: 'https://brooklyneagle.com/wp-content/uploads/2015/07/brooklyn-grange-garden.jpg',
      title: 'Gardening',
      description: 'Gardening is a hobby where people plant and care for flowers, vegetables, and herbs in their backyard. It brings joy and relaxation as they watch their plants grow and bloom.',
    },
    {
      url: 'https://eadn-wc01-4177395.nxedge.io/wp-content/uploads/2020/05/69174846_10156662727869503_8266423507643006976_o.jpg',
      title: 'Flower',
      description: 'Plating description',
    },
    {
      url: 'https://eadn-wc01-4177395.nxedge.io/wp-content/uploads/2020/05/MattFarming-1.jpg',
      title: 'Prepping Soil ',
      description: 'Preparing soil means getting it ready for planting. Farmers loosen the soil, remove weeds, and add nutrients to help plants grow.',
    },
    {
      url: 'https://eadn-wc01-4177395.nxedge.io/wp-content/uploads/2020/05/71113341_10156742812044503_1916056714008854528_o.jpg',
      title: 'vegetables',
      description: 'Vegetables are plants we eat, like carrots and broccoli. Farmers grow them in the soil, and we can cook and enjoy them for healthy meals.',
    }
  ];


  constructor(private router: Router) {}

  navigateTo(page: string): void {
    this.router.navigate([page]);
  }
  carouselInterval = 5000;
}
