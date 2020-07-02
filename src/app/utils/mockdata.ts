import { Book } from '../models/book';

export const singleAuthorMock = {
  href: 'http://localhost:4201/Authors/45101208-7e41-4867-bf9a-7d9ce054d2f0',
  id: '45101208-7e41-4867-bf9a-7d9ce054d2f0',
  first_name: 'James ',
  middle_names: 'David',
  last_name: 'Patterson',
  name: 'James  David Patterson',
  about:
    'Patterson is frequently thought to be the best-selling author in the world today, and has been since 2001',
  version: 'AAAAAAAAF3E=',
  books: [],
};

export const singleBookMock: Book = {
  isbn10: '0917769732',
  isbn13: '9788336270229',
  title: 'Angular',
  about:
    'Angular ProgrAngular Programming Angular Programming Angular Programming Angular Programming Angular Programming amming ',
  abstract: '',
  author: {
    href: 'http://localhost:4201/Authors/09ebf34d-b1d5-4384-be8a-9e62fb6945d0',
    id: '09ebf34d-b1d5-4384-be8a-9e62fb6945d0',
    name: 'Robert Cecil Martin',
  },
  publisher: 'Digital Publishing',
  date_published: new Date(),
  tags: [
    {
      id: 'Angular',
      href: 'http://localhost:4201/Tags/Angular',
      description: 'Angular',
    },
  ],
};

export const booksMock = [
  {
    isbn10: '0917769732',
    isbn13: '9788336270229',
    title: 'Angular',
    about:
      'Angular ProgrAngular Programming Angular Programming Angular Programming Angular Programming Angular Programming amming ',
    abstract: '',
    author: {
      href:
        'http://localhost:4201/Authors/09ebf34d-b1d5-4384-be8a-9e62fb6945d0',
      id: '09ebf34d-b1d5-4384-be8a-9e62fb6945d0',
      name: 'Robert Cecil Martin',
    },
    publisher: 'Digital Publishing',
    date_published: '2020-04-26T00:00:00+00:00',
    tags: [
      {
        id: 'Angular',
        href: 'http://localhost:4201/Tags/Angular',
        description: 'Angular',
      },
    ],
  },
  {
    isbn10: '1103061356',
    isbn13: '9781103061358',
    title: 'AngularCLI',
    about: 'qd',
    abstract: '',
    author: {
      href:
        'http://localhost:4201/Authors/233fa6c5-435d-4457-bf27-f602ba3426d9',
      id: '233fa6c5-435d-4457-bf27-f602ba3426d9',
      name: 'John Middleton Smith',
    },
    publisher: 'dqd',
    date_published: '2020-05-12T00:00:00+00:00',
    tags: [
      {
        id: 'Angular',
        href: 'http://localhost:4201/Tags/Angular',
        description: 'Angular',
      },
    ],
  },
  {
    isbn10: '0193936763',
    isbn13: '9782591027741',
    title: 'C# Programming',
    about: 'C#',
    abstract: '',
    author: {
      href:
        'http://localhost:4201/Authors/233fa6c5-435d-4457-bf27-f602ba3426d9',
      id: '233fa6c5-435d-4457-bf27-f602ba3426d9',
      name: 'John Middleton Smith',
    },
    publisher: 'O"Reilly Publishers',
    date_published: '2020-04-27T00:00:00+00:00',
    tags: [
      {
        id: 'C#',
        href: 'http://localhost:4201/Tags/C#',
        description: 'C#',
      },
    ],
  },
];

export const authorsMock = [
  {
    href: 'http://localhost:4201/Authors/45101208-7e41-4867-bf9a-7d9ce054d2f0',
    id: '45101208-7e41-4867-bf9a-7d9ce054d2f0',
    first_name: 'James ',
    middle_names: 'David',
    last_name: 'Patterson',
    name: 'James  David Patterson',
    about:
      'Patterson is frequently thought to be the best-selling author in the world today, and has been since 2001',
    version: 'AAAAAAAAF3E=',
    books: [],
  },
  {
    href: 'http://localhost:4201/Authors/233fa6c5-435d-4457-bf27-f602ba3426d9',
    id: '233fa6c5-435d-4457-bf27-f602ba3426d9',
    first_name: 'John',
    middle_names: 'Middleton',
    last_name: 'Smith',
    name: 'John Middleton Smith',
    about:
      'Programming with John is a programming volume book where he teaches C# , and Angular',
    version: 'AAAAAAAAH0E=',
    books: [],
  },
];
