import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}
  protected _isRegistered = false;

  get isUserRegistered() {
    return this._isRegistered;
  }

  set isUserRegistered(isRegistered) {
    this._isRegistered = isRegistered;
  }

  getProfile(profileId: string) {
    // Just integrating mock get API to get user Profile
    // profileId is hard-coded to sync with actual implementation
    return this.http.get(environment.baseUrl + profileId);
  }

  registerUser(user: Profile) {
    // Todo: We need post API to submit user data to get registered
    // Just printing user data to console
    console.log(user);
    return this.http.get(
      environment.baseUrl + '7f434df6-a4ac-4817-ab7c-dd39a564d01d'
    );
  }
}
