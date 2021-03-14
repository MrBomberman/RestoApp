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

export {
    menuLoaded,
    menuRequested
};

// набор экшенов 
// первый - когда мы делаем запрос к какому-то компоненту, серверной части - requested
// второй - loaded что-то загрузилось
// третий - ошибка