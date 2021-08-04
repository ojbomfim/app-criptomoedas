import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.styl']
})
export class CustomersComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;


  defaultColDef = {
    minWidth: 100,
    flex: 1,
    sortable: true,
    filter: true,
    resizable: true
  };

  columnDefs = [

    { headerName: "Cliente", field: "cliente" },
    { headerName: "Ativo", field: "active" }

  ];

  rowData = [

    { "cliente": "Odair", "active": "true" },
    { "cliente": "Mauro", "active": "false" },
    { "cliente": "Leonardo", "active": "true" },
    { "cliente": "Fernando", "active": "true" },
    { "cliente": "Paulo", "active": "false" },
    { "cliente": "Felix", "active": "true" },
    { "cliente": "João", "active": "true" },
    { "cliente": "Lais", "active": "true" },
    { "cliente": "Ana Laura", "active": "true" },
    { "cliente": "Amanda", "active": "true" },
    { "cliente": "Odair", "active": "true" },
    { "cliente": "Mauro", "active": "false" },
    { "cliente": "Leonardo", "active": "true" },
    { "cliente": "Fernando", "active": "true" },
    { "cliente": "Paulo", "active": "false" },
    { "cliente": "Felix", "active": "true" },
    { "cliente": "João", "active": "true" },
    { "cliente": "Lais", "active": "true" },
    { "cliente": "Ana Laura", "active": "true" },
    { "cliente": "Amanda", "active": "true" },
    { "cliente": "Odair", "active": "true" },
    { "cliente": "Mauro", "active": "false" },
    { "cliente": "Leonardo", "active": "true" },
    { "cliente": "Fernando", "active": "true" },
    { "cliente": "Paulo", "active": "false" },
    { "cliente": "Felix", "active": "true" },
    { "cliente": "João", "active": "true" },
    { "cliente": "Lais", "active": "true" },
    { "cliente": "Ana Laura", "active": "true" },
    { "cliente": "Amanda", "active": "true" },
    { "cliente": "Odair", "active": "true" },
    { "cliente": "Mauro", "active": "false" },
    { "cliente": "Leonardo", "active": "true" },
    { "cliente": "Fernando", "active": "true" },
    { "cliente": "Paulo", "active": "false" },
    { "cliente": "Felix", "active": "true" },
    { "cliente": "João", "active": "true" },
    { "cliente": "Lais", "active": "true" },
    { "cliente": "Ana Laura", "active": "true" },
    { "cliente": "Amanda", "active": "true" },
    { "cliente": "Odair", "active": "true" },
    { "cliente": "Mauro", "active": "false" },
    { "cliente": "Leonardo", "active": "true" },
    { "cliente": "Fernando", "active": "true" },
    { "cliente": "Paulo", "active": "false" },
    { "cliente": "Felix", "active": "true" },
    { "cliente": "João", "active": "true" },
    { "cliente": "Lais", "active": "true" },
    { "cliente": "Ana Laura", "active": "true" },
    { "cliente": "Amanda", "active": "true" },
    { "cliente": "Odair", "active": "true" },
    { "cliente": "Mauro", "active": "false" },
    { "cliente": "Leonardo", "active": "true" },
    { "cliente": "Fernando", "active": "true" },
    { "cliente": "Paulo", "active": "false" },
    { "cliente": "Felix", "active": "true" },
    { "cliente": "João", "active": "true" },
    { "cliente": "Lais", "active": "true" },
    { "cliente": "Ana Laura", "active": "true" },
    { "cliente": "Amanda", "active": "true" },
    { "cliente": "Odair", "active": "true" },
    { "cliente": "Mauro", "active": "false" },
    { "cliente": "Leonardo", "active": "true" },
    { "cliente": "Fernando", "active": "true" },
    { "cliente": "Paulo", "active": "false" },
    { "cliente": "Felix", "active": "true" },
    { "cliente": "João", "active": "true" },
    { "cliente": "Lais", "active": "true" },
    { "cliente": "Ana Laura", "active": "true" },
    { "cliente": "Amanda", "active": "true" },
    { "cliente": "Odair", "active": "true" },
    { "cliente": "Mauro", "active": "false" },
    { "cliente": "Leonardo", "active": "true" },
    { "cliente": "Fernando", "active": "true" },
    { "cliente": "Paulo", "active": "false" },
    { "cliente": "Felix", "active": "true" },
    { "cliente": "João", "active": "true" },
    { "cliente": "Lais", "active": "true" },
    { "cliente": "Ana Laura", "active": "true" },
    { "cliente": "Amanda", "active": "true" },
    { "cliente": "Laura", "active": "true" }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}

