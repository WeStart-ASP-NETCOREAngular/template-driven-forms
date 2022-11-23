import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  defaultQuestion = 'teacher';
  answer: '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secret: '',
    answer: '',
    gender: '',
  };
  submitted = false;
  title = 'FormsHelloWorld';
  @ViewChild('f') form: NgForm;
  @ViewChild('email') email: NgModel;
  // onSubmit(form: NgForm) {
  //   console.log(form);
  //   // console.log(form.value.username);
  // }

  suggestUserName() {
    // this.form.setValue({
    //   userData: {
    //     username: 'wfatair',
    //     email: '',
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male',
    // });
    this.form.form.patchValue({
      userData: {
        username: 'wfatair',
      },
    });
  }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.form.value.userData.username;
    this.user.email = this.form.value.userData.email;
    this.user.secret = this.form.value.secret;
    this.user.answer = this.form.value.questionAnswer;
    this.user.gender = this.form.value.gender;
    console.log(this.form);

    this.form.reset({
      userData: {
        username: 'wfatairReset',
      },
    });
  }
}
