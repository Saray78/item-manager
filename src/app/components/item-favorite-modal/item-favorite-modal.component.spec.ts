import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFavoriteModalComponent } from './item-favorite-modal.component';

describe('ItemFavoriteModalComponent', () => {
  let component: ItemFavoriteModalComponent;
  let fixture: ComponentFixture<ItemFavoriteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemFavoriteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemFavoriteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
