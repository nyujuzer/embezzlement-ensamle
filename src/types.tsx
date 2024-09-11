export interface Product {
  id: string;
  title: string;
  description: string;
  tags: string[];
  images: DatumImage[];
}

export interface DatumImage {
  src: string;
  variant_ids: number[];
  position: Position;
  is_default: boolean;
  is_selected_for_publishing: boolean;
  order: null;
}

export enum Position {
  Back = "back",
  Front = "front",
  Other = "other",
}

export interface Option {
  name: string;
  type: string;
  values: Value[];
  display_in_preview: boolean;
}

export interface Value {
  id: number;
  title: string;
  colors?: string[];
}

export interface PrintArea {
  variant_ids: number[];
  placeholders: Placeholder[];
  font_color?: string;
  font_family?: string;
}

export interface Placeholder {
  position: Position;
  images: PlaceholderImage[];
}

export interface PlaceholderImage {
  id: string;
  name: string;
  type: string;
  height: number;
  width: number;
  x: number;
  y: number;
  scale: number;
  angle: number;
}

export interface Variant {
  id: number;
  sku: string;
  cost: number;
  price: number;
  title: string;
  grams: number;
  is_enabled: boolean;
  is_default: boolean;
  is_available: boolean;
  is_printify_express_eligible: boolean;
  options: number[];
  quantity: number;
}

export interface Link {
  url: null | string;
  label: string;
  active: boolean;
}
