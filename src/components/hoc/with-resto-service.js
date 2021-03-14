import React from 'react';
import RestoServiceContext from '../resto-service-context';

const WithRestoService = () => (Wrapped) => { // создаем комопнент высшего порядка
    return (props) => { // передаем наш сервис вниз по иерархии в компонент Wrapped со всеми props
        // из контекста будем брать уже созданный сервис
        return (
            <RestoServiceContext.Consumer>
                {
                    (RestoService) => {
                        return <Wrapped {...props} RestoService={RestoService}/>
                    }
                }
            </RestoServiceContext.Consumer>
        )
    }
};

export default WithRestoService;