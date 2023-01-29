const images = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"];

function randomImage() {
  const appleImage = images[Math.floor(Math.random() * images.length)];
  document.body.style.backgroundImage = `url(img/${appleImage})`;
  console.log(appleImage);
}
randomImage();
setInterval(randomImage, 1000);
