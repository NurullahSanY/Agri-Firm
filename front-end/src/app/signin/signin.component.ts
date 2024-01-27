// signin.component.ts

import { Component } from '@angular/core';
import { SigninService } from '../services/signin.service'; // Adjust the path based on your project structure
import { Router } from '@angular/router'; // Import the Router module

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  email: string = '';
  password: string = '';
  message: string = '';

  constructor(private signinService: SigninService, private router: Router) {} // Inject the Router module
  
  signIn(): void {
    this.signinService.signin(this.email, this.password).subscribe(
      (response) => {
        // Handle successful sign-in
        console.log(response);
        this.message = 'Sign-in successful! Redirecting to user profile...';
  
        // Redirect to the user profile page without delay
        this.router.navigate(['/userprofile']);
      },
      (error) => {
        // Handle sign-in error
        this.message = 'Invalid credentials. Please try again.';
        console.error('Error fetching user profile:', error);
      }
    );
  }
  

  homeicon = faLocationDot;
  emailicon = faEnvelope;
  phoneicon = faPhone;
  facebookicon = faFacebookSquare;
  tweetrericon = faTwitterSquare;
  pinteresticon = faPinterestSquare;
  instagramicon = faInstagramSquare;
}

import { FaConfig } from '@fortawesome/angular-fontawesome';
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
