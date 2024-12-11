import kaplay from "kaplay";
import "kaplay/global"; // uncomment if you want to use without the k. prefix

kaplay({
    background: "#cdecfa", // changes the background to a solic color
    width: 640, // initialize the width
    height: 640, // initialize the height
});

loadRoot("./"); // a good idea for Itch.io publishing later

// loads the necessary sprites
loadSprite("vpet", "sprites/vpet.png"); 
loadSprite("bttn1", "sprites/button1.png");
loadSprite("bttn2", "sprites/button2.png");

// create the const for the VPET
const vpet = add([
    sprite("vpet"), // assigns a sprite
    anchor("center"), // set the anchor point to the center of the sprite
    scale(3), // scale the sprite to make it bigger
    animate(),  // allows animation on the object
   
]);

// create a button to give water
const button1 = add([
    sprite("bttn1"), // assigns a sprite
    pos(150 ,height() - 150), // set the possition
    scale(2), // scale the sprite to make it bigger
    area(), // create an area to allow things like hover or click
    anchor("center"), // set the anchor point to the center of the sprite
    
]);

// create a button to check thirst
const button2 = add([
    sprite("bttn2"), // assigns a sprite
    pos(520,height() - 150), // set the possition
    scale(2), // scale the sprite to make it bigger
    area(), // create an area to allow things like hover or click
    anchor("center"), // set the anchor point to the center of the sprite
    
]);

// animation for the VPET
vpet.animate("pos", [vec2(300, 280), vec2(300, 260)], { // animate the vpet giving it movement
    duration: 2, // duration of the animation
    direction: "ping-pong", // type of animation
});

// add a selection effect to the button on hover
button1.onHoverUpdate(() => { 
    button1.scale = vec2(2.2); // bigger button on hover
});
// end the effect when the hover ends
button1.onHoverEnd(() => {
    button1.scale = vec2(2) // reset set scale when hover ends
});
// add a selection effect to the button on hover
button2.onHoverUpdate(() => {
    button2.scale = vec2(2.2); // bigger button on hover
});
// end the effect when the hover ends
button2.onHoverEnd(() => {
    button2.scale = vec2(2) // reset set scale when hover ends
});
