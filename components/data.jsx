import ShaunGour from "../images/ShaunGour/shaungour.jpg";
import Portfolio from "../images/portfolio.jpg";
import Crown from "../images/CrownClothing/react.jpg";

import LaserWars from "../images/LaserWars/laserwars.jpg";
import Battleblades from "../images/BattleBlades/battleblades.jpg";
import Transcend from "../images/Transcend/transcend.jpg";




export const gameData =[
{
    id:1,
    link: "/laserwars",
    img:LaserWars,
    title:"Laser Wars",
    description: "A Roblox game I am currently working on, using the Roblox Studio engine. I have developed the menu and map selection systems for the game, and have created game modes as well, such as team deathmatch. The game is currently in progress." 
},
{
    id:2,
    link: "/battleblades",
    img:Battleblades,
    title:"Multiplayer Battle Blades",
    description:"Made by following the online Udemy Course 'Build a Multiplayer Augmented Reality Game In Unity' by Tevkik, this was created using the ARFoundation package in Unity for plane detection and the Photon Unity Networking platform for multiplayer connection. Players are able to place an arena somewhere in their environment, and other players are able to join the game through the Photon server and battle them (with an arena that is also placed in their environment)."
},
{
    id:3,
    link: "/transcend",
    img:Transcend,
    title:"Transcend",
    description:"A game built during my time at Algonquin College. This was a team project in a group of seven, in which I helped on both the programming side and the art development side. I created the 3D model for one of the characters in the game, as well as helped the programmers in creating the camera system and fine-tuning the AI (the 2D image seen here was done by artist Cameron Zylinski - a member of our Transcend team)."
}]



export const webData = [
{
    id:1,
    img:ShaunGour,
    title: "Shaun Gour Photography",
    description: "A website I designed and programmed for a popular Ottawa based photographer. Shaun's website was created using a combination of Javascript, JQuery and EJS, as well HTML and CSS for the presentation and layout. Bootstrap was also used to create the vertical navigation bar and the image carousels that are used to show Shaun's photos"
}, 
{
    id:2,
    img: Portfolio,
    title: "Portfolio",
    description:"A custom page I built to present my work, using the React JSX library,and several additional features (React-Router-Dom and React-Helmet). I created the images using the React Card and Prop system, and created the navigation bar using CSS and React components."
},
{
    id:3,
    img: Crown,
    title:"React",
    description:"Following a course by ZTM ('Complete React Developer in 2022'), built using React and several related technologies such as React-Router-Dom and Redux. Testing for this project was also done, using Enzyme and Jest."
}]