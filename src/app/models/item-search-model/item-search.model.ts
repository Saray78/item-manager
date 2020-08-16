export interface ItemSearchModel {
  inputItem: string;
}

export enum ItemSearchMode {
  basicMode = 'basicMode'
}

export enum SearchBy {
  titleField = 'by Title',
  allFields = 'Items'
}
