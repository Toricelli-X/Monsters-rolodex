import { Component } from "react";
import CardContainer from "./card-container.component";
import './card-list.styles.css'

class CardList extends Component {



    render(){
        const {monsters} = this.props
        return(
            <div className="card-list">
                {monsters.map((monsters)=>{
                    
                   return (
                
                   <CardContainer monsters={monsters}/>
                
                   )
    })}
            </div>
        )
    }
}


export default CardList