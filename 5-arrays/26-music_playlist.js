const musicPlaylist = [
    "Shine On Your Crazy Diamond",
    "Marquee Moon",
    "Guns of Brixton",
    "Sludge Factory",
    "Eulogy",
    "The Great Gig in the Sky",
    "Starless",
    "The Year of the Cat",
    "Don't Be so Hard With Your Own Beauty",
    "Happiness Is a Warm Gun",
];

musicPlaylist.shift();
musicPlaylist.pop();

musicPlaylist.push("A Day in the Life");

musicPlaylist.unshift("Brain Damage");
musicPlaylist.unshift("Time");

console.log(musicPlaylist)