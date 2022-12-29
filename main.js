function setup(){
     video= createCapture(VIDEO);
     video.size(550,550);
     
     canvas= createCanvas(550, 550);
     canvas.position(960,100);

     poseNet=ml5.poseNet(video, modelLoaded);
     poseNet.on('pose', gotPoses);
    }
function draw(){
    background('#ffff00');
}
function modelLoaded(){
   console.log("PoseNet is Initialised");
}
function gotPoses(results){
 if(results.length > 0){
    console.log(results);
 }

}