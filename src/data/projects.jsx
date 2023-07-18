import imgPhonebook from '../img/Phonebook_1.jpg';
import imgGallery from '../img/Gallery_1.jpg';
import imgWebStudio from '../img/WebStudio_1.jpg';

export const projects = [
  {
    title: 'HTML/CSS',
    link: 'html-css',
    imgUrl: imgWebStudio,
  },
  {
    imgUrl: imgGallery,
    pageUrl: 'https://yourockit.github.io/my-course-js-hw-11/',
    sourceUrl: 'https://github.com/yourockit/my-course-js-hw-11',
    title: 'JS',
    description:
      'Simple app for search images. Used Vanilla JS, Axios, REST API',
  },
  {
    imgUrl: imgPhonebook,
    pageUrl: 'https://yourockit.github.io/my-course-react-hw-08-phonebook/',
    sourceUrl: 'https://github.com/yourockit/my-course-react-hw-08-phonebook',
    title: 'REACT',
    description:
      'App with the ability to store, create, delete and edit contacts. Used REACT, Redux, Redux Toolkit, Material UI, Axios and other libraries.',
  },
];
