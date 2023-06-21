import imgPhonebook from '../img/Phonebook.jpg';
import imgGallery from '../img/Gallery.jpg';
import imgWebStudio from '../img/WebStudio.jpg';

export const projects = [
  {
    imgUrl: imgWebStudio,
    pageUrl: 'https://yourockit.github.io/my-course/my-html-css/my-hw-8/',
    sourceUrl:
      'https://github.com/yourockit/my-course/tree/master/my-html-css/my-hw-8',
    title: 'HTML/CSS WebStudio',
    description: 'Used HTMl, CSS, SASS. Mobile First. Adaptive layout.',
  },
  {
    imgUrl: imgGallery,
    pageUrl: 'https://yourockit.github.io/my-course-js-hw-11/',
    sourceUrl: 'https://github.com/yourockit/my-course-js-hw-11',
    title: 'Vanilla JS Gallery',
    description:
      'Simple app for search images. Used Vanilla JS, Axios, REST API',
  },
  {
    imgUrl: imgPhonebook,
    pageUrl: 'https://yourockit.github.io/my-course-react-hw-08-phonebook/',
    sourceUrl: 'https://github.com/yourockit/my-course-react-hw-08-phonebook',
    title: 'REACT Phonebook',
    description:
      'App with the ability to store, create, delete and edit contacts. Used REACT, Redux, Redux Toolkit, Material UI, Axios and other libraries.',
  },
];
