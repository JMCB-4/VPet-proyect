import kaplay from "kaplay";
import "kaplay/global"; // uncomment if you want to use without the k. prefix

kaplay({
    background: "#cdecfa",
    width: 640,
    height: 640,
});

loadRoot("./"); // a good idea for Itch.io publishing later

// load the sprite for the VPET and buttons
loadSprite("vpet", "sprites/vpet.png");
loadSprite("bttn1", "sprites/button1.png");
loadSprite("bttn2", "sprites/button2.png");

// create the const for the VPET
const vpet = add([
    sprite("vpet"),
    anchor("center"),
    scale(3),
    animate(), 
   
]);

// create a button to give water
const button1 = add([
    sprite("bttn1"),
    pos(150 ,height() - 150),
    scale(2),
    area(),
    anchor("center"),
    
]);

// create a button to check thirst
const button2 = add([
    sprite("bttn2"),
    pos(520,height() - 150),
    scale(2),
    area(),
    anchor("center"),
    
]);

// animation for the VPET
vpet.animate("pos", [vec2(300, 280), vec2(300, 260)], {
    duration: 2,
    direction: "ping-pong",
});

// add a selection effect to the button on hover
button1.onHoverUpdate(() => {
    button1.scale = vec2(2.2);
});
// end the effect when the hover ends
button1.onHoverEnd(() => {
    button1.scale = vec2(2)
});
// add a selection effect to the button on hover
button2.onHoverUpdate(() => {
    button2.scale = vec2(2.2);
});
// end the effect when the hover ends
button2.onHoverEnd(() => {
    button2.scale = vec2(2)
});
