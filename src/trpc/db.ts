import {LowSync} from 'lowdb';
import {JSONFileSync} from 'lowdb/node';
import {ImageType as Image, DBSchema} from './types';

const adapter = new JSONFileSync<DBSchema>('/tmp/data.json');
const db = new LowSync(adapter);

db.data ||= {images: []};

export const getImageById = (imageId: number): Image | undefined => {
  if (db.data && db.data.images) {
    return db.data.images.find(({id}) => id === imageId);
  }
};

export const addImage = (
  id: number,
  originUrl: string,
  dataUrl: string
): Image | null => {
  if (getImageById(id) !== undefined) {
    return null;
  }
  const image = {
    id,
    originUrl,
    dataUrl,
    edit: '',
  };

  db.data?.images.push(image);
  db.write();
  return image;
};

export const getImages = (): Image[] => {
  if (db.data) {
    return db.data.images;
  }
  return [];
};

export const updateImage = (imageId: number, newDataUrl: string) => {
  if (!db.data) return;
  const images = [...db.data.images];
  const idx = images.findIndex(({id}) => id === imageId);
  if (idx < 0) return;
  images[idx].dataUrl = newDataUrl;
  db.data.images = images;
  db.write();
};

export const updateRequestedEdit = (imageId: number, edit: string) => {
  if (!db.data) return;
  const images = [...db.data.images];
  const idx = images.findIndex(({id}) => id === imageId);
  if (idx < 0) return;
  images[idx].edit = edit;
  db.data.images = images;
  db.write();
};
