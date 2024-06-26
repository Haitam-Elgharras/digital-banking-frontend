import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from "jwt-decode";

interface AuthResponse {
  'access-token': string;
  // include other properties as needed
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient, private router: Router) { }

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

    // set the access token in local storage
    localStorage.setItem('jwt-token', this.accessToken);
  }

  logout() {
    this.isAuthenticated = false;
    this.accessToken = '';
    this.username = '';
    this.roles = '';
    localStorage.removeItem('jwt-token');
    this.router.navigateByUrl('/login');
  }

  loadJwtFromLocalStorage() {
    let jwt = localStorage.getItem('jwt-token');
    if (jwt){
      this.loadProfile({ 'access-token': jwt });
      this.router.navigateByUrl('/admin/customers');
    }
  }

}
