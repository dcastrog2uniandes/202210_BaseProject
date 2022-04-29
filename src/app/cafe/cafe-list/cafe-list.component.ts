import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {

  cafes: Array<Cafe> = [];
  cafeBlend: number = 0;
  cafeOrigen: number = 0;

  constructor(private cafeService: CafeService) { }

  getCafes():void{
    this.cafeService.getCafes().subscribe( (cafes) =>{
      this.cafes = cafes;
      this.cafeBlend = this.cafes.filter( p => p.tipo === 'Blend').length;
      this.cafeOrigen = this.cafes.filter( p => p.tipo === 'Café de Origen').length;

    });
  }

  ngOnInit(): void {
    this.getCafes();
  }

}
