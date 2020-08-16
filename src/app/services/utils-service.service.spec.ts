import { TestBed } from '@angular/core/testing';

import { UtilsServiceService } from './utils-service.service';

describe('UtilsServiceService', () => {
  let service: UtilsServiceService;
  const mockedItem = {
    title: 'title1',
    description: 'description1',
    price: 'price1',
    email: 'email1',
    image: 'image1'
  };
  const mockedItemWithId = {
    id: 'Id',
    title: 'title1',
    description: 'description1',
    price: 'price1',
    email: 'email1',
    image: 'image1'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('when have item idName', () => {
    let changedItem: string;
    beforeEach(() => {
      changedItem = service.trackByFunction('email', 0, mockedItem);
    });

    it('should have return the unique item changed', () => {
      expect(changedItem).toEqual('email10');
    });
  });

  describe('when have empty item', () => {
    let changedItem: string;
    beforeEach(() => {
      changedItem = service.trackByFunction('email', 0, null);
    });

    it('should have return the unique item changed', () => {
      expect(changedItem).toEqual(null);
    });
  });

  describe('when item have id', () => {
    let changedItem: string;
    beforeEach(() => {
      changedItem = service.trackByFunction(null, 0, mockedItemWithId);
    });

    it('should have return the unique item changed', () => {
      expect(changedItem).toEqual('Id0');
    });
  });
});
