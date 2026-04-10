
// /* Make image flash */

// var image = document.querySelector(".Sparkle_Group_1"); /* Store class name as variable*/
// var coords = document.querySelector(".Seth_Sparkle_Container");

// var right1 = Math.random() * (40 - 200) + 200;      // 200 to 40
// var top1 = Math.random() * (480 - (-40)) + (-40);   // -40 to 480  

// coords.style.top = top1 + "px";
// coords.style.right = right1 + "px";

// function toggleVisibility() {
//     // Randomize position
//     var top1 = Math.random() * (480 - (-40)) + (-40);   // -40 to 480
//     var right1 = Math.random() * (40 - 200) + 200;      // 200 to 40
//     coords.style.top = top1 + "px";
//     coords.style.right = right1 + "px";

//     // Toggle visibility
//     if (image.style.display === "none") {
//         image.style.display = "block";
//     } else {
//         image.style.display = "none";
//     }
// }


// var image2 = document.querySelector(".Sparkle_Group_2"); /* Store class name as variable*/
// var coords2 = document.querySelector(".Seth_Sparkle_Container2");

// var right2 = Math.random() * (40 - 200) + 200;      // 200 to 40
// var top2 = Math.random() * (480 - (-40)) + (-40);   // -40 to 480  

// coords2.style.top = top2 + "px";
// coords2.style.right = right2 + "px";

// function toggleVisibility2() {
//     // Randomize position
//     var top2 = Math.random() * (480 - (-40)) + (-40);   // -40 to 480
//     var right2 = Math.random() * (40 - 200) + 200;      // 200 to 40
//     coords2.style.top = top2 + "px";
//     coords2.style.right = right2 + "px";

//     // Toggle visibility
//     if (image2.style.display === "none") {
//         image2.style.display = "block";
//     } else {
//         image2.style.display = "none";
//     }
// }


// var Sparkle_1_Flash_Timer = setInterval(toggleVisibility, 1130)
// var Sparkle_2_Flash_Timer = setInterval(toggleVisibility2, 1130)



// sparkle.style.animation = "none";
// sparkle.style.animation = "Seth_Sparkle_Container 1.2s steps(9) forwards";



// var image = document.querySelector(".Sparkle_Group_1"); /* Store class name as variable*/
// var coords = document.querySelector(".Seth_Sparkle_Container");

// var right1 = Math.random() * (40 - 200) + 200;      // 200 to 40
// var top1 = Math.random() * (480 - (-40)) + (-40);   // -40 to 480  
// coords.style.top = top1 + "px";
// coords.style.right = right1 + "px";

// function toggleVisibility() {
//     // Randomize position
//     var top1 = Math.random() * (480 - (-40)) + (-40);   // -40 to 480
//     var right1 = Math.random() * (40 - 200) + 200;      // 200 to 40
//     coords.style.top = top1 + "px";
//     coords.style.right = right1 + "px";

// }


// var Sparkle_1_Flash_Timer = setInterval(toggleVisibility, 1130)




/*
  Grab the sprite image itself.
  This is the thing whose animation is restarted each cycle.
*/

function setupSparkle(config) {
  const coords = document.querySelector(config.containerSelector);

  function playSparkleOnce() {
    const sparkle = document.querySelector(config.sparkleSelector);

    const top1 =
      Math.random() * (config.topMax - config.topMin) + config.topMin;

    const right1 =
      Math.random() * (config.rightMax - config.rightMin) + config.rightMin;

    const timing =
      Math.random() * (config.maxDuration - config.minDuration) + config.minDuration;

    const nextDelay =
      Math.random() * (config.maxDelay - config.minDelay) + config.minDelay;

    coords.style.top = top1 + "px";
    coords.style.right = right1 + "px";

    sparkle.style.animation =
      config.animationName + " " + timing + "s steps(" + config.frames + ") forwards";

    const clone = sparkle.cloneNode(true);
    sparkle.replaceWith(clone);

    setTimeout(playSparkleOnce, nextDelay);
  }

  playSparkleOnce();
}

setupSparkle({
  sparkleSelector: ".Sparkle_Style_1",
  containerSelector: ".Seth_Sparkle_Container_1",
  animationName: "Seth_Sparkle_Anim_1",
  frames: 9,        // Frames of spritesheet
  topMin: -40,      // Y coordinate limits
  topMax: 220,
  rightMin: 40,     // X coordinate limits
  rightMax: 200,
  minDuration: 0.9, // Speed of sparkle animation (Max must be below min of Delay)
  maxDuration: 1.0,
  minDelay: 1100,   // Frequency of sparkle occurrence (Min must be above max of Duration)
  maxDelay: 1400
});
// Just add more of these and the corresponding div class in html and CSS styles to scale.

setupSparkle({
  sparkleSelector: ".Sparkle_Style_2",
  containerSelector: ".Seth_Sparkle_Container_2",
  animationName: "Seth_Sparkle_Anim_2",
  frames: 9,
  topMin: 220,   // Bigger = Lower
  topMax: 480,
  rightMin: 60,  // Bigger = Lefter
  rightMax: 240,
  minDuration: 0.9,
  maxDuration: 1.1,
  minDelay: 1200,
  maxDelay: 2200
});

setupSparkle({
  sparkleSelector: ".Sparkle_Style_B3", //B = Spark color, 4 = order created 
  containerSelector: ".Seth_Sparkle_Container_B3",
  animationName: "Seth_Sparkle_Anim_B3",
  frames: 10,
  topMin: -50, //  -50
  topMax: 265, // 480
  rightMin: 60, // 60
  rightMax: 200, // 200
  minDuration: 0.9,
  maxDuration: 1,
  minDelay: 1000,
  maxDelay: 2200
});

setupSparkle({
  sparkleSelector: ".Sparkle_Style_B4",
  containerSelector: ".Seth_Sparkle_Container_B4",
  animationName: "Seth_Sparkle_Anim_B4",
  frames: 10,
  topMin: 265, //  -50 total square dimensions
  topMax: 480, // 480
  rightMin: 60, // 60
  rightMax: 200, // 200
  minDuration: 0.9,
  maxDuration: 1.1,
  minDelay: 1150,
  maxDelay: 2200
});

setupSparkle({
  sparkleSelector: ".Sparkle_Style_B5",
  containerSelector: ".Seth_Sparkle_Container_B5",
  animationName: "Seth_Sparkle_Anim_B5",
  frames: 9,
  topMin: 80, //  80 Total square dimensions
  topMax: 270, //  270
  rightMin: 30, // 30
  rightMax: 130, // 230
  minDuration: 0.9,
  maxDuration: 1.3,
  minDelay: 1500,
  maxDelay: 2300
});

setupSparkle({
  sparkleSelector: ".Sparkle_Style_B6",
  containerSelector: ".Seth_Sparkle_Container_B6",
  animationName: "Seth_Sparkle_Anim_B6",
  frames: 10,
  topMin: 80, //
  topMax: 270, // 
  rightMin: 130, // 
  rightMax: 200, // 
  minDuration: 0.9,
  maxDuration: 1.3,
  minDelay: 1500,
  maxDelay: 2300
});


// API template for the quoterism API key here: apparently u need JS or python to fetch/ get (fetch returns list if many, get returns 1 item/ the first, and u need to work with returned JSON data somehow once fetched with js):  qtr_9KFhc3s623N7bHr64jRgvoGZNulYtGe7
    // var apiUrl = 'https://pokeapi.co/api/v2/pokemon/ditto/';
    // fetch(apiUrl).then(response => {
    //   return response.json();
    // }).then(data => {
    //   // Work with JSON data here
    //   console.log(data);
    // }).catch(err => {
    //   // Do something for an error here
    // });




const spritePlayer = document.getElementById("spritePlayer");
const spriteHitbox = document.querySelector(".sprite-hitbox");

const idleAnimation = {
  url: "Assets/G2_Seth_Spin_Pixel_Sheet.png",
  frames: 12,
  duration: 1.9
};

const clickAnimations = [
  { url: "Assets/G2_Seth_Wave_Sheet.png", frames: 22, duration: 1.8 },
//  { url: "Assets/G2_Seth_Loaded_Pixel_Sheet.png", frames: 40, duration: 4.4 },
  { url: "Assets/G2_Seth_Stank_Sheet.png", frames: 20, duration: 1.8},
  { url: "Assets/G2_Seth_Cmon_Sheet.png", frames: 16, duration: 1.6},
  { url: "Assets/G2_Seth_Dan_Sheet.png", frames: 23, duration: 2.3},
  { url: "Assets/G2_Seth_Item_Bird_Sheet.png", frames: 44, duration: 4.4}
];

let currentClickAnimation = 0;
let isPlayingAction = false;

function applySprite(animationData) {
  spritePlayer.style.backgroundImage = `url("${animationData.url}")`;
  spritePlayer.style.setProperty("--frames", animationData.frames);
  spritePlayer.style.setProperty("--duration", `${animationData.duration}s`);
}

function restartAnimation(className) {
  spritePlayer.classList.remove("idle", "action");
  void spritePlayer.offsetWidth;
  spritePlayer.classList.add(className);
}

function playIdle() {
  applySprite(idleAnimation);
  restartAnimation("idle");
  isPlayingAction = false;
}

function playAction() {
  if (isPlayingAction) return;

  isPlayingAction = true;

  const anim = clickAnimations[currentClickAnimation];
  applySprite(anim);
  restartAnimation("action");

  currentClickAnimation = (currentClickAnimation + 1) % clickAnimations.length;
}


spriteHitbox.addEventListener("click", () => {
  if (isPlayingAction) return;

  isPlayingAction = true;

  const animation = clickAnimations[currentClickAnimation];
  currentClickAnimation = (currentClickAnimation + 1) % clickAnimations.length;

  applySprite(animation);
  restartAnimation("action");

  setTimeout(() => {
    playIdle();
    isPlayingAction = false;
  }, animation.duration * 1000);
});

playIdle();