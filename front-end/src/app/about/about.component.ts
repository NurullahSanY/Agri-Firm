import { Component } from '@angular/core';
import { FaConfig } from '@fortawesome/angular-fontawesome';
import { faPhone, faEnvelope,faLocationDot } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faPinterestSquare,
  faLinkedin,
  faWhatsappSquare,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  emailicon = faEnvelope;
  whatsapp = faWhatsappSquare;
  facebookicon = faFacebookSquare;
  linkdinicon = faLinkedin;

  homeicon = faLocationDot;
  // emailicon = faEnvelope;
  phoneicon = faPhone;
  // facebookicon = faFacebookSquare;
  tweetrericon = faTwitterSquare;
  pinteresticon = faPinterestSquare;
  instagramicon = faInstagramSquare;
}
