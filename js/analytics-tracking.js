var counter = {};

document.addEventListener('click', function(event) {
  var property = event.target.nodeName;
  if (event.target.className) {
    property += ' .' + event.target.className;
  } else if (event.target.id) {
    property += ' #' + event.target.id;
  }

  if(counter.hasOwnProperty(property)) {
    counter[property]++
  } else {
    counter[property] = 1;
  }
  console.log(counter);
});