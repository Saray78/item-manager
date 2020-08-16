import { TestBed } from '@angular/core/testing';
import { HomeResolver } from './home.resolver';
import { ItemManagerService } from '../item-manager.service';


describe('HomeResolver', () => {
  const itemManagerSpy = jasmine.createSpyObj('itemManagerService', ['getItemManagerItems']);
  let homeResolver;
  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        {
          provide: ItemManagerService, useValue: itemManagerSpy
        }
      ]
    });
    homeResolver = new HomeResolver(itemManagerSpy);
  });

  afterEach(() => {
    itemManagerSpy.getItemManagerItems.calls.reset();
  });

  it('should be defined', () => {
    expect(homeResolver).toBeTruthy();
  });

  describe('when resolve the call', () => {
    beforeEach(() => {
      homeResolver.resolve({ data: {} });
    });

    it('tes', () => {
      expect(itemManagerSpy.getItemManagerItems).toHaveBeenCalledTimes(1);
    });
  });
});


