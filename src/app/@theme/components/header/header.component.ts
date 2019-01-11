import { Component, Input, OnInit, Inject } from '@angular/core';

import { NbMenuService, NbSidebarService, NB_WINDOW } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { filter, map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ReferenceComponent } from "../../../pages/reference/reference.component";


@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';

  user: any;

  userMenu: any;

  constructor(private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private userService: UserService,
    private router: Router,
    @Inject(NB_WINDOW) private window,
    private modalService: NgbModal,
    private analyticsService: AnalyticsService) {
  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((users: any) => this.user = users.nick);

    this.menuService.onItemClick()
      .pipe(
      filter(({ tag }) => tag === 'my-context-menu'),
      map(({ item }) => item),
    ).subscribe(item => {
      if (item.title == '注销') {
        setTimeout(() => {
          this.router.navigate(["/auth/login"]);
        }, 3000);
      } else if (item.title == '个人信息') {
        this.router.navigate(["/pages/profile/overview"]);
      } else if (item.title == '重置密码') {
        this.router.navigate(["/pages/setting/account"]);
      } else if (item.title == '设置') {
        this.router.navigate(["/pages/setting/profile"]);
      }
    });
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');

    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }

  notification() {
    this.router.navigate(["/pages/profile/notification"]);
  }

  showLargeModal() {
    const activeModal = this.modalService.open(ReferenceComponent, { size: 'lg', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = '使用手册';
  }
}
