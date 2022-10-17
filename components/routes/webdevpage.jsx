import {webData} from "../data";
import Card from "../card";

import "../../stylesheets/cards.css";

export default function WebDev()
{
    return(
        <div>
            {webData.map((project) =>(
                
                <Card key={project.id} img ={project.img} title={project.title} description={project.description}/>
            ))}
        </div>
    )
}