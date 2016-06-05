(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"d:\\_Projects\\react-examples\\src\\app.jsx":[function(require,module,exports){
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
},{}]},{},["d:\\_Projects\\react-examples\\src\\app.jsx"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkOlxcX1Byb2plY3RzXFxyZWFjdC1leGFtcGxlc1xcc3JjXFxhcHAuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBSSxPQUFPLEdBQUc7RUFDWixhQUFhLEVBQUU7SUFDYjtNQUNFLEtBQUssRUFBRSxjQUFjO01BQ3JCLE1BQU0sRUFBRSxFQUFFO01BQ1YsTUFBTSxFQUFFLGFBQWE7TUFDckIsV0FBVyxFQUFFLGlHQUFpRztNQUM5RyxRQUFRLEVBQUUsa0RBQWtEO0tBQzdEO0lBQ0Q7TUFDRSxLQUFLLEVBQUUsY0FBYztNQUNyQixNQUFNLEVBQUUsRUFBRTtNQUNWLE1BQU0sRUFBRSxrQkFBa0I7TUFDMUIsV0FBVyxFQUFFLHNFQUFzRTtNQUNuRixRQUFRLEVBQUUsZ0VBQWdFO0tBQzNFO0lBQ0Q7TUFDRSxLQUFLLEVBQUUsY0FBYztNQUNyQixNQUFNLEVBQUUsRUFBRTtNQUNWLE1BQU0sRUFBRSxlQUFlO01BQ3ZCLFdBQVcsRUFBRSw4R0FBOEc7TUFDM0gsUUFBUSxFQUFFLGdFQUFnRTtLQUMzRTtHQUNGO0FBQ0gsQ0FBQyxDQUFDOztBQUVGLElBQUksWUFBWSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1RSxvRUFBb0U7O0FBRXBFLElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2hFLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgb3B0aW9ucyA9IHtcclxuICB0aHVtYm5haWxEYXRhOiBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnU2hvdyBDb3Vyc2VzJyxcclxuICAgICAgbnVtYmVyOiAxMixcclxuICAgICAgaGVhZGVyOiAnTGVhcm4gUmVhY3QnLCBcclxuICAgICAgZGVzY3JpcHRpb246ICdTb21lIHN0dWZmIGFib3V0IFJlYWN0LiBSZWFjdCBpcyBjb29sLiBJIGFtIGxlYXJuaW5nIFJlYWN0LiBJIGhvcGUgdGhpcyBpcyBlbnRlcnRhaW5pbmcuIFdlZWVlIScsXHJcbiAgICAgIGltYWdlVXJsOiAnaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvaW1nL2xvZ29fb2cucG5nJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdTaG93IENvdXJzZXMnLFxyXG4gICAgICBudW1iZXI6IDM2LFxyXG4gICAgICBoZWFkZXI6ICdMZWFybiBKYXZhc2NyaXB0JyxcclxuICAgICAgZGVzY3JpcHRpb246ICdXZSBsaWtlIEphdmFzY3JpcHQuIEl0IGxldHMgdXMgZG8gYWxsIHNvcnRzIG9mIHRoaW5ncy4gV2ViYnkgdGhpbmdzLicsXHJcbiAgICAgIGltYWdlVXJsOiAnaHR0cHM6Ly93d3cuY29kZW1lbnRvci5pby9hc3NldHMvcGFnZV9pbWcvbGVhcm4tamF2YXNjcmlwdC5wbmcnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ1Nob3cgQ291cnNlcycsXHJcbiAgICAgIG51bWJlcjogNTAsXHJcbiAgICAgIGhlYWRlcjogJ0xlYXJuIEphc21pbmUnLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgSmFzbWluZS4gSXQgaXMgZm9yIHRlc3RpbmcuIFRlc3RpbmcgSmF2YXNjcmlwdC4gSXQgdXNlZCB0byBiZSB1bnRoaW5rYWJsZS4gTm93IGl0IGlzIHZlcnkgdGhpbmthYmxlLicsXHJcbiAgICAgIGltYWdlVXJsOiAnaHR0cDovL2Rlcmlja2JhaWxleS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTQvMDQvamFzbWluZS5wbmcnXHJcbiAgICB9XHJcbiAgXVxyXG59O1xyXG5cclxudmFyIG9uZVRodW1ibmFpbCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGh1bWJuYWlsLCBvcHRpb25zLnRodW1ibmFpbERhdGFbMF0pO1xyXG4vLyAgICBSZWFjdC5yZW5kZXIob25lVGh1bWJuYWlsLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFyZ2V0JykpO1xyXG5cclxudmFyIGFsbFRodW1ibmFpbHMgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFRodW1ibmFpbExpc3QsIG9wdGlvbnMpO1xyXG5SZWFjdC5yZW5kZXIoYWxsVGh1bWJuYWlscywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhcmdldCcpKTtcclxuIl19
