Webcam.set({
    width: 350,
    height: 290,
    image_format: 'png',
    png_quality: 100
});

var camera = document.getElementById("cameradiv");
Webcam.attach("#cameradiv");

function clickimage() {
    Webcam.snap(function(imagesource) {
        document.getElementById("clickedpic").innerHTML = '<img id="image" src="' + imagesource + '" >';

    });
}
console.log("ml5 version", ml5.version);
var mymlmodel = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/I6zJt70gc/model.json", modelLoaded);

function modelLoaded() {
    console.log("model has loaded");
}

function identifyobject() {
    var clickedimage = document.getElementById("image");
    mymlmodel.classify(clickedimage, getresults);
}

function getresults(error, results) {
    if (error) {
        console.error(error);

    } else {
        console.log(results);
        document.getElementById("objectnameresult").innerHTML = results[0].label;
        document.getElementById("objectaccuracyresult").innerHTML = results[0].confidence;

    }
}