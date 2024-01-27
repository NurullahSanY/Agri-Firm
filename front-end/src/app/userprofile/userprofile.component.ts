// // userprofile.component.ts

// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { UserprofileService } from '../services/userprofile.service';

// @Component({
//   selector: 'app-userprofile',
//   templateUrl: './userprofile.component.html',
//   styleUrls: ['./userprofile.component.css'],
// })
// export class UserprofileComponent implements OnInit {
//   userProfile: any = {};

//   constructor(
//     private userProfileService: UserprofileService,
//     private route: ActivatedRoute
//   ) {}

//   ngOnInit(): void {
//     // Retrieve the username from the route parameters
//     const username = this.route.snapshot.params['username'];

//     // Call the service method to fetch the full user profile
//     this.userProfileService.getUserProfile(username).subscribe(
//       (data) => {
//         this.userProfile = data;
//       },
//       (error) => {
//         console.error(error);
//       }
//     );
//   }
// }



// userprofile.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserprofileService } from '../services/userprofile.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
})
export class UserprofileComponent implements OnInit {
  userProfile: any = {};

  constructor(
    private userProfileService: UserprofileService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Retrieve the email from the route parameters
    const email = this.route.snapshot.params['email'];

    // Call the service method to fetch the full user profile
    this.userProfileService.getUserProfile(undefined, email).subscribe(
      (data) => {
        this.userProfile = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
