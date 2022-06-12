import './styles.css'

export function Card({name, date}){
    return(
        <div className="card">
            <strong>{name}</strong>
            <small>{date}</small>
        </div>
    )
}