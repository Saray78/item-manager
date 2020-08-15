import { FilterByFavoritesPipe } from './filter-by-favorites.pipe';

describe('FilterByFavoritesPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterByFavoritesPipe();
    expect(pipe).toBeTruthy();
  });
});
