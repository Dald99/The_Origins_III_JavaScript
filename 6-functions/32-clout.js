const recentTikTokViews = [1932, 2300, 453, 5222, 6733, 7402, 8334];
const recentInstagramViews = [936, 2300, 453, 5222, 6733, 7402, 8334];
const recentYouTubeViews = [989, 2300, 453, 5222, 6733, 7402, 8334];

function mean (viewsArray) {
    let totalViews = 0;
    for (let i = 0; i < viewsArray.length; i++) {
        totalViews += viewsArray[i];
    }
    console.log(Math.floor(totalViews / viewsArray.length));
}

function median (viewsArray) {
    let sortedStats = viewsArray.sort();
    let middleIndex = Math.floor(sortedStats.length / 2);

    console.log(viewsArray[middleIndex]);
}

mean(recentTikTokViews);
median(recentTikTokViews);
console.log('------------------');

mean(recentInstagramViews);
median(recentInstagramViews);
console.log('------------------');

mean(recentYouTubeViews);
median(recentYouTubeViews);

