import React from 'react';
import './cart-table.scss';
import { connect } from 'react-redux';
import { deleteFromCart } from '../../actions';

const CartTable = ({items , deleteFromCart}) => { // onDelete будет вызываться при нажатии крестика
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {items.map(item => {
                    const {title, price, url, id} = item;
                    return (
                        
                        <div  key={id} className="cart__item">
                        <img src={url} className="cart__item-img" alt={title}></img>
                        <div className="cart__item-title">{title}</div>
                        <div className="cart__item-price">{price}$</div>
                        <div onClick={() => deleteFromCart(id)} className="cart__close">&times;</div>
                        </div>
                    )
                })}
            </div>
        </>
    );
};

const mapStateToProps = ({items}) => {
    return {
        items // свойство получаем из редакс стора
    }
}

const mapDispatchToProps = { 
    deleteFromCart
}
// необязательно делать диспетч, можно просто сделать действие, которое будет выполняться
    // return { 
    //     onDelete: (id) => {
    //         console.log('delete')
    //     }
    // }


export default connect(mapStateToProps, mapDispatchToProps)(CartTable);