import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";

interface AuthResponse {
  'access-token': string;
  // include other properties as needed
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  isAuthenticated : boolean = false;
  username : any;
  roles : any;
  accessToken : string = '';

  public login(username: string, password: string) {
    let options = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');

    let params = new HttpParams()
      .set('username', username)
      .set('password', password);
      
    return this.http.post<AuthResponse>('http://localhost:8084/auth/login', params, { headers: options });
  }

  loadProfile(data: AuthResponse) {
    this.isAuthenticated = true;
    this.accessToken = data['access-token'];

    let decodedJwt:any = jwtDecode(this.accessToken);

    this.username = decodedJwt.sub;
    this.roles = decodedJwt.scope;
  }
}
