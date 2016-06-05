var ThumbnailList = require('thumbnail-list');

var options = {
  thumbnailData: [
    {
      title: 'Show Courses',
      number: 12,
      header: 'Learn React',
      description: 'Some stuff about React. React is cool. I am learning React. I hope this is entertaining. Weeee!',
      imageUrl: 'https://facebook.github.io/react/img/logo_og.png'
    },
    {
      title: 'Show Courses',
      number: 36,
      header: 'Learn Javascript',
      description: 'We like Javascript. It lets us do all sorts of things. Webby things.',
      imageUrl: 'https://www.codementor.io/assets/page_img/learn-javascript.png'
    },
    {
      title: 'Show Courses',
      number: 50,
      header: 'Learn Jasmine',
      description: 'This is Jasmine. It is for testing. Testing Javascript. It used to be unthinkable. Now it is very thinkable.',
      imageUrl: 'http://derickbailey.com/wp-content/uploads/2014/04/jasmine.png'
    }
  ]
};

var oneThumbnail = React.createElement(Thumbnail, options.thumbnailData[0]);
//    React.render(oneThumbnail, document.querySelector('.target'));

var allThumbnails = React.createElement(ThumbnailList, options);
React.render(allThumbnails, document.querySelector('.target'));
