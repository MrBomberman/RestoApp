import React,{Component} from 'react';
import Spinner from '../spinner'
import {menuRequested, menuLoaded, menuError} from '../../actions'
import WithRestoService from '../hoc';
import {connect} from 'react-redux'
import Error from '../error'
import './itemPage.css'
// отдельная страница для каждого элемента, на которую мы будем переходить каждый раз, выбирая какой-либо элемент, благодаря id
class ItemPage extends Component {

    componentDidMount() {
        if (this.props.menuItems.length === 0) { // если у нас все еще нет ни одного элемента, соберется компонент
            this.props.menuRequested();

            const {RestoService} = this.props
            RestoService.getMenuItems() // получим ответ от сервера - массив объектов(данные)
            .then(res => this.props.menuLoaded(res)) // этот же результат мы должны отправить в наш стор, чтобы он записался во внутрь reducer(наш стейт)
            .catch(error => this.props.menuError(error))
        }
    }

    render() {
        if(this.props.loading) {
            return (
                <div className = "item_page">
                    <Spinner/>
                </div>
            )
        }
        if (this.props.error) {
            return <Error/>
        }
        const item = this.props.menuItems.find(el => +el.id === +this.props.match.params.id) // сравниваем id текущего элемента с id элемента страницы
        const{title, url, category, price} = item; // вытаскиваем из элемента нужные нам свойства

        return (
            <div className = "item_page">
                <div className="menu__item item_block">
                     <div className="menu__title">{title}</div>
                    <img className="menu__img" src={url} alt={title}></img>
                    <div className="menu__category">Category: <span>{category}</span></div>
                    <div className="menu__price">Price: <span>{price}$</span></div>
                    <button className="menu__btn">Add to cart</button>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => { // будем получать стейт из reducer
    return {
        menuItems: state.menu, // получаем массив данных
        loading: state.loading,
        error: state.error
    }
}


const mapDispatchToProps =  {
    menuLoaded: menuLoaded,
    menuRequested,
    menuError
}

// чтобы компонент получал сервис из контекса, мы им оборачиваем наш компонент
export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(ItemPage));