import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogShopAddComponent } from './dialog-shop-add.component';

describe('DialogShopAddComponent', () => {
  let component: DialogShopAddComponent;
  let fixture: ComponentFixture<DialogShopAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogShopAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogShopAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
