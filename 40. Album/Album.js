"use strict";
function makeAlbum(artist, title, tracks) {
    const album = { artist, title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = makeAlbum("Artist1", "Album Title 1");
const ablum2 = makeAlbum("Artist2", "Album Title 2", 12);
const album3 = makeAlbum("Artist3", "Album Title 3");
console.log(album1);
console.log(ablum2);
console.log(album3);
