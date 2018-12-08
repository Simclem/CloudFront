import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFilmComponent } from './table-film.component';

describe('TableFilmComponent', () => {
  let component: TableFilmComponent;
  let fixture: ComponentFixture<TableFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
