import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogNewPageComponent } from './catalog-new-page.component';

describe('CatalogNewPageComponent', () => {
  let component: CatalogNewPageComponent;
  let fixture: ComponentFixture<CatalogNewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogNewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
