import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemSortComponent } from './item-sort.component';
import { ClickOutsideModule } from 'ng-click-outside';

fdescribe('ItemSortComponent', () => {
  let component: ItemSortComponent;
  let fixture: ComponentFixture<ItemSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ClickOutsideModule
      ],
      declarations: [ItemSortComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when toggle sort panel closed by default', () => {
    beforeEach(() => {
      component.toggleSortingPanel();
    });
    it('should have open the panel', () => {
      expect(component.hasToShowSortingPanel).toEqual(true);
    });
  });

  describe('when toggle sort panel open by default', () => {
    beforeEach(() => {
      component.hasToShowSortingPanel = true;
      component.toggleSortingPanel();
    });
    it('should have close the panel', () => {
      expect(component.hasToShowSortingPanel).toEqual(false);
    });
  });

  describe('when click outside', () => {
    beforeEach(() => {
      component.hasToShowSortingPanel = true;
      component.toggleSortingPanel(false);
    });
    it('should have force to close the panel', () => {
      expect(component.hasToShowSortingPanel).toEqual(false);
    });
  });

  describe('when sort string ascending items', () => {
    let spyOnOutput;
    const mockedInputSort = {
      sortingField: 'title',
      descendantSorting: false,
      isStringFieldType: true
    };

    beforeEach(() => {
      spyOnOutput = spyOn(component.handleSortItem, 'emit');
      component.sortField(mockedInputSort.sortingField, mockedInputSort.descendantSorting, 'asc-title');
    });
    it('should have currentSortingField', () => {
      expect(component.currentSortingField).toHaveBeenCalledWith(mockedInputSort.sortingField);
    });

    it('should have to emit the input', () => {
      expect(spyOnOutput).toHaveBeenCalledWith(mockedInputSort);
    });
  });

  describe('when sort string descending items', () => {
    let spyOnOutput;
    const mockedInputSort = {
      sortingField: 'title',
      descendantSorting: true,
      isStringFieldType: true
    };

    beforeEach(() => {
      spyOnOutput = spyOn(component.handleSortItem, 'emit');
      component.sortField(mockedInputSort.sortingField, mockedInputSort.descendantSorting, 'desc-title');
    });

    it('should have currentSortingField', () => {
      expect(component.currentSortingField).toHaveBeenCalledWith(mockedInputSort.sortingField);
    });


    it('should have to emit the input', () => {
      expect(spyOnOutput).toHaveBeenCalledWith(mockedInputSort);
    });
  });

  describe('when sort number ascending items', () => {
    let spyOnOutput;
    const mockedInputSort = {
      sortingField: 'price',
      descendantSorting: false,
      isStringFieldType: false
    };

    beforeEach(() => {
      spyOnOutput = spyOn(component.handleSortItem, 'emit');
      component.sortField(mockedInputSort.sortingField, mockedInputSort.descendantSorting, 'asc-price');
    });
    it('should have currentSortingField', () => {
      expect(component.currentSortingField).toHaveBeenCalledWith(mockedInputSort.sortingField);
    });

    it('should have to emit the input', () => {
      expect(spyOnOutput).toHaveBeenCalledWith(mockedInputSort);
    });
  });

  describe('when sort number descending items', () => {
    let spyOnOutput;
    const mockedInputSort = {
      sortingField: 'price',
      descendantSorting: true,
      isStringFieldType: false
    };

    beforeEach(() => {
      spyOnOutput = spyOn(component.handleSortItem, 'emit');
      component.sortField(mockedInputSort.sortingField, mockedInputSort.descendantSorting, 'desc-price');
    });
    it('should have currentSortingField', () => {
      expect(component.currentSortingField).toHaveBeenCalledWith(mockedInputSort.sortingField);
    });

    it('should have to emit the input', () => {
      expect(spyOnOutput).toHaveBeenCalledWith(mockedInputSort);
    });
  });
});
