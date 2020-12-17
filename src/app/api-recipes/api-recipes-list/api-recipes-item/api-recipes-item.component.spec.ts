import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiRecipesItemComponent } from './api-recipes-item.component';

describe('ApiRecipesItemComponent', () => {
  let component: ApiRecipesItemComponent;
  let fixture: ComponentFixture<ApiRecipesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiRecipesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiRecipesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
