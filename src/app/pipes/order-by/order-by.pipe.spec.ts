import { OrderByPipe } from './order-by.pipe';
import { itemsMock } from '../../api-mocked/items.json';

describe('OrderByPipe', () => {
  let pipe: OrderByPipe;
  beforeEach(() => {
    pipe = new OrderByPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('When I sort by alphabetical value and descendant order', () => {
    let sortedItems;
    beforeEach(() => {
      const descendantSorting = true;
      const isStringFieldType = true;
      sortedItems = pipe.transform(itemsMock.items, 'title' , descendantSorting, isStringFieldType);
    });
    it('should return Barbacoa as a first item', () => {
      expect(sortedItems[0].title).toEqual('Barbacoa');
    });
  });

  describe('When I sort by alphabetical value and ascendant order', () => {
    let sortedItems;
    beforeEach(() => {
      const descendantSorting = false;
      const isStringFieldType = true;
      sortedItems = pipe.transform(itemsMock.items, 'title' , descendantSorting, isStringFieldType);
    });
    it('should return Vespa Restaurada as a first item', () => {
      expect(sortedItems[0].title).toEqual('Vespa restaurada');
    });
  });

  describe('When I sort by numerical value and descendant Order', () => {
    let sortedItems;
    beforeEach(() => {
      const descendantSorting = true;
      const isStringFieldType = false;
      sortedItems = pipe.transform(itemsMock.items, 'price' , descendantSorting, isStringFieldType);
    });
    it('should return 5 as the price for the first item', () => {
      expect(sortedItems[0].price).toEqual('5');
    });
  });

  describe('When I sort by alphabetical value having a repeated item', () => {
    let sortedItems;
    beforeEach(() => {
      const itemMocksWithDuplicates = [...itemsMock.items].concat(itemsMock.items);
      const descendantSorting = true;
      const isStringFieldType = true;
      sortedItems = pipe.transform(itemMocksWithDuplicates, 'title' , descendantSorting, isStringFieldType);
    });
    it('should not affect to the sorting', () => {
      expect(sortedItems[0].title).toEqual('Barbacoa');
    });
  });
});
