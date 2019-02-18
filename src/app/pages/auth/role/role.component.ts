import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private defaultColDef;
  private rowSelection;
  private rowData: any[];
  private paginationPageSize;
  private paginationNumberFormatter;


  constructor(
    private authService: AuthService,
    private sanitizer: DomSanitizer,
  ) {
    this.columnDefs = [
      {
        headerName: '角色名',
        field: 'name',
        width: 200,
        sortable: true,
        filter: "agTextColumnFilter",
        resizable: false,
        headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true,
        cellRenderer: this.customCellRendererFunc

      },
      { headerName: '描述', field: 'description', sortable: true, filter: "agTextColumnFilter", resizable: false },

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

  onRowSelected(event) {
    // window.alert("row " + event.node.data.id + " selected = " + event.node.selected);
  }

  onSelectionChanged(event) {
    // var rowCount = event.api.getSelectedNodes().length;
    // window.alert("selection changed, " + rowCount + " rows selected");
  }


  onGridReady(params) {
    this.authService.getRoles().subscribe(response => {
      this.rowData = response;
    })
  }

  onPageSizeChanged() {

  }

  onFilterTextBoxChanged() {

  }

  onPrintQuickFilterTexts() {

  }

  public customCellRendererFunc(params): string {
    return `<a href='/#/pages/auth/role/${params.data.id}/change'>${params.data.name}</a>`;
  }



}
