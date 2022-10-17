import Resume from "../../files/Resume.pdf";

export default function Contact()
{
    return(
        <div>
            <embed src={Resume} id="#toolbar=0" type="application/pdf" width="100%" height="600px"/>
        </div>
    )
}