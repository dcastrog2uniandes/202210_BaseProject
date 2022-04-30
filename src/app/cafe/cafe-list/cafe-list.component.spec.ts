import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CafeService } from '../cafe.service';
import { faker } from '@faker-js/faker';


import { CafeListComponent } from './cafe-list.component';
import { Cafe } from '../cafe';

describe('CafeListComponent', () => {
  let component: CafeListComponent;
  let fixture: ComponentFixture<CafeListComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CafeListComponent ],
      imports:[HttpClientModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;

    for (let i = 1; i <= 3; i++){//Se genera un listado de 3 cafes
      component.cafes.push(
        new Cafe(
          faker.datatype.number(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.address.city(),
          faker.lorem.sentence(),
          faker.datatype.number(),
          faker.image.imageUrl(),
        )
      );
    }

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table with a head and 3 rows ', () => {
    const table = fixture.debugElement.query(By.css('table'));
    const headRows = table.query(By.css('thead')).queryAll(By.css('tr'));
    const bodyRows = table.query(By.css('tbody')).queryAll(By.css('tr'));
    expect(table.queryAll(By.css('thead')).length).toBe(1);//verifica que solo haya un elemento thead dentro de la tabla
    expect(table.queryAll(By.css('tbody')).length).toBe(1);//verifica que solo haya un elemento tbody dentro de la tabla
    expect(bodyRows.length).toEqual(3);//verifica que dentro del elemento tbody hayan 3 filas (tr)
    expect(headRows.length).toEqual(1);//verifica que dentro del elemento thead haya un encabezado (tr)

  });

});
