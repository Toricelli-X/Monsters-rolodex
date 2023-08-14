import { Component} from "react";

class CardContainer extends Component{

    render(){
     
        const {name,email,id} = this.props.monsters
        return (
            <div className="card-container" key={id}>

            <img src={`https://robohash.org/${id}`} alt={`monster ${name}`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
        )


    }
}


export default CardContainer