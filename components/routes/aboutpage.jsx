
import Profile from "../../images/Profile.jpg";
import Card from "../card";

export default function About()
{
    return(
        <div>
            <Card img={Profile} title="Full-Stack and Game Programmer" description="Hi! Thank you for visiting my page. I am 
            a programmer from Ottawa, Ontario, Canada and have been developing web and game apps for more than six years. I have
            experience in HTML, CSS, C#, C++ and many other languages, and I also have experience with engines such as Unity and
            Unreal and frameworks such as React and Next.js. I love to create and computer program, and studied game development
            for three years at a local Ottawa school, Algonquin College. I also have experience in sound design, can play eight
            instruments and I enjoy drawing and painting. I am currently in the job market, and look forward to hearing from
            you!"/>
        </div>
    )
}