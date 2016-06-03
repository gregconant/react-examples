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

var Badge = React.createClass({displayName: "Badge",
  render: function() {
    return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
      this.props.title, " ", React.createElement("span", {className: "badge"}, " ", this.props.number)
      )
  }
});

var ThumbnailList = React.createClass({displayName: "ThumbnailList",
  render: function() {
    var list = this.props.thumbnailData.map(function(thumbnailProps) {
      return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
    });

    return React.createElement("div", null, 
       list 
    )
  }
});

var Thumbnail = React.createClass({displayName: "Thumbnail",
  render: function() {
    return React.createElement("div", {className: "col-sm-6 col-md-4"}, 
      React.createElement("div", {className: "thumbnail"}, 
        React.createElement("img", {src: this.props.imageUrl, alt: "...", height: "150", width: "150"}), 
        React.createElement("div", {className: "caption"}, 
          React.createElement("h3", null, this.props.header), 
          React.createElement("p", null, this.props.description), 
          React.createElement("p", null, 
            React.createElement(Badge, {title: this.props.title, number: this.props.number})
          )
        )
      )
    )
  }
});
