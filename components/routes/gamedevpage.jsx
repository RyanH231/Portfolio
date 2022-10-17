import { gameData } from "../data";

import Card from "../card";

export default function GameDev()
{
    return(
        <div>
            {gameData.map((project)=>(
                <Card id={project.id} img={project.img} title={project.title} description= {project.description}  />
             ))}      
        </div>
    )
}