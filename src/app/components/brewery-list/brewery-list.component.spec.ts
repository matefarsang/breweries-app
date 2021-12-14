import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryList } from './brewery-list.component';

describe('BreweryList', () => {
  let component: BreweryList;
  let fixture: ComponentFixture<BreweryList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreweryList ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreweryList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
