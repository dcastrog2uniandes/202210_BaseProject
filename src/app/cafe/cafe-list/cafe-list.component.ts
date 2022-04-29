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

  constructor(private cafeService: CafeService) { }

  getCafes():void{
    this.cafeService.getCafes().subscribe( (cafes) =>{
      this.cafes = cafes;
    });
  }

  ngOnInit(): void {
    this.getCafes();
  }

}
