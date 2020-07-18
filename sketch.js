/* eslint-disable no-undef, no-unused-vars */
let multiplyer = 6;
let wide = 5 * multiplyer;
let medium = 3.75 * multiplyer;
let narrow = 2.125 * multiplyer;

let shimGap = 0.375 * multiplyer;
let roWidth = 50 * multiplyer;
let roHeight = 80 * multiplyer;
let jmabWidth = 1.75 * multiplyer;
let woodFraming = 1.75 * multiplyer;
let doorFrameWidth = roWidth - shimGap * 2;
let doorFrameHeight = roHeight - shimGap;
let doorToFramGap = 0.125 * multiplyer;
let underCut = 1 * multiplyer;
let styleWidth = wide;
let bottomRail = 10 * multiplyer;
let headRail = 3.75 * multiplyer;
let canvas;
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  // canvas.style("z-index", "-1");
  // Put setup code here
}

function draw() {
  background(175);
  // stroke(0);
  // rectMode(CENTER);
  strokeWeight(1);
  stroke(0);
  roughFraming();
  //
  fill(255, 255, 255);
  rect(
    windowWidth / 2 - roWidth / 2 + woodFraming,
    windowHeight / 2 -
      windowHeight / 3 -
      windowHeight / windowHeight +
      woodFraming,
    roWidth,
    roHeight
  );
  fill(192, 194, 191);
  rect(
    windowWidth / 2 - roWidth / 2 + woodFraming + shimGap,
    windowHeight / 2 -
      windowHeight / 3 -
      windowHeight / windowHeight +
      woodFraming +
      shimGap,
    roWidth - shimGap * 2,
    roHeight - shimGap
  );
  fill(193, 218, 240);
  rect(
    windowWidth / 2 - roWidth / 2 + woodFraming + shimGap + jmabWidth,
    windowHeight / 2 -
      windowHeight / 3 -
      windowHeight / windowHeight +
      woodFraming +
      shimGap +
      jmabWidth,
    doorFrameWidth - jmabWidth * 2,
    doorFrameHeight - jmabWidth
  );
  fill(192, 194, 191);
  rect(
    windowWidth / 2 -
      roWidth / 2 +
      woodFraming +
      shimGap +
      jmabWidth +
      doorToFramGap,
    windowHeight / 2 -
      windowHeight / 3 -
      windowHeight / windowHeight +
      woodFraming +
      shimGap +
      jmabWidth +
      doorToFramGap,
    doorFrameWidth - jmabWidth * 2 - doorToFramGap * 2,
    doorFrameHeight - jmabWidth - doorToFramGap - underCut
  );
  fill(135, 169, 179);
  rect(
    windowWidth / 2 -
      roWidth / 2 +
      woodFraming +
      shimGap +
      jmabWidth +
      doorToFramGap +
      styleWidth,
    windowHeight / 2 -
      windowHeight / 3 -
      windowHeight / windowHeight +
      woodFraming +
      shimGap +
      jmabWidth +
      doorToFramGap +
      headRail,
    doorFrameWidth - jmabWidth * 2 - doorToFramGap * 2 - styleWidth * 2,
    doorFrameHeight - jmabWidth - doorToFramGap - underCut - bottomRail
  );
}

function roughFraming() {
  fill(0);
  // fill(237, 166, 86);
  rect(
    windowWidth / 2 - roWidth / 2,
    windowHeight / 2 - windowHeight / 3 - windowHeight / windowHeight,
    roWidth + woodFraming * 2,
    roHeight + woodFraming
  );
}

// rect(
//   windowWidth / 2,
//   windowHeight / 2 - windowHeight / 3 + 50 - shimGap * 2,
//   roWidth,
//   roHeight
// );
// //
// rect(
//   windowWidth / 2,
//   windowHeight / 2 - windowHeight / 3 + 50,
//   40 * 4,
//   86 * 4
// );

// This Redraws the Canvas when resized
