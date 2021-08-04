import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.styl']
})
export class AccountsComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;


  defaultColDef = {
	minWidth: 100,
    flex: 1,
    sortable: true,
    filter: true,
    resizable: true
	};

  columnDefs= [
		{headerName:"Cliente", field:"cliente",rowGroupIndex: 1, 
		rowGroup: true},
		{headerName:"Exchange", field:"exchange", rowGroupIndex: 2 },
		{headerName:"Ativo", field:"active", rowGroupIndex: 3 },
		{headerName:"Public Key", field:"public_key"}
	 ];

	rowData= [
		{ "cliente": "Odair", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Mauro", "exchange": "Bitcoin", "active": "false", "public_key": 123456987},
		{ "cliente": "Leonardo", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Fernando", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Paulo", "exchange": "Bitcoin", "active": "false", "public_key": 123456987},
		{ "cliente": "Felix", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Leonardo", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "João", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Mauro", "exchange": "Binance", "active": "false", "public_key": 123456987},
		{ "cliente": "Lais", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Mauro", "exchange": "Binance", "active": "false", "public_key": 123456987},
		{ "cliente": "Odair", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Ana Laura", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Mauro", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Amanda", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Odair", "exchange": "Binance", "active": "false", "public_key": 123456987},
		{ "cliente": "Laura", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Mauro", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Fernanda", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Gabriela", "exchange": "Bitcoin", "active": "false", "public_key": 123456987},
		{ "cliente": "Leonardo", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Odair", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Gabriel", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Gabriel", "exchange": "Bitcoin", "active": "false", "public_key": 123456987},
		{ "cliente": "Leonardo", "exchange": "Binance", "active": "false", "public_key": 123456987},
		{ "cliente": "Odair", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Leonardo", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Odair", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Mauro", "exchange": "Bitcoin", "active": "false", "public_key": 123456987},
		{ "cliente": "Leonardo", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Fernando", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Paulo", "exchange": "Bitcoin", "active": "false", "public_key": 123456987},
		{ "cliente": "Felix", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Leonardo", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "João", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Mauro", "exchange": "Binance", "active": "false", "public_key": 123456987},
		{ "cliente": "Lais", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Mauro", "exchange": "Binance", "active": "false", "public_key": 123456987},
		{ "cliente": "Odair", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Ana Laura", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Mauro", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Amanda", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Odair", "exchange": "Binance", "active": "false", "public_key": 123456987},
		{ "cliente": "Laura", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Mauro", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Fernanda", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Gabriela", "exchange": "Bitcoin", "active": "false", "public_key": 123456987},
		{ "cliente": "Leonardo", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Odair", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Gabriel", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Gabriel", "exchange": "Bitcoin", "active": "false", "public_key": 123456987},
		{ "cliente": "Leonardo", "exchange": "Binance", "active": "false", "public_key": 123456987},
		{ "cliente": "Odair", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Leonardo", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Odair", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Mauro", "exchange": "Bitcoin", "active": "false", "public_key": 123456987},
		{ "cliente": "Leonardo", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Fernando", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Paulo", "exchange": "Bitcoin", "active": "false", "public_key": 123456987},
		{ "cliente": "Felix", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Leonardo", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "João", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Mauro", "exchange": "Binance", "active": "false", "public_key": 123456987},
		{ "cliente": "Lais", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Mauro", "exchange": "Binance", "active": "false", "public_key": 123456987},
		{ "cliente": "Odair", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Ana Laura", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Mauro", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Amanda", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Odair", "exchange": "Binance", "active": "false", "public_key": 123456987},
		{ "cliente": "Laura", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Mauro", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Fernanda", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Gabriela", "exchange": "Bitcoin", "active": "false", "public_key": 123456987},
		{ "cliente": "Leonardo", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Odair", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Gabriel", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Gabriel", "exchange": "Bitcoin", "active": "false", "public_key": 123456987},
		{ "cliente": "Leonardo", "exchange": "Binance", "active": "false", "public_key": 123456987},
		{ "cliente": "Odair", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Leonardo", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Odair", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Mauro", "exchange": "Bitcoin", "active": "false", "public_key": 123456987},
		{ "cliente": "Leonardo", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Fernando", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Paulo", "exchange": "Bitcoin", "active": "false", "public_key": 123456987},
		{ "cliente": "Felix", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Leonardo", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "João", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Mauro", "exchange": "Binance", "active": "false", "public_key": 123456987},
		{ "cliente": "Lais", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Mauro", "exchange": "Binance", "active": "false", "public_key": 123456987},
		{ "cliente": "Odair", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Ana Laura", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Mauro", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Amanda", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Odair", "exchange": "Binance", "active": "false", "public_key": 123456987},
		{ "cliente": "Laura", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Mauro", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Fernanda", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Gabriela", "exchange": "Bitcoin", "active": "false", "public_key": 123456987},
		{ "cliente": "Leonardo", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Odair", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Gabriel", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Gabriel", "exchange": "Bitcoin", "active": "false", "public_key": 123456987},
		{ "cliente": "Leonardo", "exchange": "Binance", "active": "false", "public_key": 123456987},
		{ "cliente": "Odair", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Leonardo", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Odair", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Mauro", "exchange": "Bitcoin", "active": "false", "public_key": 123456987},
		{ "cliente": "Leonardo", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Fernando", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Paulo", "exchange": "Bitcoin", "active": "false", "public_key": 123456987},
		{ "cliente": "Felix", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Leonardo", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "João", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Mauro", "exchange": "Binance", "active": "false", "public_key": 123456987},
		{ "cliente": "Lais", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Mauro", "exchange": "Binance", "active": "false", "public_key": 123456987},
		{ "cliente": "Odair", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Ana Laura", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Mauro", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Amanda", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Odair", "exchange": "Binance", "active": "false", "public_key": 123456987},
		{ "cliente": "Laura", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Mauro", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Fernanda", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Gabriela", "exchange": "Bitcoin", "active": "false", "public_key": 123456987},
		{ "cliente": "Leonardo", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Odair", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Gabriel", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Gabriel", "exchange": "Bitcoin", "active": "false", "public_key": 123456987},
		{ "cliente": "Leonardo", "exchange": "Binance", "active": "false", "public_key": 123456987},
		{ "cliente": "Odair", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Leonardo", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Odair", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Mauro", "exchange": "Bitcoin", "active": "false", "public_key": 123456987},
		{ "cliente": "Leonardo", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Fernando", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Paulo", "exchange": "Bitcoin", "active": "false", "public_key": 123456987},
		{ "cliente": "Felix", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Leonardo", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "João", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Mauro", "exchange": "Binance", "active": "false", "public_key": 123456987},
		{ "cliente": "Lais", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Mauro", "exchange": "Binance", "active": "false", "public_key": 123456987},
		{ "cliente": "Odair", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Ana Laura", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Mauro", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Amanda", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Odair", "exchange": "Binance", "active": "false", "public_key": 123456987},
		{ "cliente": "Laura", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Mauro", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Fernanda", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Gabriela", "exchange": "Bitcoin", "active": "false", "public_key": 123456987},
		{ "cliente": "Leonardo", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Odair", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Gabriel", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Gabriel", "exchange": "Bitcoin", "active": "false", "public_key": 123456987},
		{ "cliente": "Leonardo", "exchange": "Binance", "active": "false", "public_key": 123456987},
		{ "cliente": "Odair", "exchange": "Bitcoin", "active": "true", "public_key": 123456987},
		{ "cliente": "Leonardo", "exchange": "Binance", "active": "true", "public_key": 123456987},
		{ "cliente": "Mauro", "exchange": "Binance", "active": "false", "public_key": 123456987}  
		];	
	 
	constructor() { 

	}

	ngOnInit() {
	
		}

	getSelectedRows() {
		const selectedNodes = this.agGrid.api.getSelectedNodes();
		const selectedData = selectedNodes.map(node => {
			if (node.groupData) {
			return { cliente: node.key, exchange: 'Grupo' };
			}
			return node.data;
		});
		const selectedDataStringPresentation = selectedData.map(node => `${node.exchange} ${node.cliente}`).join(', ');

		alert(`Selected nodes: ${selectedDataStringPresentation}`);
	}
}
