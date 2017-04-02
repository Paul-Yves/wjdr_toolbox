import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as charActions from '../actions/charActions';
import _ from "lodash";
import './CharacterDisplayer.css';

class CharacterDisplayer extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }
  delete(){
      this.props.actions.delCharacter(this.props.character.id);
  }

  render(){
    const self = this;
    const {character} = self.props;
    const sexClass = character.isFemale ? "fa-venus" : "fa-mars";
    return <div key={character.id} className="character">{character.name+" "+character.lastName} 
        <i className={"fa isFemale "+sexClass} aria-hidden="true"></i>
        <i className="fa fa-times delChar" aria-hidden="true" onClick={self.delete.bind(self)}></i>
    </div>
  }
}

function mapStateToProps(state, props) {
    return {
        character: _.find(state.charList, char=>{
            return char.id===props.id;
        })
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(charActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CharacterDisplayer);