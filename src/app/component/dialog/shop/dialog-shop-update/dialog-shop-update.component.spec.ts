import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogShopUpdateComponent } from './dialog-shop-update.component';

describe('DialogShopUpdateComponent', () => {
  let component: DialogShopUpdateComponent;
  let fixture: ComponentFixture<DialogShopUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogShopUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogShopUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
