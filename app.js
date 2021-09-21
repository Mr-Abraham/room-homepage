const menu = document.querySelector('.menu');
const hero = document.getElementById('hero');
const navigation = document.querySelector('.navigation')
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const heading = document.getElementById('hero-heading');
const para = document.getElementById('info-para');


let object = [
    {
        id:0,
        img: "./images/desktop-image-hero-2.jpg",
        head: "We are available all across the globe",
        text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        id: 1,
        img: "./images/desktop-image-hero-3.jpg",
        head: "Manufactured with the best materials",
        text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    },

    {
        id:2,
        img: "./images/desktop-image-hero-1.jpg",
        text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        head: "Discover innovative ways to decorate"
    }
];

let currentItem = 0;
console.log("shivam abraham");

next.addEventListener('click',function(){
    let item = object[currentItem];
    currentItem++;
    if(currentItem > object.length -1){
currentItem = 0;
    }
    hero.src = item.img;
    heading.textContent = item.head;
    para.textContent = item.text;
    console.log(`i am the image no ${currentItem}`)

})

prev.addEventListener('click',function(){
    let item = object[currentItem];
    currentItem--;
    if(currentItem < 0){
currentItem = 2;
    }
    hero.src = item.img;
    heading.textContent = item.head;
    para.textContent = item.text;
    console.log(`i am the image no ${currentItem}`)
})

menu.addEventListener('click',function(){
    navigation.classList.toggle("active-navigation");
    menu.classList.toggle("active-menu");
})
