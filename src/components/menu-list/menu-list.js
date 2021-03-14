import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import WithRestoService from '../hoc'
import {menuLoaded, menuRequested} from '../../actions'
import Spinner from '../spinner'
import './menu-list.scss';

class MenuList extends Component {

    componentDidMount() {
        this.props.menuRequested();

        const {RestoService} = this.props
        RestoService.getMenuItems() // получим ответ от сервера - массив объектов(данные)
        .then(res => this.props.menuLoaded(res)) // этот же результат мы должны отправить в наш стор, чтобы он записался во внутрь reducer(наш стейт)
    }

    render() {
        const {menuItems, loading} = this.props // достаем массив из пропсов, которые получили из mapStateToProps
        // получаем новые данные уже из редакс стора

        if (loading) {
            return <Spinner/>
        }

        return (
            <ul className="menu__list">
                {
                menuItems.map(menuItem => {
                    return <MenuListItem key={menuItem.id} menuItem={menuItem}/>
                }) 
                }
            </ul>
        )
    }
};

const mapStateToProps = (state) => { // будем получать стейт из reducer
    return {
        menuItems: state.menu, // получаем массив данных
        loading: state.loading
    }
}


// const mapDispatchToProps = (dispatch) => {
//     return {
//         menuLoaded: (newMenu) => { // передаем данные от сервера в стейт
//             dispatch(menuLoaded(newMenu))
//         }
//     }
// }
const mapDispatchToProps =  {
    menuLoaded,
    menuRequested
}

// чтобы компонент получал сервис из контекса, мы им оборачиваем наш компонент
export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList)); // функция позволяет связать вместе компонент, который мы подставялем и редакс
// также следует сказать какие необходимые параметры необходимы от редакса комоненту MenuList
// mapStateToProps - аргумент, которому мы говорим, какие именно свойства из нашего стора должны использоваться в этом комопненте
// mapDispatchToProps - какие действия должны использоваться в этом компоненте