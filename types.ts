
export interface Slug {
  _type: 'slug';
  current: string;
}

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
    url?: string;
  };
}

export interface BlockContent {
  _key: string;
  _type: 'block';
  children: {
    _key: string;
    _type: 'span';
    marks: any[];
    text: string;
  }[];
  markDefs: any[];
  style: string;
}

export interface Product {
  _id: string;
  title: string;
  slug: Slug;
  mainImage: SanityImage;
  shortDescription: string;
  body: BlockContent[];
  productUrl: string;
  imageUrl?: string;
}

export interface SiteSettings {
  siteTitle: string;
  siteDescription: string;
  analyticsHeadCode: string;
  analyticsBodyCode: string;
}
