song_1 = "";
song_2 = "";

function preload(){
    song_1 = loadSound("music.mp3");
    song_2 = loadSound("music2.mp3");
}

function setup(){
    video = createCaputure(VIDEO);
    video.hide();
    canvas = createCanvas(600, 500);
    canvas.center();
}

function draw(){
    image(video, 0, 0, 600, 500);
}