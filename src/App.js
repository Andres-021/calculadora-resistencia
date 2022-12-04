import {useState, useEffect} from 'react';
import React from 'react';
import * as ReactDOM from 'react-dom';


import logo from './logo.svg';
import R from './img/comon2.png';
import './App.css';
import DivColor from './components/div_color';

function App() {

  const [band, setBand]= useState(15);
  const [band2, setBand2]= useState(15);
  const [multi, setMulti]= useState(15);
  const [tol, setTol] = useState(15);
  const [viewLetras, setViewLetras] = useState("");
  const [viewTol, setViewTol] = useState("");
  const [sol, setSol] = useState(0);

  const [inputValue, setInputValue] = useState("");
  const [clickDelete, setClickDelete] = useState(false);

  const listMultLetras = ["","","","K","K","K","M","M","M","G"];
  const listMult = [1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000,0.1,0.01];
  const listTol = ["","1%","2%","","",".5%",".25%",".1%",".05%","","5%","10%"];

  useEffect(() => {  
    const handleChanges = () => {
      const bandN = Number(band);
      const band2N = Number(band2);
      let concat = 0;
      let solT = 0;

      if(bandN === 0){
        concat = band2N;
      }
      if(bandN === 0 && band2N === 0){
        concat = 0;
      }
      if(bandN !== 0||(bandN !== 0 && band2N !== 0)){
        concat = ""+band+band2;
      }


      listMult.forEach((element, i) => {
        if(Number(multi) === i){
          solT = Number(concat)*element;
          setInputValue(solT);
        }
      });
    }

    handleChanges();

  },[band, band2, multi, tol]);
  

  const clear = () => {
    setBand(15);
    setBand2(15);
    setMulti(15);
    setTol(15);
    setSol(0);
    setInputValue("")
    setClickDelete(false);
    
  }

  const handleSubmit = () => {
    const bandN = Number(band);
    const band2N = Number(band2);
    let concat = 0;
    let solT = 0;

    if(bandN === 0){
      concat = band2N;
    }
    if(bandN === 0 && band2N === 0){
      concat = 0;
    }
    if(bandN !== 0||(bandN !== 0 && band2N !== 0)){
      concat = ""+band+band2;
    }


    listMult.forEach((element, i) => {
      if(Number(multi) === i){
        solT = Number(concat)*element;
        setSol(solT);
      }
    });

    listMultLetras.forEach((element, i) => {
      if(Number(multi) === i){
        // setViewLetras(element);
      }
    });

    listTol.forEach((element, i) => {
      if(Number(tol) === i){
        setViewTol(element);
      }
    });

  }

  return (
    <>
      <div className='container-principal'>
        <h2>Calculadora de resistencia</h2>
        {/* <p></p> */}
        
        <DivColor band={band} band2={band2} multi={multi} tol={tol}/>
        
        <div className='container-options'>
          
            <div className='container-selects'>

              <div>
                <h5>1° Banda de color</h5>
                <select 
                className={'select-item-'+band?'select-item select-item-'+band:''}
                onChange={(e) => {setBand(e.target.value)}} value={band}>
                  <option className='select-item-0-0' value={15} selected>Selecciona un color</option>
                  <option className='select-item-0' value={0}>Negro 0</option>
                  <option className='select-item-1' value={1}>Marron 1</option>
                  <option className='select-item-2' value={2}>Rojo 2</option>
                  <option className='select-item-3' value={3}>Naranja 3</option>
                  <option className='select-item-4' value={4}>Amarillo 4</option>
                  <option className='select-item-5' value={5}>Verde 5</option>
                  <option className='select-item-6' value={6}>Azul 6</option>
                  <option className='select-item-7' value={7}>Violeta 7</option>
                  <option className='select-item-8' value={8}>Gris 8</option>
                  <option className='select-item-9' value={9}>Blanco 9</option>
                </select>
              </div>

              <div>
                <h5>2° Banda de color</h5>
                <select 
                className={'select-item-'+band2?'select-item select-item-'+band2:''}
                onChange={(e) => setBand2(e.target.value)} value={band2}>
                  <option className='select-item-0-0' value={15} selected>Selecciona un color</option>
                  <option className='select-item-0' value={0}>Negro 0</option>
                  <option className='select-item-1' value={1}>Marron 1</option>
                  <option className='select-item-2' value={2}>Rojo 2</option>
                  <option className='select-item-3' value={3}>Naranja 3</option>
                  <option className='select-item-4' value={4}>Amarillo 4</option>
                  <option className='select-item-5' value={5}>Verde 5</option>
                  <option className='select-item-6' value={6}>Azul 6</option>
                  <option className='select-item-7' value={7}>Violeta 7</option>
                  <option className='select-item-8' value={8}>Gris 8</option>
                  <option className='select-item-9' value={9}>Blanco 9</option>
                </select>
              </div>

              {/* </div>

              <div> */}

              <div>
                <h5>Multiplicador</h5>
                <select 
                className={'select-item-'+multi?'select-item select-item-'+multi:''}
                onChange={(e) => setMulti(e.target.value)} value={multi}>
                  <option className='select-item-0-0' value={15} selected>Selecciona un color</option>
                  <option className='select-item-0' value={0}>Negro x1</option>
                  <option className='select-item-1' value={1}>Marron x10</option>
                  <option className='select-item-2' value={2}>Rojo x100</option>
                  <option className='select-item-3' value={3}>Naranja x1 K</option>
                  <option className='select-item-4' value={4}>Amarillo x10 k</option>
                  <option className='select-item-5' value={5}>Verde x100 K</option>
                  <option className='select-item-6' value={6}>Azul x1 M</option>
                  <option className='select-item-7' value={7}>Violeta x10 M</option>
                  <option className='select-item-8' value={8}>Gris x100 M</option>
                  <option className='select-item-9' value={9}>Blanco x1 G</option>
                  <option className='select-item-10' value={10}>Oro x0.1</option>
                  <option className='select-item-11' value={11}>Plata x0.01</option>
                </select>
              </div>

              <div>
                <h5>Tolerancia</h5>
                <select 
                className={'select-item-'+tol?'select-item select-item-'+tol:''}
                onChange={(e) => setTol(e.target.value)} value={tol}>
                  <option className='select-item-0-0' value={15} selected>Selecciona un color</option>
                  <option className='select-item-1' value={1}>Marron ± 1%</option>
                  <option className='select-item-2' value={2}>Rojo ± 2%</option>
                  <option className='select-item-5' value={5}>Verde ± 0.5%</option>
                  <option className='select-item-6' value={6}>Azul ± 0.25%</option>
                  <option className='select-item-7' value={7}>Violeta ± 0.1%</option>
                  <option className='select-item-8' value={8}>Gris ± 0.05%</option>
                  <option className='select-item-10' value={10}>Oro ± 5%</option>
                  <option className='select-item-11' value={11}>Plata ± 10%</option>
                </select>
              </div>
              
            </div>
          
          <div>

            <div>
              <h5>Solucion</h5>
              <input style={{
                width: "100%"
              }} 
              disabled
              value={inputValue}/>
            </div>

            <div style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "25px",
              // width: "100%"
            }}>
              <div>
                <button className='btn-secondary' type='reset' onClick={() => clear()}>Borrar</button>
              </div>
              <div>
                <button className='btn' type='submit' onClick={handleSubmit}>Calcular</button>
              </div>
            </div>

            <h3 style={{
              color: "grey"
            }}>Valor de la resistencia</h3>
            {
              sol?
              <p style={{
                fontSize: "18px",
                fontWeight: "bold"
              }}>{sol}{viewLetras} Ohms {viewTol}</p>
              : null
            }

          </div>
        </div>
      </div>
      <div style={{
        textAlign: "center"
      }}>
        <h4>Copyright © Andres Quintero</h4>
      </div>
    </>
  );
}

export default App;
