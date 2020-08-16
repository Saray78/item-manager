import { FilterSearchPipe } from './filter-search.pipe';
import { ItemCardModel } from '../../models/item-card-model/item-card-model';

describe('FilterSearchPipe', () => {
  let pipe: FilterSearchPipe;
  const mockedSearch: ItemCardModel[] = [
    {
      title: 'this title have está word',
      description: 'this is a description',
      price: 'price1',
      email: 'email1',
      image: 'image1'
    },
    {
      title: 'this title no have any special word',
      description: 'this is a description',
      price: 'price2',
      email: 'email2',
      image: 'image2'
    }
  ];
  beforeEach(() => {
    pipe = new FilterSearchPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });


  describe('when have not values', () => {
    let arrayFiltered: any[];
    beforeEach(() => {
      arrayFiltered = pipe.transform(undefined, undefined, ['title', 'description', 'price', 'email']);
    });

    it('should have return empty search', () => {
      expect(arrayFiltered).toEqual([]);
    });
  });

  describe('when have empty search', () => {
    let arrayFiltered: any[];
    beforeEach(() => {
      arrayFiltered = pipe.transform(mockedSearch, undefined, ['title', 'description', 'price', 'email']);
    });

    it('should have return all the items', () => {
      expect(arrayFiltered).toEqual(mockedSearch);
    });
  });

  describe('when have values with diacritics and search by all the fields', () => {
    let arrayFiltered: any[];
    beforeEach(() => {
      arrayFiltered = pipe.transform(mockedSearch, 'está', ['title', 'description', 'price', 'email']);
    });

    it('should have return the item searched', () => {
      expect(arrayFiltered).toEqual([
        {
          title: 'this title have está word',
          description: 'this is a description',
          price: 'price1',
          email: 'email1',
          image: 'image1'
        },
      ]);
    });
  });

  describe('when have values without diacritics and search by one field', () => {
    let arrayFiltered: any[];
    beforeEach(() => {
      arrayFiltered = pipe.transform(mockedSearch, 'special', ['title']);
    });

    it('should have return the item searched', () => {
      expect(arrayFiltered).toEqual([
        {
          title: 'this title no have any special word',
          description: 'this is a description',
          price: 'price2',
          email: 'email2',
          image: 'image2'
        }
      ]);
    });
  });

  describe('when the diacritics are not in the dictionary', () => {
    let arrayFiltered: any[];
    beforeEach(() => {
      arrayFiltered = pipe.transform(mockedSearch, 'éste', ['title', 'description', 'price', 'email']);
    });

    it('should have return empty items', () => {
      expect(arrayFiltered).toEqual([]);
    });
  });

});
