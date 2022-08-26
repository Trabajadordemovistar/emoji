Webcam.set({
    width:300,
    height:350,
    image_format : 'png',
    png_quality:90
});



camera = document.getElementById("camera");


Webcam.attach('#camera');


function take_snapshot()
 {
     Webcam.snap(function(data_uri) 
     {
  document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'; 
    });
 }

console.log('ml5 version:',ml5.version);



classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/CIpC8aKxl/model.json',modelLoaded);



function modelLoaded (){
console.log('Model Loaded!');
}

function check()
{
img = document.getElementById('captured_image');
classifier.classify(img, gotResult);
}






function speak(){
var synth = window.speechSynthesis;
speak_data_1 = "La  primera prediccion es" +prediccion_1;
speak_data_2 = "La  segunda prediccion es" +prediccion_2;
var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
synth.speak(utterThis);

}





function gotResult(error, results){
if (error){
console.error(error);
}else {
console.log(results);
document.getElementById("result_emotion_name").innerHTML = results[0].label;
document.getElementById("result_emotion_name2").innerHTML = results[1].label;
prediccion_1 = results[0].label;
prediccion_2 = results[1].label;
speak();
if(results[0].label == "saludo")
{
    document.getElementById("update_emoji").innerHTML = "&&#128077";
}
if(results[0].label == "paz")
{
    document.getElementById("update_emoji").innerHTML = "&#9996";
}
if(results[0].label == "roca")
{
    document.getElementById("update_emoji").innerHTML = "&#9994";
}



if(results[1].label == "saludo")
{
    document.getElementById("update_emoji2").innerHTML = "&&#128077";
}
if(results[1].label == "paz")
{
    document.getElementById("update_emoji2").innerHTML = "&#9996";
}
if(results[1].label == "roca")
{
    document.getElementById("update_emoji2").innerHTML = "&#9994";
}



































}
}

