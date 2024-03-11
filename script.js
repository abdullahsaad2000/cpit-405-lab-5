let imgContainer = document.getElementById("photoGalley");

let elementImg = document.createElement("img");
elementImg.src = "./images/img1.jpg";

elementImg.width = "600"
elementImg.height = "300"
imgContainer.appendChild(elementImg);


let elementDelButton = document.createElement("button");
elementDelButton.innerText = "Delete";
imgContainer.appendChild(elementDelButton);

elementDelButton.addEventListener("click" , function(){
  elementImg.remove();
  elementDelButton.remove();
});

let buttonZoomIn = document.createElement("button")
buttonZoomIn.innerText = " Zoom In ";
imgContainer.appendChild(buttonZoomIn);

let buttonZoomOut = document.createElement("button");
buttonZoomOut.innerText = " Zoom Out ";
imgContainer.appendChild(buttonZoomOut);

const zoomFactor = 1.2;

buttonZoomIn.addEventListener("click" , function(){
elementImg.width = elementImg.width * zoomFactor;
elementImg.height = elementImg.height * zoomFactor;

})
buttonZoomOut.addEventListener("click" , function(){
  elementImg.width = elementImg.width / zoomFactor;
  elementImg.height = elementImg.height / zoomFactor;

})
