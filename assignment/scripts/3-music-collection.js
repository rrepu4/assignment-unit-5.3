console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection=[];
//addToCollection();
function addToCollection(Collection,title, artist, yearPublished){
  let newAlbum = {
    Collection: Collection,
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };

  Collection.push(newAlbum);
  return newAlbum;

}

addToCollection(myCollection, 'The Real Slim Shady', 'Eminem', 2000);
addToCollection(myCollection, 'Th way I am', 'Eminem', 2000);
addToCollection(myCollection, 'Stan', 'Eminem', 2000);

console.log('myAlbum', myCollection);

function showCollection(collection) {
  for (let items of collection) {
    console.log(`${items.title} by ${items.artist}, published in ${items.yearPublished}`);
  }
  

}

(showCollection(myCollection));

function findByArtist(collection, artist){
  let matchedArtists = [];
  for (let singer of collection) {
   if (singer.artist === artist)
    matchedArtists.push(singer);
  }
  return matchedArtists;

  
}





// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
