import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "../../auth.service";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})
export class RoleChangeComponent implements OnInit {

  changeForm;


  name; // 角色名
  description; // 描述

  selectedPermissions = [];

  permissions;


  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private fb: FormBuilder,

  ) {

  }

  ngOnInit() {

    this.authService.getPermissions().subscribe(response => {
      this.permissions = response;
    })

    this.changeForm = this.fb.group({
      name: [this.name],
      description: [this.description],
      selectedRoles: [this.selectedPermissions],
    });
    this.route.params.subscribe(params => {
      this.authService.getRoleById(params['id']).subscribe(response => {
        this.name = response.name;
        this.description = response.description;
        this.selectedPermissions = response.permissions;
      });
    });
  }

}
