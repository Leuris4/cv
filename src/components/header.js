import foto from './res/img/foto-header.png';
import React from "react";
import "./res/css/header.css"

class Header extends React.Component {
    render() {
        return <article id='header' className='header'>
                    <div class="pst">
                        <h6>Hola</h6>
                        <h3>Mi nombre es Leuris</h3>
                        <h5>Soy un programador web junior.</h5>
                    </div>
                    <div id="foto">
                        <img src={foto} alt="yo"/>
                    </div>
                </article>
    }
}

export default Header;