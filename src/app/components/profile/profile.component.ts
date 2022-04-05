import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile!: Profile;
  isLoading = true;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService
      .getProfile('611a3036-4420-48a5-b8da-9b461853cdd2')
      .subscribe((resp) => {
        this.isLoading = false;
        this.profile = <Profile>resp;
      });
  }
}
