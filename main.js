function setup() {
  canvas = createCanvas(300, 400);
  canvas.center();
  video = createCapture(Video);
  video.hide();
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/dfV2CePnA/model.json', modelLoaded);
}
function modelLoaded() {
  console.log("model Loaded");
}
function draw() {
  image(video, 0, 0, 300, 400);
  classifier.classify(video, gotResults);
}
function gotResults(error, results) {
  if(error) {
    console.error(error);
  }
  else {
    console.log(results);
    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
  }
}
