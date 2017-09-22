// DO NOT EDIT async function that gets the first word and passes it to its callback
function getFirstWord(callback) {
  setTimeout(function() {
    callback('Async ');
  }, 90);
};

// DO NOT EDIT async function that gets the second word and passes it to its callback
function getSecondWord(callback) {
  setTimeout(function() {
    callback('is ');
  }, 30);
};

// DO NOT EDIT async function that gets the third word and passes it to its callback
function getThirdWord(callback) {
  setTimeout(function() {
    callback('awesome.');
  }, 60);
};

// use the above functions to complete the sentence and pass it to this function's callback
function getSentence(callback) {
  var results = [];
  var count = 3;
  getFirstWord(function(result) {
    results[0] = result;
    count--;
    if(count === 0) {
      callback(results.join(''));
    }
  });
  getSecondWord(function(result) {
    results[1] = result;
    count--;
    if(count === 0) {
      callback(results.join(''));
    }
  });
  getThirdWord(function(result) {
    results[2] = result;
    count--;
    if(count === 0) {
      callback(results.join(''));
    }
  });

}

module.exports = getSentence;
