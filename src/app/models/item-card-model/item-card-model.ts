export interface ItemCardData {
  itemData: {
    itemList: ItemCardModel[]
  };
}

export interface ItemCardModel {
  title: string;
  description: string;
  price: string;
  email: string;
  image: string;
}
