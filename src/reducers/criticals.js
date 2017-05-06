export default(state = {localisation: null, table: null}, payload) => {
    switch (payload.type) {
        case 'rollCrit':
            return {localisation: payload.localisation, table: payload.table};
        default:
            return state;
    }
};