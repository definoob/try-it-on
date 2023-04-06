export type ImageType = {
  id: number;
  originUrl: string;
  dataUrl: string;
  edit: string;
};

export type DBSchema = {
  images: ImageType[];
};
