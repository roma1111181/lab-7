import React from 'react';
import { TV_DATA } from './goodsData';
import './goods.css';

const GoodsCard = () => { 
    return ( 
        <div className='container'> 
            {TV_DATA.map(tv => <GoodCard info={tv} key={tv.name} />)} 
        </div> 
        ); 
    };
    
const GoodCard = ({ info }) => {

    const { img, name, price } = info; 
    
    return ( 
        <div className='product'> 
            <img src={img} alt='Product' /> 
            <p>Назва: {name}</p> 
            <p>Ціна: {price} грн</p> 
        </div> 
        ); 
    }; 
    
export default GoodsCard;