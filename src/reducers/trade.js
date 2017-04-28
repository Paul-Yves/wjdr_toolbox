import _ from "lodash";



export default(state = {season: 1}, action) => {
    let newState = _.cloneDeep(state);
    switch (action.type) {
        case 'generateTrade':
            newState.resources = action.resources;
            return newState;
        case 'selectSeason':
            newState.season = action.season;
            return newState;

        default:
            return state;
    }
};