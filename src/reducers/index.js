const initialState = {
    menu: [],
    loading: true
}

// даже если стейт не будет передан, все равно у нас будет меню с пустым массивом
const reducer = (state = initialState, action) => { 
    console.log(state)
    // reducer полностью перезаписывает наш стейт
    switch (action.type) {
        case 'MENU_LOADED': // когда это действие выполнится мы в стейт запишем новое свойство
            return {
                menu: action.payload,
                loading: false
            };
        case 'MENU_REQUESTED':
            return {
                menu: state.menu, // берем меню из предыдущего стейта
                loading: true
            }
        default: 
            return state
    }
}

export default reducer;