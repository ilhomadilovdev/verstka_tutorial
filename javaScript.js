const user = [{
    text: "We are passionate about creating",
    img: "images/Card.png",
    img2: "images/Card2.png",

    img3: "images/Card3.png",
    img4: "images/Card8.png",
    img5: "images/Card9.png",
    img6: "images/Card10.png",
}];

let box = document.querySelector(".map1");
function drow() {
    box.innerHTML = "";
    for (let i = 0; i < user.length; i++) {
        box.innerHTML += `
        <div class="map1">
    <div class="row_1">
        <div class="text_arrea">${user[i].text}
           </div>
        <div class="img_arrea">
            <img class="img_arrea1" src=${user[i].img}    alt="">
             <img class="img_arrea2" src= ${user[i].img2}  alt="">
        </div>
     </div>
    
     <div class="row_2">
         <div class="img_arrea">
             <img class="img_arrea3a" src=${user[i].img3}  alt="">
             <img class="img_arrea3"  src=${user[i].img4}   alt="">
             <img class="img_arrea3"  src=${user[i].img5}   alt="">
             <img class="img_arrea3"  src=${user[i].img6}   alt="">
         </div>
     </div>
     </div>
        `

    }



}

drow();


// <div class="row_1">
// <div class="text_arrea">We are passionate about creating
//     visually stunning and functional
//     solutions that communicate effectively.</div>
// <div class="img_arrea">
//     <img class="img_arrea1" src="images/Card.png" alt="">
//     <img class="img_arrea2" src="images/Card2.png" alt="">
// </div>
// </div>

// <div class="row_2">
// <div class="img_arrea">
//     <img class="img_arrea3a" src="images/Card3.png" alt="">
//     <img class="img_arrea3" src="images/Card 8.png" alt="">
//     <img class="img_arrea3" src="images/Card 9.png" alt="">
//     <img class="img_arrea3" src="images/Card 10.png" alt="">
// </div>
// </div>






