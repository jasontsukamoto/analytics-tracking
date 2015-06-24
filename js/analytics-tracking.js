var counter = {};

document.addEventListener('click', function(event) {
  var property = 'elementName:' + event.target.nodeName;
  if (event.target.className) {
    property += ' className:' + event.target.className;
  } else if (event.target.id) {
    property += ' id:' + event.target.id;
  }

  if(counter.hasOwnProperty(property)) {
    counter[property]++
  } else {
    counter[property] = 1;
  }
  console.log(counter);
});