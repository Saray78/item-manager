import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSearchComponent } from './item-search.component';
import { FormsModule } from '@angular/forms';

describe('ItemSearchComponent', () => {
  let component: ItemSearchComponent;
  let fixture: ComponentFixture<ItemSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [ItemSearchComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when change item card mode', () => {
    it('should have search by title', () => {
      component.itemCardDataMode = 'basicMode';
      expect(component.searchBy).toEqual('by Title');
    });
    it('should have search all items', () => {
      component.itemCardDataMode = '';
      expect(component.searchBy).toEqual('Items');
    });
  });

  describe('when change item card mode', () => {
    it('should have search by title', () => {
      component.itemCardDataMode = 'basicMode';
      expect(component.searchBy).toEqual('by Title');
    });
    it('should have search all items', () => {
      component.itemCardDataMode = '';
      expect(component.searchBy).toEqual('Items');
    });
  });

  describe('when search items', () => {
    let spyOnHandle;
    beforeEach(() => {
      spyOnHandle = spyOn(component.handleItem, 'emit');
      component.searchItem({
        inputItem: 'itemSearched'
      });
    });

    it('should have emit the input search', () => {
      expect(spyOnHandle).toHaveBeenCalledWith('itemSearched');
    });
  });

});
