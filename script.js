
//product lists
const productsInfo = [
 {
     brand: 'Nike Pro',
     nameVersion: 'Hijab 2.0',
     cost: '$35',
     image: './packages/whiteHijab.png',
     description: "The Nike Pro Hijab 2.0 is constructed from soft, sweat-wicking mesh with tiny holes for optimal breathability. Designed to fully cover your head and neck, an interior strap helps prevent it from slipping as you move. \n \n Shown: Black/white \n Style: N0003533-010"
 },
 {
     brand: 'Nike',
     nameVersion: 'Bullet Proof Vest',
     cost: '$150',
     image: './packages/bulletproofvest.png',
     description: 'Body armor protection levels are rated by the National Institute of Justice (NIJ), with level III (3) and level IIIA (3A) ballistic armor panels, most often soft body armor, being some of the most popular for their versatility and level of protection. \n \n Shown: Black/white \n Style: N0003533-010'
 },
 {
     brand: 'Nike',
     nameVersion: 'Air Mag 2016',
     cost: '$1000',
     image: './packages/AirMag.png',
     description: 'The Nike MAG is a limited-edition shoe created by Nike Inc. It is a replica of a shoe featured in the film Back to the Future Part II. The Nike Mag was originally released for sale in 2011 and again in 2016. \n \n Shown: Black/white \n Style: N0003533-010'
 }
];


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slides");
  let brandEle = document.querySelector('.brand'),
      nameVersionEle = document.querySelector('.name'),
      costEle = document.querySelector('.cost'),
      desEle = document.querySelector('.description');


  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for ( let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  const currentSlide = slides[slideIndex-1]

  for(let product of productsInfo){
     if(product.nameVersion == currentSlide.alt){
        currentSlide.style.display = "block";
        brandEle.innerText = product.brand;
        nameVersionEle.innerText = product.nameVersion;
        costEle.innerText = product.cost;
        desEle.innerText = product.description;
     }
 }
}
