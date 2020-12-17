import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiRecipesDetailsComponent } from './api-recipes-details.component';

describe('ApiRecipesDetailsComponent', () => {
  let component: ApiRecipesDetailsComponent;
  let fixture: ComponentFixture<ApiRecipesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiRecipesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiRecipesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
