import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiRecipesListComponent } from './api-recipes-list.component';

describe('ApiRecipesListComponent', () => {
  let component: ApiRecipesListComponent;
  let fixture: ComponentFixture<ApiRecipesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiRecipesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiRecipesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
