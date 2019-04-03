var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/streetBreezy');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to database');
});

let DescriptionBoxSchema = mongoose.Schema({
  id: Number,
  description: String,
  highlightAmens: Array,
  buildingAmens: Array,
  listingAmens: Array,
  outdoorAmens: Array
})

let DescriptionBox = mongoose.model('descriptionBox', DescriptionBoxSchema);

let saver = (description, highlightAmenitiesCreator, highlightAmenitiesArray, buildingAmenitiesCreator, buildingAmenitiesArray, listingAmenitiesCreator, listingAmenitiesArray, outdoorAmenitiesCreator, outdoorAmenitiesArray) => {
  console.log('SAVER CALLED');
  let divider = 1;
  for (let i = 0; i < 100; i++) {
    if (i >= 0 && i < 25) {
      divider = 4;
    } else if (i >= 25 && i < 50) {
      divider = 3;
    } else if (i >= 50 && i < 75) {
      divider = 2;
    } else if (i >= 75 && i < 100) {
      divider = 1;
    }
    let input1 = highlightAmenitiesCreator(divider, highlightAmenitiesArray);
    let input2 = buildingAmenitiesCreator(divider, buildingAmenitiesArray);
    let input3 = listingAmenitiesCreator(divider, listingAmenitiesArray);
    let input4 = outdoorAmenitiesCreator(divider, outdoorAmenitiesArray);
    let newDescriptionBox = new DescriptionBox({
      id: i,
      description: description,
      highlightAmens: input1 || null,
      buildingAmens: input2 || null,
      listingAmens: input3 || null,
      outdoorAmens: input4 || null
    });
    newDescriptionBox.save((err, data) => {
      if (err) console.log('error:', err);
      console.log('saved:', data);
    });
  }
}

module.exports.db = db;
module.exports.saver = saver;
module.exports.DescriptionBox = DescriptionBox;