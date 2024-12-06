import kaplay from "kaplay";
import "kaplay/global"; // uncomment if you want to use without the k. prefix

kaplay({
    background: "#cdecfa",
    width: 640,
    height: 640,
});

loadRoot("./"); // A good idea for Itch.io publishing later

// loadSprite for the sprite of the vpet
loadSprite("vpet", "sprites/vpet.png");
loadSprite("bttn1", "sprites/button1.png");
loadSprite("bttn2", "sprites/button2.png");

// Creaction of the const for the vpet
const vpet = add([
    sprite("vpet"),
    pos(width()/2 - 40, height()/2 - 40),
    anchor("center"),
    scale(3), 
]);
// Creation of the button for water
const button1 = add([
    sprite("bttn1"),
    pos(60 ,height() - 200),
    scale(2),
    area(),
]);
// Creation of the button to check on thirst
const button2 = add([
    sprite("bttn2"),
    pos(420,height() - 200),
    scale(2),
    area(),
]);