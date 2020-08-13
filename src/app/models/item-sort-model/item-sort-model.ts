export interface ItemSortModel {
  name: string;
  sortingButtons: SortingButtons;
}

export interface SortingButtons {
  ascendantButton: string;
  descendantButton: string;
}

export const ORDER_ALPHABETICAL = {
  ascendantButton: 'Z-A',
  descendantButton: 'A-Z'
};

export const ORDER_NUMERICAL = {
  ascendantButton: '9-0',
  descendantButton: '0-9'
};


export const SortingFields: ItemSortModel[] = [
  {
    name: 'Title',
    sortingButtons: ORDER_ALPHABETICAL
  },
  {
    name: 'Description',
    sortingButtons: ORDER_ALPHABETICAL
  },
  {
    name: 'Price',
    sortingButtons: ORDER_NUMERICAL
  },
  {
    name: 'Email',
    sortingButtons: ORDER_ALPHABETICAL
  }
];