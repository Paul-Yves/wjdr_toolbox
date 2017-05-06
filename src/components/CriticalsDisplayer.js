import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './CriticalsDisplayer.css';

import * as critActions from '../actions/critActions.js';
import { critSources } from '../data/critTables';

class CriticalsDisplayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            critValue: 1,
            critSource: critSources[0].source,
        }
    }

    changeCritSource(event){
        this.setState({critSource: event.target.value});
    }
    changeCritValue(event){
        this.setState({critValue: parseInt(event.target.value,10)});
    }

    render() {
        const self = this;
        const {critSource, critValue} = self.state;
        const tableCompo = self.props.criticals.table ? 
        <div>
        </div>
        : "";
        return <div className="critDisplayer">
            <div className="source formPart">
                <label>
                    Critical source: 
                    <select value={critSource} onChange={self.changeCritSource.bind(self)}>
                        {critSources.map((src)=><option value={src.source}>{src.label}</option>)}
                    </select>
                </label>
            </div>
            <div className="valueContainer formPart">
                <label>
                    Critical value: 
                    <select value={critValue} onChange={self.changeCritValue.bind(self)}>
                        {[1,2,3,4,5,6,7,8,9,10].map((val)=><option value={val}>{val}</option>)}
                    </select>
                </label>
            </div>
            <button onClick={()=>self.props.actions.rollCrit(critValue, critSource)}>Roll critical</button>
            <div className="tableContainer formPart">
                {tableCompo}
            </div>
        </div>;
    }
}

function mapStateToProps(state, props) {
    return {
        criticals: state.criticals
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(critActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CriticalsDisplayer);