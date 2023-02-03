import { Dispatch } from "react";

export interface DataProp {
  icon: string;
  title: string;
  description: string;
}

export interface CardProp extends DataProp {
  selectetedCard: DataProp;
  setSelectetedCard: Dispatch<DataProp>;
}

export interface StyledRoot {
  selected: boolean;
}
