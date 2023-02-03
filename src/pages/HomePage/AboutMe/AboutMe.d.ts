import { Dispatch } from "react";

export interface DataProp {
  icon: string;
  title: string;
  description: string;
  details: string;
}

export interface CardProp extends DataProp {
  selectetedCard: DataWithDetailsProp;
  setSelectetedCard: Dispatch<DataWithDetailsProp>;
}

export interface StyledRoot {
  selected: boolean;
}
