import { Component } from '@angular/core';
import { GESTIONES } from '../models/model';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-declaraciones',
  templateUrl: './declaraciones.component.html',
  styleUrls: ['./declaraciones.component.scss']
})

export class DeclaracionesComponent {

  page = 1;
	pageSize = 10;
	collectionSize = GESTIONES.length;
	gestiones: any = GESTIONES;

  sortProperty: string = '';
  sortOrder = 1;

  fileName= 'DeclaracionesExcel.xlsx';

  constructor() {
    this.refreshTable();
  }

  ngOnInit(): void {
      
  }


  sortBy(property: string) {
    this.sortOrder = property === this.sortProperty ? (this.sortOrder * -1) : 1;
    this.sortProperty = property;

    this.gestiones = [...this.gestiones.sort((a: any, b: any) => {
        let result = 0;
        let fa = a[property].toLowerCase();
        let fb = b[property].toLowerCase();

        if (fa < fb) {
            result = -1;
        }
        if (fa > fb) {
            result = 1;
        }
        return result * this.sortOrder;
    })];
  }

  refreshTable() {
		this.gestiones = GESTIONES.map((gestion, i) => ({ id: i + 1, ...gestion })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
  }

  exportExcel(): void
  {
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    XLSX.writeFile(wb, this.fileName);
 
  }

}
