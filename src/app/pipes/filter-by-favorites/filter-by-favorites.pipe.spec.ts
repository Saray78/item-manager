import { FilterByFavoritesPipe } from './filter-by-favorites.pipe';
import { ItemCardModel } from '../../models/item-card-model/item-card-model';

describe('FilterByFavoritesPipe', () => {
  let pipe: FilterByFavoritesPipe;
  const mockedItem: ItemCardModel[] = [
    {
      title: 'title1',
      description: 'description1',
      price: 'price1',
      email: 'email1',
      image: 'image1',
      isFavoriteItem: true
    },
    {
      title: 'title2',
      description: 'description',
      price: 'price2',
      email: 'email2',
      image: 'image2',
      isFavoriteItem: false
    }
  ];
  beforeEach(() => {
    pipe = new FilterByFavoritesPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('when have favorite items', () => {
    let arrayFiltered: ItemCardModel[];
    beforeEach(() => {
      arrayFiltered = pipe.transform(mockedItem);
    });
    it('should have filter favorite items', () => {
      expect(arrayFiltered).toEqual([mockedItem[0]]);
    });
  });

  describe('when have not favorite items', () => {
    let arrayFiltered: ItemCardModel[];
    beforeEach(() => {
      arrayFiltered = pipe.transform([]);
    });
    it('should have empty items', () => {
      expect(arrayFiltered).toEqual([]);
    });
  });

});
