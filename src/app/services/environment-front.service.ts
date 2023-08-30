import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EnvironmentFrontService {

  constructor() { }
  getBaseUrl(): string {
    return environment.api_front; // Define this in your environment files
  }
}
