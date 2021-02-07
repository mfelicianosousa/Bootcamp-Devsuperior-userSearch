import React from 'react';
import './styles.scss';
import Button from '../../core/components/Button';
import { Link } from 'react-router-dom' ;

const Home = () => {

    return (
        <div className="home-container">
            <div className="home-content">
                 <h1 className="text-title">
                     Desafio do Capítulo 3, <br/> Bootcamp DevSuperior
                 </h1>
                 <p className="text-subtitle">
                    Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. <br/>
                    Favor observar as instruções passadas no capítulo sobre a elaboração <br/>  deste projeto. <br/>
                    Este design foi adaptado a partir de Ant Design System for Figma, <br/> de <span>Mateusz Wierzbicki: antforfigma@gmail.com </span> 
                    <br/>

                 </p>
                 <Link to="/UserSearch" >
                    <div className="btn-start">
                       <Button text="Começar" />
                    </div>
                 </Link>

            </div>
           
            

        </div>
    );
}

export default Home ;