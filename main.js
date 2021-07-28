//nothing to see here. if u see H@cK$r$ will com$#
//p5.js is D#$l&t$D
noseX=0;
noseY=0;
function preload() {
   clown_nose= loadImage('https://i.postimg.cc/wjSqdDSK/clownnose.png');
}


function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if (results.length>0) {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x = "+noseX);
        console.log("nose y = "+noseY);
    }
}

function modelLoaded() {
    console.log(" your poseNet model is loaded");
}

function draw() {
    image(video,0,0,300,300);
    //fill(255,0,0);
   // stroke(255,0,0);
   // circle(noseX,noseY,25);
    image(clown_nose,noseX,noseY,35,35);
}

function takeApic() {
    save("Mypicture.png");
}
//H@h@h@H@H@H@HH@H@H@HH@H@H@HH@H@H@Ha