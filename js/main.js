"use strict"

//array obg//
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//main carousell-js//

let gameImageNumber= 0;
const gameImmage= document.querySelector(".game-immage");
const cards=document.querySelector(".cards")
//creato il primo template per l'immagine più grande.//
const templateGame= document.getElementById("template-game").content.cloneNode(true);
templateGame.querySelector("img").src = images[gameImageNumber].image;
templateGame.querySelector(".game-immage-text h3").innerHTML = images[gameImageNumber].title;
templateGame.querySelector(".game-immage-text p").innerHTML = images[gameImageNumber].text;
gameImmage.append(templateGame);
//ciclo sulle immagini più piccole.//
images.forEach((element, index) => {
    const templateCard=document.getElementById("template-card").content.cloneNode(true);
    if (index === gameImageNumber) {
       templateCard.querySelector(".card").classList.add("border");
    }
    templateCard.querySelector("img").src=element.image;
    cards.append(templateCard);
}
);
const card=document.querySelectorAll(".card");
const downCard=document.querySelector(".down-card");
downCard.addEventListener('click', function(){
    card[gameImageNumber].classList.remove("border");
    if (gameImageNumber < images.length - 1) {
        gameImageNumber++;
    }
    else{gameImageNumber=0;

    };
    card[gameImageNumber].classList.add("border");
    gameImmage.querySelector("img").src = images[gameImageNumber].image;
    gameImmage.querySelector(".game-immage-text h3").innerHTML = images[gameImageNumber].title;
    gameImmage.querySelector(".game-immage-text p").innerHTML = images[gameImageNumber].text   
});

const upCard=document.querySelector(".up-card");
upCard.addEventListener('click', function(){
    card[gameImageNumber].classList.remove("border");
    if (gameImageNumber > 0) {
        gameImageNumber++;
    }else{
        gameImageNumber = images.length - 1;
    }
    card[gameImageNumber].classList.add("border");
    gameImmage.querySelector("img").src = images[gameImageNumber].image;
    gameImmage.querySelector(".game-immage-text h3").innerHTML = images[gameImageNumber].title;
    gameImmage.querySelector(".game-immage-text p").innerHTML = images[gameImageNumber].text  
 })
    



