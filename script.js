/* =========================
   STORY PROGRESS
========================= */

const progressBar = document.getElementById("progressBar");

const progress = {

    welcome:10,

    promise:20,

    stats:30,

    qualities:45,

    memories:60,

    letter:75,

    secret:85,

    proposal:95,

    moment:98,

    celebration:100

};
function showPage(pageId){

    // Hide every section
    document.querySelectorAll("section").forEach(function(page){
        page.style.display = "none";
        page.classList.remove("fade-in");
    });

    // Show selected page
    const nextPage = document.getElementById(pageId);

    nextPage.style.display = "flex"; 
    if(pageId === "proposal"){

    noIndex = 0;

    noButton.innerHTML = noTexts[0];

    noButton.style.left = "";

    noButton.style.top = "";

    noButton.style.right = "25px";

    noButton.style.bottom = "20px";

    noButton.style.display = "block";

    noButton.classList.remove("break");

}

    // Trigger animation
    nextPage.classList.add("fade-in");

    // Update progress bar
    if(progress[pageId]){
        progressBar.style.width = progress[pageId] + "%";
    }

    // Start typing effect on the letter page
    if(pageId === "letter"){
        typeLetter();
    }
    if(pageId === "stats"){
    startAnalyzer();
}

}

// Floating Hearts

const heartContainer = document.getElementById("heart-container");

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const hearts = ["❤️","💖","💕","💗"];

    heart.innerHTML =
        hearts[Math.floor(Math.random()*hearts.length)];

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize =
        (18 + Math.random()*20) + "px";

    heart.style.animationDuration =
        (4 + Math.random()*3) + "s";

    heartContainer.appendChild(heart);

    setTimeout(function(){

        heart.remove();

    },7000);

}

setInterval(createHeart,500);
/* =========================
   PROPOSAL
========================= */

const yesButton = document.getElementById("yesButton");

const noButton = document.getElementById("noButton");

const noTexts = [

    "No 😒",

    "Really? 🥺",

    "Think Again 😭",

    "Please ❤️",

    "You're Breaking My Heart 💔",

    "Catch Me 😜",

    "Almost Got Me 😂",

    "Last Chance 👀",

    "I Give Up 😔"

];

let noIndex = 0;



yesButton.addEventListener("click",function(){ 

    showPage("moment");

    playMoment();

});


function moveNoButton(){

    // Break after the last message
    if(noIndex >= noTexts.length - 1){

        breakNoButton();

        return;

    }

    const area = document.querySelector(".proposal-buttons");

    const areaWidth = area.clientWidth;
    const areaHeight = area.clientHeight;

    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    // Random position inside the area
    const randomX = Math.random() * (areaWidth - buttonWidth);
    const randomY = Math.random() * (areaHeight - buttonHeight);

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    noIndex++;

    noButton.innerHTML = noTexts[noIndex];

}
noButton.addEventListener("click", function(e){

    e.preventDefault();

    moveNoButton();

});

/* =========================
   HEART EXPLOSION
========================= */

function heartExplosion(){

    for(let i=0;i<80;i++){

        createHeart();

    }

}
/* =========================
   PHOTO GALLERY
========================= */

const photos = [

    {
        image:"assets/maleka 01.jpg",
        caption:"The beginning of beautiful memories ❤️"
    },

    {
        image:"assets/maleka 05.jpg",
        caption:"The pic sam want more 👀"
    },

    {
        image:"assets/maleka 03.jpg",
        caption:"Some moments deserve to last forever ✨"
    },

    {
        image:"assets/maleka 02.jpg",
        caption:"The pic sam love most 💖"
    },

    {
        image:"assets/maleka 04.jpg",
        caption:"The best chapters are still ahead 📖"
    }

];

let currentPhoto = 0;

const galleryImage = document.getElementById("galleryImage");
const galleryCaption = document.getElementById("galleryCaption");

document.getElementById("nextPhoto").onclick = function(){

    currentPhoto++;

    if(currentPhoto >= photos.length){

        currentPhoto = 0;

    }

    updateGallery();

}

document.getElementById("prevPhoto").onclick = function(){

    currentPhoto--;

    if(currentPhoto < 0){

        currentPhoto = photos.length-1;

    }

    updateGallery();

}

function updateGallery(){

    galleryImage.src = photos[currentPhoto].image;

    galleryCaption.innerHTML = photos[currentPhoto].caption;

}
const bgMusic = document.getElementById("bgMusic");

function startMusic(){

    bgMusic.volume = 1;

    bgMusic.play();

}

function startExperience() {
    startMusic();
    showPage("promise");
}
/* =========================
   TYPEWRITER EFFECT
========================= */

const letter = `Thank you...

for existing.

Thank you
for every smile
you've unknowingly
given me.

Sometimes,
people become special
without even trying.

You're one of them.

❤️

— Sam`;

let letterIndex = 0;

function typeLetter(){

    const target = document.getElementById("typingText");

    if(!target) return;

    target.innerHTML = "";

    letterIndex = 0;

    const timer = setInterval(function(){

        target.innerHTML += letter.charAt(letterIndex);

        letterIndex++;

        if(letterIndex >= letter.length){

            clearInterval(timer);

        }

    },40);

}
/* =========================
   LOADER
========================= */

window.addEventListener("load",function(){

    const loader = document.getElementById("loader");

    const progress =
    document.getElementById("loading-progress");
    const loadingMessage =
document.getElementById("loadingMessage");

const messages = [

    "🌻 Dear Sunflower...",

    "❤️ Someone spent hours making this...",

    "😊 Hoping this makes you smile...",

    "🥺 Almost ready...",

    "✨ Just one more moment...",

    "💖 From Sam, with all my heart..."

];

    let value = 0;

    const timer = setInterval(function(){

        value++;

        progress.style.width = value + "%";
        if(value === 20){
    loadingMessage.innerHTML = messages[1];
}

if(value === 40){
    loadingMessage.innerHTML = messages[2];
}

if(value === 60){
    loadingMessage.innerHTML = messages[3];
}

if(value === 80){
    loadingMessage.innerHTML = messages[4];
}

if(value === 100){
    loadingMessage.innerHTML = messages[5];
}

        if(value>=100){

            clearInterval(timer);

            loader.style.opacity = "0";

            setTimeout(function(){

                loader.style.display="none";

            },800);

        }

    },120);

});
/* =========================
   CONFETTI
========================= */

const confettiContainer =
document.getElementById("confetti-container");

const confettiColors = [

"#ff4b7d",
"#ffd166",
"#7bdff2",
"#b8f2e6",
"#cdb4db",
"#ffffff"

];

function createConfetti(){

    const piece =
    document.createElement("div");

    piece.classList.add("confetti");

    piece.style.left =
    Math.random()*100+"vw";

    piece.style.background =
    confettiColors[
        Math.floor(
            Math.random()*confettiColors.length
        )
    ];

    piece.style.animationDuration =
    (3+Math.random()*3)+"s";

    piece.style.transform =
    "rotate("+Math.random()*360+"deg)";

    confettiContainer.appendChild(piece);

    setTimeout(function(){

        piece.remove();

    },6000);

}
function confettiExplosion(){

    for(let i=0;i<180;i++){

        createConfetti();

    }

}
/* =========================
   CINEMATIC MOMENT
========================= */

function playMoment(){
    fadeMusicDown();

    const title = document.getElementById("momentTitle");
    const text = document.getElementById("momentText");

    title.innerHTML = "";
    text.innerHTML = "";

    // 1 second
    setTimeout(function(){

        title.innerHTML = "Dear Sunflower...";

    },1000);

    // 2 seconds
    setTimeout(function(){

        text.innerHTML = "Some moments...";

    },2000);

    // 3 seconds
    setTimeout(function(){

        text.innerHTML += "<br><br>deserve...";

    },3000);

    // 4 seconds
    setTimeout(function(){

        text.innerHTML += "<br><br>to be remembered forever.";

    },4000);

    // 5 seconds
    setTimeout(function(){

        showPage("celebration");

heartExplosion();

confettiExplosion();

fadeMusicUp();

    },5000);

}
/* =========================
   MUSIC FADE
========================= */

function fadeMusicDown(){

    let volume = bgMusic.volume;

    const timer = setInterval(function(){

        volume -= 0.05;

        if(volume <= 0.2){

            volume = 0.2;

            clearInterval(timer);

        }

        bgMusic.volume = volume;

    },200);

}



function fadeMusicUp(){

    let volume = bgMusic.volume;

    const timer = setInterval(function(){

        volume += 0.05;

        if(volume >= 1){

            volume = 1;

            clearInterval(timer);

        }

        bgMusic.volume = volume;

    },200);

}
/* =========================
   MALEKA AI ANALYZER
========================= */

function startAnalyzer(){

    const title = document.getElementById("scanTitle");
    const progress = document.getElementById("scanProgress");
    const result = document.getElementById("scanResult");
    const button = document.getElementById("scanContinue");

    button.style.display = "none";

    progress.style.width = "0%";

    let percent = 0;

    let stage = 0;

    title.innerHTML = "Initializing AI...";
    result.innerHTML = "Loading love...";

    const scanner = setInterval(function(){

        percent++;

        progress.style.width = percent + "%";

        runStages();

        if(percent >= 100){

            clearInterval(scanner);

        }

    },300);



    function runStages(){

        switch(stage){

            case 0:

                if(percent>=8){

                    stage++;

                    title.innerHTML="Scanning Smile 😊";

                    result.innerHTML="Looking for the cutest smile...";

                }

            break;



            case 1:

                if(percent>=18){

                    stage++;

                    result.innerHTML+=`

                    <br><br>

                    ✅ Beautiful Smile Found

                    `;

                }

            break;



            case 2:

                if(percent>=35){

                    stage++;

                    title.innerHTML="Scanning Heart ❤️";

                    result.innerHTML+=`

                    <br><br>

                    Reading heart signals...

                    `;

                }

            break;
            case 3:

    if(percent>=50){

        stage++;

        title.innerHTML="Searching Best Match ❤️";

        result.innerHTML=`

        🔍 Searching database...

        <br><br>

        Please wait...

        `;

    }

break;


case 4:

    if(percent>=61){

        stage++;

        result.innerHTML=`

        🔍 Searching database...

        <br><br>

        Checking...

        <br><br>

        ❌ Cousin from Italy

        `;

    }

break;


case 5:

    if(percent>=72){

        stage++;

        result.innerHTML=`

        🔍 Searching database...

        <br><br>

        ❌ Cousin from Italy

        <br><br>

        Checking...

        <br><br>

        ❌ Cadet from Bianibazar

        `;

    }

break;
case 6:

    if(percent>=82){

        stage++;

        title.innerHTML="⚠ AI ERROR";

        result.innerHTML=`

        ❌ ERROR...

        <br><br>

        You are too pretty

        <br>

        to find a compatible partner.

        <br><br>

        🤖 Restarting AI...

        `;

        if(navigator.vibrate){
            navigator.vibrate(150);
        }

    }

break;


case 7:

    if(percent>=90){

        stage++;

        title.innerHTML="Installing Love Algorithm ❤️";

        result.innerHTML=`

        ██████████

        <br><br>

        Love Algorithm Installed

        <br><br>

        ❤️

        `;

    }

break;


case 8:

    if(percent>=100){

        stage++;

        title.innerHTML="❤️ TRUE MATCH FOUND ❤️";

        result.innerHTML=`

        <h2 style="color:#FFD54F;">
        MALEKA
        </h2>

        <h3> Status:
        Most rare one ❤️</h3>

        <br>

        Best Match:

        <h3 style="color:#ff6b81;">
        ❤️ CUO(D-Company)="SAM" ❤️
        </h4>

        <br>

        

        <h2 style="color:#7CFC00;">
        Compatibility: 101%
        </h2>

        `;

        if(navigator.vibrate){
            navigator.vibrate([150,100,150]);
        }

        button.style.display="inline-block";

    }

break;
        }

    }

}
/* =========================
   BREAK NO BUTTON
========================= */

function breakNoButton(){

    noButton.classList.add("break");

    noButton.disabled = true;

    setTimeout(function(){

        noButton.style.display = "none";

        const msg = document.createElement("p");

        msg.innerHTML = `
        😔<br><br>
        Looks like...
        <br>
        YES was always
        <br>
        the right answer ❤️
        `;

        msg.style.color = "white";
        msg.style.marginTop = "20px";
        msg.style.fontWeight = "bold";
        msg.style.fontSize = "18px";

        document
        .querySelector("#proposal .card")
        .appendChild(msg);

    },800);

}
