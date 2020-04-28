import { Tag } from './tag';
import { Author } from './author';

export class Book {
  isbN10: string;
  isbN13: string;
  title: string;
  about: string;
  abstract: string;
  author: Author[];
  publisher: string;
  datePublished: Date;
  image: string;
  tags: Tag[];
  version: string;
}
