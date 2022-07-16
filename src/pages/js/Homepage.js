import React, { Component } from 'react'
import '../../App.css'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { BsBarChartSteps } from 'react-icons/bs'
import img from "../img/logo.png"
import { FiSearch } from 'react-icons/fi'
import { TiShoppingCart } from 'react-icons/ti'
export default class Homepage extends Component {
  render() {
    return(<div>
        <div className="navbar1">
          <div className="div12">
           <div className="nav1">О нас</div>
    <div className="nav2"><FaMapMarkerAlt/> Ташкент</div></div>
    <div className="nav3">
        <h3>+99899 000 00 00</h3>
        <p>Заказать звонок</p>
    </div>
</div>
<div className="navbar2">
<img src={img}  alt=" " />
 <div className="madi"><BsBarChartSteps/><span>Каталог</span></div>
<div className="m444"><input placeholder="Что желаете найти?"className="tentak"type="text"/>< FiSearch className = "fisearch"/></div> 
<div className="ggg"><TiShoppingCart/><sup>1</sup>Корзина</div></div>


</div>
    )
  }
}
