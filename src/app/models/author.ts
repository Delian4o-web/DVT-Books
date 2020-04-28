import { Book } from './book';

export class Author {
  href: string;
  id: string;
  firstName: string;
  middleNames: string;
  lastName: string;
  name: string;
  about: string;
  version: string;
  books: Book[];
}
