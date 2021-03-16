const initialState = {
    menu: [], // элементы с сервера
    loading: true,
    error: false,
    items: [] // это элементы, которын мы будем формировать динамически
}

// даже если стейт не будет передан, все равно у нас будет меню с пустым массивом
const reducer = (state = initialState, action) => { 
    console.log(state)
    // reducer полностью перезаписывает наш стейт
    switch (action.type) {
        case 'MENU_LOADED': // когда это действие выполнится мы в стейт запишем новое свойство
            return {
                ...state, // вернем предыдущий стейт
                menu: action.payload,
                loading: false
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
                menu: state.menu, // берем меню из предыдущего стейта
                loading: true
            }
        case 'MENU_ERROR':
            return {
                error: true
            }
        case 'ITEM_ADD_TO_CART':
            const id = action.payload; // необходимо найти элемент, который соответсвует id из существующего меню
            const item = state.menu.find(item => item.id === id) // будем сравнивать id в элементе с id, который пришел из payload
            const newItem = { // ля формирование объекта берем все те свойства, которые уже есть в найденном элементе
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id
            };

            return {
                ...state,
                items: [
                    ...state.items, // берем все элементы, которые уже были добавлены в корзину
                    newItem // и в конец добавлем новый элемент
                ]
            }

        case 'ITEM_REMOVE_FROM_CART':
            const idx = action.payload; // получаем нужный индекс
            const itemIndex = state.items.findIndex(item => item.id === idx) // команда позволит найти индекс какого-то конкретного элемента
            return {
                ...state,
                items: [ // вырезаем по индексу
                    ...state.items.slice(0, itemIndex), // все предыдущие элементы массива
                    ...state.items.slice(itemIndex+1) // оставшиесы элементы массива
                ]
            }
        default: 
            return state
    }
}

export default reducer;