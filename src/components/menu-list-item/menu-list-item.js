import React from 'react';
import './menu-list-item.scss';
import { Link } from 'react-router-dom'

const MenuListItem = ({menuItem}) => {
    const {title, price, url, category} = menuItem; // деструктурируем каждый отдельный объект, который приходит к нам из базы данных, которая пришла в MenuList
    let icon = ''
    if(category === 'pizza'){
        icon = '/images/pizza.png'
    } else if (category === 'salads'){
        icon = '/images/salads.png'
    } else if (category === 'meat') {
        icon = '/images/meat.png'
    }

    return (

            <li className="menu__item">
            <Link to = {`/${menuItem.id}`}>
            <img src={process.env.PUBLIC_URL + icon} />
            </Link>
            
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url} alt={title}></img>
                <div className="menu__category">Category: <span>{category}</span></div>
                <div className="menu__price">Price: <span>{price}$</span></div>
                <button className="menu__btn">Add to cart</button>
            </li>

    )
}



export default MenuListItem;