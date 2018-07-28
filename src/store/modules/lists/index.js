export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const CHANGE_INDEX = 'CHANGE_INDEX';

export const lists = {
    state: {
        itemIndex: 0,
        lists: []
    },
    actions: {
        add_item({commit}, info){
            commit('ADD_ITEM', info);
        },
        updateList({commit},info){
            console.log('from store >>>  ', info)
            commit('CHANGE_INDEX', info);
        }
    },
    mutations: {
        [ADD_ITEM](state, info){
            let Index = state.itemIndex;

            state.lists.push(Object.assign({}, {index: Index}, info));
            state.itemIndex = Index + 1;
        },
        [CHANGE_INDEX](state, info){
            state.lists = [];
            for(let i = 0; i < info.length; i++){
                info[i].index = i; 
            }
            state.lists = info;
        }
    },
    getters: {
        listMoves(state){
            return state.lists; 
        }
    }
}