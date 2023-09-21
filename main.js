var song1 = "";
var song2 = "";
var leftWristX = 0;
var rightWristX = 0;
var leftWristY = 0;
var rightWristY = 0;


function preload() {
    song1 = loadsound("music.mp3");
    song2 = loadsound("music2.mp3");
} 

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("el modelo se ha cargado");
}

function draw() {
    image(video, 0, 0, 600, 500);
    Fill('#FF0000');
    stroke('#FF0000');
}

function gotPoses() {

}