import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as charActions from '../actions/charActions';
import './NameGenerator.css';
import CharacterDisplayer from "./CharacterDisplayer";

class NameGenerator extends Component {
  constructor(props){
    super(props);
    this.state = {
        isFemale: false,
        raceList: ["Humain", "Nain", "Halfling", "Elfe"],
        selectedRace: "Humain",
        advanced: false,
    }
  }
  doSelRace(event){
    this.setState({selectedRace: event.target.value});
  }
  changeSex(event){
    this.setState({isFemale: !this.state.isFemale});
  }
  setAdvanced(event){
    this.setState({advanced: event.target.checked});
  }
  generateChar(){
    const {isFemale, selectedRace, advanced} = this.state
    this.props.actions.addCharacter({isFemale, selectedRace, advanced});
  }
  render() {
    const self = this;
    const genderIconClass = self.state.isFemale?"fa fa-venus":"fa fa-mars";
    return (
      <div className="NameGen">
        <div className="generatorBox">
          <label>Avancé <input type="checkbox" checked={self.state.advanced} onChange={self.setAdvanced.bind(self)}/></label>
          <span className="genderSelector" onClick={self.changeSex.bind(self)}>
            <i className={genderIconClass} aria-hidden="true"/>
          </span>
          <select value={self.state.selectedRace} onChange={self.doSelRace.bind(self)} >
            {self.state.raceList.map(race=><option key={race} value={race}>{race}</option>)}
          </select>
          <button onClick={self.generateChar.bind(self)}>Generate name</button>
        </div>
        <div className="pnjBox">
          {self.props.charList.map(character=><CharacterDisplayer key={character.id} id={character.id}/>)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
    return {
        charList: state.charList
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(charActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NameGenerator);