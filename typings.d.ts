type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

export interface Post extends Base {
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
}

interface Image {
  alt: string;
  _type: 'image';
  asset: Reference;
}

interface Reference {
  _ref: string;
  _type: 'reference';
}

interface Slug {
  _type: 'slug';
  current: string;
}

interface Category extends Base {
  description: string;
  title: string;
}

interface mainImage {
  _type: 'image';
  current: string;
}

interface Title {
  _type: 'string';
  current: string;
}
