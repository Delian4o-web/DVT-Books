import { Book } from './book';

export class Author {
  href: string;
  id: string;
  // tslint:disable-next-line: variable-name
  first_name: string;
  // tslint:disable-next-line: variable-name
  middle_names: string;
  // tslint:disable-next-line: variable-name
  last_name: string;
  name: string;
  about: string;
  version: string;
  books: Book[];
}
