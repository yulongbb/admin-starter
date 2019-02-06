import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { DomSanitizer } from '@angular/platform-browser';


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
  private rowData: [];


  constructor(
    private authService: AuthService,
    private sanitizer: DomSanitizer,
  ) {
    this.columnDefs = [
      {
        headerName: '用户名',
        field: 'username',
        sortable: true,
        filter: true,
        resizable: false,
        headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true,
        cellRenderer: this.customCellRendererFunc
      },
      { headerName: '密码', field: 'password', sortable: true, filter: true, resizable: false },
      { headerName: '名字', field: 'firstName', sortable: true, filter: true, resizable: false },
      { headerName: '姓氏', field: 'lastName', sortable: true, filter: true, resizable: false },
      { headerName: '有效', field: 'isActive', sortable: true, filter: true, resizable: false },
      { headerName: '状态', field: 'state', sortable: true, filter: true, resizable: false },
      { headerName: '角色', field: 'roles.0.name', sortable: true, filter: true, resizable: false },
      { headerName: '上次登录', field: 'lastDate', sortable: true, filter: true, resizable: false },
    ];
    this.defaultColDef = {
      resizable: true,
      width: 100
    };
    this.rowSelection = "multiple";

  }

  ngOnInit() {

  }

  onRowSelected(event) {
    // window.alert("row " + event.node.data.id + " selected = " + event.node.selected);
  }

  onSelectionChanged(event) {
    // var rowCount = event.api.getSelectedNodes().length;
    // window.alert("selection changed, " + rowCount + " rows selected");
  }


  onGridReady(params) {
    this.authService.getUsers().subscribe(response => {
      this.rowData = response;
    })
  }


  public customCellRendererFunc(params): string {
    console.log(params);
    return `<a href='/#/pages/auth/user/${params.data.id}/change'>${params.data.username}</a>`;
  }

}
