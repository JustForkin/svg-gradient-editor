import { InputColor } from "../_gradientTypes";

export type AttributePayload = {
  id: string,
  attribute: string,
  value: any,
};

export type TypePayload = {
  id: string,
  gradientType: 'linear' | 'radial',
  focalPoints?: boolean,
};

export type FocalPointsTogglePayload = {
  id: string,
  focalPoints: boolean,
};

export type ChromaJsTogglePayload = {
  id: string,
  useChroma: boolean,
};

export type AddColorPayload = {
  id: string,
  color: InputColor,
};

export type DeleteColorPayload = {
  gradientId: string,
  colorId: string,
};
