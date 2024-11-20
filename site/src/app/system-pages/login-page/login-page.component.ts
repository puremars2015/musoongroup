import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CRUDService } from 'src/app/service/Crud/crudservice.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  yourUsername = 'Musoon-Administrator';
  yourPassword = 'administrator';

  constructor(private crud: CRUDService, private router: Router) { 

  }

  Login(){
    if (this.yourUsername == '' || this.yourPassword == ''){
      alert('請輸入帳號密碼');
      return; 
    }

    localStorage.setItem('token', '123456-123456789-123456-1234');

    this.router.navigate(['/system/index']);
    
    // this.crud.Login(this.yourUsername, this.yourPassword).subscribe({
    //   next: data => {
    //     console.log(data);
    //     debugger
    //     if (data.statusCode == 200){
    //       localStorage.setItem('token', data.token);
    //       window.location.href = '/system/index';
    //     }
    //     else {
    //       alert(data.statusCode + ':' + data.message);
    //     }
    //   },  
    //   error: error => {
    //     alert(error.error);
    //   },
    //   complete: () => {
    //     console.log('complete');
    //   }
    // });
  }
}
