import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-ng-for',
  templateUrl: './directiva-ng-for.component.html',
  styleUrls: ['./directiva-ng-for.component.css']
})
export class DirectivaNgForComponent implements OnInit {

  proveedores: Array<any> = [
    {nombre: 'Gas Natural', cif: 'A12345678'},
    {nombre: 'Iberdrola', cif: 'A87654321'},
    {nombre: 'Jazztel', cif: 'A56781234'},
    {nombre: 'Movistar', cif: 'A87651234'}
  ]

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.proveedores.push({nombre: 'Orange', cif: 'A87654433'});
    }, 3000);
  }

}
