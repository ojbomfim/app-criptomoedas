import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';


@Component({
  selector: 'app-strategies',
  templateUrl: './strategies.component.html',
  styleUrls: ['./strategies.component.styl']
})
export class StrategiesComponent implements OnInit {
  public sideBar
  
  @ViewChild('agGrid') agGrid: AgGridAngular;


  rowSelection = {
    multiple: true
  };

  defaultColDef = {
    minWidth: 100,
    flex: 1,
    sortable: true,
    filter: true,
    resizable: true
	};

  columnDefs= [
		
		{headerName:"Name", field:"name"},
    {headerName:"Assembly Name", field:"assembly_name"}
	 
  ];

  rowData= [

    { "name": "Strategy", "assembly_name": "Type 1"},
    { "name": "Strategy", "assembly_name": "Type 2"}

  ];

  constructor(private http: HttpClient) { 


    this.sideBar = {
      toolPanels: ['columns', 'filters'],
      defaultToolPanel: '',
    };

  }

  ngOnInit(): void {
  }

}
