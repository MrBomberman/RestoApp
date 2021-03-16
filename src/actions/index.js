const menuLoaded = (newMenu) => { // приходят новые данные, мы их помещаем в значение payload, которое в редюсере установит новый стейт
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
};

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED'

    }
}

const menuError = () => {
    return {
        type: 'MENU_ERROR'
    }
}

const addedToCart = (id) => {
    return {
        type: 'ITEM_ADD_TO_CART',
        payload: id // индификатор элемента, на который будем кликать
    }
}

const deleteFromCart = (id) => {
    return {
        type: 'ITEM_REMOVE_FROM_CART',
        payload: id // передает в reducer элемент, который мы хотим удалить
    }
}

export {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCart,
    deleteFromCart
};

// набор экшенов 
// первый - когда мы делаем запрос к какому-то компоненту, серверной части - requested
// второй - loaded что-то загрузилось
// третий - ошибка