import { PureSlicePipe } from './pure-slice.pipe';
import { ItemCardModel } from '../../models/item-card-model/item-card-model';

describe('PureSlicePipe', () => {
  let pipe: PureSlicePipe;
  const mockedSearch: ItemCardModel[] = [
    {
      title: 'title1',
      description: 'description1',
      price: 'price1',
      email: 'email1',
      image: 'image1'
    },
    {
      title: 'title2',
      description: 'description2',
      price: 'price2',
      email: 'email2',
      image: 'image2'
    },
    {
      title: 'title3',
      description: 'description3',
      price: 'price3',
      email: 'email3',
      image: 'image3'
    },
    {
      title: 'title4',
      description: 'description4',
      price: 'price4',
      email: 'email4',
      image: 'image4'
    },
  ];
  beforeEach(() => {
     pipe = new PureSlicePipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('when has limit values to show', () => {
    let arrayToShow: any[];
    beforeEach(() => {
     arrayToShow = pipe.transform(mockedSearch, 0, 2);
    });

    it('should have show two items', () => {
      expect(arrayToShow).toEqual([
        {
          title: 'title1',
          description: 'description1',
          price: 'price1',
          email: 'email1',
          image: 'image1'
        },
        {
          title: 'title2',
          description: 'description2',
          price: 'price2',
          email: 'email2',
          image: 'image2'
        },
      ]);
    });
  });
});
