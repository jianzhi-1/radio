import Webcam from 'webcam-easys

const webcamElement = document.getElementById('webcam');
const canvasElement = document.getElementById('canvas');
webcam.start()
  .then(result =>{
    console.log("webcam started");
  })
  .catch(err => {
    console.log(err);
});

let picture = webcam.snap();
document.querySelector('#download-photo').href = picture;

$('#cameraFlip').click(function() {
    webcam.flip();
    webcam.start();
  });

  


/*var video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (error) {
      console.log("Something went wrong!");
      console.log(error)
    });
}*/