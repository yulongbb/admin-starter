import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { AuthService } from "../../auth.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: 'user-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class UserAddComponent implements OnInit {
  addForm;

  username: string;
  password;
  confirmPassword;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.addForm = this.fb.group({
      username: [this.username],
      password: [this.password],
      confirmPassword: [this.confirmPassword],
    });
  }

  onSubmit(form: any) {
    this.authService.addUser(form.username, form.password).subscribe(response => {
      this.router.navigateByUrl(`/pages/auth/user/${response.id}/change`);
    })
  }

}
