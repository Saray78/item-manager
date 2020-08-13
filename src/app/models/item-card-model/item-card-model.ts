export interface ItemCardData {
  itemData: ItemCardModel[];
}

export interface ItemCardModel {
  title: string;
  description: string;
  price: string;
  email: string;
  image: string;
  isFavoriteItem?: boolean;
}
