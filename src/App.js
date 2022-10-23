import {useState, useEffect} from 'react';
import logo from './logo.svg';
import R from './img/comon2.png';
import './App.css';

function App() {

  


  return (
    <div className='container-principal'>
      <h4>Salida</h4>
      <img src={R}/>
        
        <div className='div-wrapper'>
          <div className='div-wrapper-r-sol-1'>
           
          </div>
          <div className='div-wrapper-r-sol-2'>
            
          </div>
          <div className='div-wrapper-r-sol-3'>
            
          </div>
          <div className='div-wrapper-r-sol-4'>
            
          </div>
        </div>
      <div>
        <form>
          <select className='select-item' name='select'>
            <option className='select-item-0-0' value="0" disabled>Selecciona un color</option>
            <option className='select-item-0' value="0">Negro 0</option>
            <option className='select-item-1' value="1">Marron 1</option>
            <option className='select-item-2' value="2value1">Rojo 2</option>
            <option className='select-item-3' value="3">Naranja 3</option>
            <option className='select-item-4' value="4">Amarillo 4</option>
            <option className='select-item-5' value="5">Verde 5</option>
            <option className='select-item-6' value="6">Azul 6</option>
            <option className='select-item-7' value="7">Violeta 7</option>
            <option className='select-item-8' value="8">Gris 8</option>
            <option className='select-item-9' value="9">Blanco 9</option>
          </select>
        </form>
      </div>
    </div>
  );
}

export default App;
