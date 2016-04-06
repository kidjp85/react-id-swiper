let slides = [];

for ( let i = 1; i <= 10; i++ ) {
  slides.push( {
    'id' : i,
    'title' : 'Slide #' + i,
    'img': 'http://lorempixel.com/1000/1000/sports/' + i
  } );
}

export default slides;