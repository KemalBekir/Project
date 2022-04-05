import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogDetailPageComponent } from './catalog-detail-page.component';

describe('CatalogDetailPageComponent', () => {
  let component: CatalogDetailPageComponent;
  let fixture: ComponentFixture<CatalogDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
