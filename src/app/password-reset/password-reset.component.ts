import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  onReset(form:NgForm){
    const email=form.value.email;
    this.authService.onReset(email);
    form.reset();
  }

}
