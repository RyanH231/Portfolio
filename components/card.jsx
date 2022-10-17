
export default function Card(props)
{
    return(
        <div key={props.id} className="card">
            <img src={props.img} alt="Display photo" className="card__image"></img>
            <h1 className="card__title">{props.title}</h1>
            <p className="card__description">{props.description}</p>
        </div>
    )
}