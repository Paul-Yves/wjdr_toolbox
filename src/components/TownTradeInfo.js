import React, { Component } from 'react';
import _ from 'lodash';
import './trade.css';

/**
 * Component to display in cards the different resources available in a town
 * with information such as quantity, demand and price
 */
class TownTradeInfo extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    capitalize(str){
        if(str.length===0){
            return str;
        }
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    displayRessourceInfo(resource){
        const {name, price, availability, demand} = resource;
        const resKey = "res_"+name.replace(" ","");
        return <div className="resourceCard" key={resKey}>
            <div className="name">{this.capitalize(name)}</div>
            <div className="price"><span className="title">Prix:</span> {price} couronnes d'or</div>
            <div className="avail"><span className="title">Disponibilité:</span> {availability} .enc</div>
            <div className="demand"><span className="title">Demande:</span> {demand} %</div>
        </div>
    }

    render(){
        const self = this;
        const resources = _.cloneDeep(self.props.resources).sort((a,b)=>a.name.localeCompare(b.name));

        return <div className="townInfo">
            {resources.sort().map((res)=>self.displayRessourceInfo(res))}
        </div>
    }
}


export default TownTradeInfo;
