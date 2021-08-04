import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.styl']
})
export class SettingsComponent implements OnInit {

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
		{headerName:"Exchange", field:"exchange", rowGroupIndex: 2},
		{headerName:"Ativo", field:"active", rowGroupIndex: 3},
		{headerName:"Strategy", field:"strategy", rowGroupIndex: 4}
	 ];

	rowData= [
	{ "cliente": "Odair", "exchange": "Binance", "active": "true", "strategy": "Type 1"},
	{ "cliente": "Mauro", "exchange": "Bitcoin", "active": "false", "strategy": "Type 1"},
	{ "cliente": "Leonardo", "exchange": "Binance", "active": "true", "strategy": "Type 2"},
	{ "cliente": "Fernando", "exchange": "Bitcoin", "active": "true", "strategy": "Type 1"},
	{ "cliente": "Paulo", "exchange": "Bitcoin", "active": "false", "strategy": "Type 2"},
	{ "cliente": "Felix", "exchange": "Bitcoin", "active": "true", "strategy": "Type 1"},
	{ "cliente": "Leonardo", "exchange": "Binance", "active": "true", "strategy": "Type 1"},
	{ "cliente": "João", "exchange": "Bitcoin", "active": "true", "strategy": "Type 2"},
	{ "cliente": "Mauro", "exchange": "Binance", "active": "false", "strategy": "Type 1"},
	{ "cliente": "Lais", "exchange": "Bitcoin", "active": "true", "strategy": "Type 2"},
	{ "cliente": "Mauro", "exchange": "Binance", "active": "false", "strategy": "Type 1"},
	{ "cliente": "Odair", "exchange": "Bitcoin", "active": "true", "strategy": "Type 2"},
	{ "cliente": "Ana Laura", "exchange": "Bitcoin", "active": "true", "strategy": "Type 1"},
	{ "cliente": "Mauro", "exchange": "Binance", "active": "true", "strategy": "Type 1"},
	{ "cliente": "Amanda", "exchange": "Bitcoin", "active": "true", "strategy": "Type 1"},
	{ "cliente": "Odair", "exchange": "Binance", "active": "false", "strategy": "Type 2"},
	{ "cliente": "Laura", "exchange": "Binance", "active": "true", "strategy": "Type 2"},
	{ "cliente": "Mauro", "exchange": "Bitcoin", "active": "true", "strategy": "Type 1"} 
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
