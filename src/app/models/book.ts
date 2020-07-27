import { Tag } from './tag';
import { Author } from './author';
export class Book {
  isbn10: string;
  isbn13: string;
  title: string;
  about: string;
  abstract: string;
  author: { href: string; id: string; name: string };
  publisher: string;
  date_published: Date;
  image?: File;
  tags: Tag[];
}
