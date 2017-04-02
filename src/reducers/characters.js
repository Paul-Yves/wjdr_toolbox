import _ from "lodash";

const character = (state = {}, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default(state = [], action) => {
    switch (action.type) {
        case 'addCharacter':
            let idMax = _.maxBy(state, char=>char.id);
            if(idMax && idMax.id){
                idMax = idMax.id;
            }
            if(!idMax){
                idMax = 0;
            }
            action.item.id = idMax + 1;
            return [...state, character(action.item, action)];
        case 'delCharacter':
            let id = action.id;
            return state.filter(char=>char.id!==id);
        default:
            return state;
    }
};