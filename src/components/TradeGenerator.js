import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as tradeActions from '../actions/tradeActions';
import TownTradeInfo from './TownTradeInfo';

import './trade.css';

class TradeGenerator extends Component{
    constructor(props){
        super(props);
        this.state = {seasons:["Printemps", "Eté", "Automne", "Hiver"], isTrader: false, cv:28, ca:0};
    }

    selSeason(event){
        this.props.actions.selectSeason(event.target.value);
    }
    selTrader(event){
        this.setState({isTrader: event.target.checked});
    }
    genTradeInfo(){
        const {isTrader, ca, cv} = this.state;
        this.props.actions.generateTradeTown({season: this.props.trade.season, isTrader, ca, cv});
    }

    render(){
        const self = this;
        const townInfo = self.props.trade.resources ? <TownTradeInfo resources={self.props.trade.resources} /> : null;
        return <div className="TradeGen">
            <div className="townForm">
                <select value={self.props.trade.season} onChange={self.selSeason.bind(self)} >
                    {self.state.seasons.map((season, idx)=><option key={season} value={idx}>{season}</option>)}
                </select>
                <label>Ville marchande<input type="checkbox" checked={self.state.isTrader} onChange={self.selTrader.bind(self)}/></label>
                <label>CV <input type="number" value={self.state.cv} onChange={(e)=>self.setState({cv: e.target.value})}/></label>
                <label>CA <input type="number" value={self.state.ca} onChange={(e)=>self.setState({ca: e.target.value})}/></label>
                <button onClick={self.genTradeInfo.bind(self)}>Generate trade information</button>
            </div>
            {townInfo}
        </div>;
    }

}

function mapStateToProps(state, props) {
    return {
        trade: state.trade
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(tradeActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TradeGenerator);
