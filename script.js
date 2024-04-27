

function showImage(imageUrl) {
    const enlargedImage = document.getElementById('enlarged-image');
    enlargedImage.src = imageUrl.src;
    
    document.getElementById('enlarged-container').style.display = 'block';
    document.getElementsByClassName('closebtn').style.display = 'block';
    // enlargedImage.style.border ='5px solid black'
  console.log("yes");
  }

  
let slideIndex = 0;
let stopFlag = false;

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  document.getElementById('stop').style.display = "block";
    // Hide all slides
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    
  }

  // Increment slide index and display the next slide
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
console.log("yes");
  // Call showSlides function every 3 seconds
  setTimeout(showSlides, 2000);
}
