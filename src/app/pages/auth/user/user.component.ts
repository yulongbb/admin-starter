import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from "@angular/router";


@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private defaultColDef;
  private rowSelection;
  private rowData: any[];
  private paginationPageSize;
  private paginationNumberFormatter;

  deleteUsers: string;
  action = "请选择";


  constructor(
    private authService: AuthService,
    private sanitizer: DomSanitizer,
    private router: Router,
  ) {
    this.columnDefs = [
      {
        headerName: '用户名',
        field: 'username',
        width: 200,
        sortable: true,
        filter: "agTextColumnFilter",
        resizable: false,
        headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true,
        cellRenderer: this.customCellRendererFunc
      },
      { headerName: '密码', field: 'password', sortable: true, filter: "agTextColumnFilter", resizable: false },
      { headerName: '姓名', field: 'name', sortable: true, filter: "agTextColumnFilter", resizable: false },
      { headerName: '有效', field: 'active', sortable: true, filter: "agTextColumnFilter", resizable: false },
      { headerName: '状态', field: 'state', sortable: true, filter: "agTextColumnFilter", resizable: false },
      { headerName: '角色', field: 'roles.0.description', sortable: true, filter: "agTextColumnFilter", resizable: false },
    ];
    this.defaultColDef = {
      resizable: true,
      width: 100
    };
    this.rowSelection = "multiple";
    this.paginationPageSize = 20;
  }

  ngOnInit() {
  }

  onSelectionChanged(event) {
    this.deleteUsers = '';
    for (var i = 0; i < event.api.getSelectedNodes().length; i++) {
      this.deleteUsers += event.api.getSelectedNodes()[i].data.id + ',';
    }
  }


  /**
   * 表格准备数据
   * @param params
   */
  onGridReady(params) {
    this.authService.getUsers().subscribe(response => {
      this.rowData = response;
    })
  }

  onPageSizeChanged() {
    this.authService.getUsers().subscribe(response => {
      this.rowData = response;
    })
  }

  executeAction() {
    if (this.action == "批量删除") {
      this.authService.deleteBatchUser(this.deleteUsers).subscribe(response => {
        this.authService.getUsers().subscribe(response => {
          this.rowData = response;
        })
      });
    }
  }

  public customCellRendererFunc(params): string {
    return `<a href='/#/pages/auth/user/${params.data.id}/change'>${params.data.username}</a>`;
  }

}
