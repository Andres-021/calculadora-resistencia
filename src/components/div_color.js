import R from '../img/comon2.png';

export default function DivColor ({band, band2, multi, tol}){

  const list = [0,1,2,3,4,5,6,7,8,9];

  return(
    <>
      <div className='container-img'>
          
        {/* <h4>Salida</h4> */}
        <img src={R}/>
          
        <div className='div-wrapper'>
          {/* <div className={color==1?'div-wrapper-r-sol-1':'neutro'}> */}
          <div className={'div-wrapper-r-sol-1-'+band?'div-wrapper-r-sol-1-tam div-wrapper-r-sol-'+band:''}>
            
          </div>
          <div className={'div-wrapper-r-sol-2-'+band2?'div-wrapper-r-sol-2-tam div-wrapper-r-sol-'+band2:''}>
            
          </div>
          <div className={'div-wrapper-r-sol-3-'+multi?'div-wrapper-r-sol-3-tam div-wrapper-r-sol-'+multi:''}>
            
          </div>
          <div className={'div-wrapper-r-sol-4-'+tol?'div-wrapper-r-sol-4-tam div-wrapper-r-sol-'+tol:''}>

          </div>
        </div>
        
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        width: "60%",
        height: "25px",
        textAlign: "center",
        border: "1px solid #000",
        borderRadius: "5px", 
        backgroundColor: "grey"
        // backgroundColor: "black"
      }}>
        <div className={'div-wrapper-r-sol-1-'+band?'div-wrapper-r-sol-'+band:''} 
        style={{
          width: "100%"
        }}>
          <h5 style={{color:(band!=9?"white":"black"), textAlign:"center"}}>{band < 15?band:''}</h5>
        </div>

        <div className={'div-wrapper-r-sol-2-'+band2?'div-wrapper-r-sol-'+band2:''} 
        style={{
          width: "100%"
        }}>
          <h5 style={{color:(band2!=9?"white":"black"), textAlign:"center"}}>{band2 < 15?band2:''}</h5>   
        </div>

        <div className={'div-wrapper-r-sol-3-'+multi?'div-wrapper-r-sol-'+multi:''}
        style={{
          width: "100%"
        }}>
          <h5 style={{color:(multi!=9?"white":"black"), textAlign:"center"}}>
            {multi==0?'x1':multi==1?'x10':multi==2?'x100':multi==3?'x1K':multi==4?'x10K':multi==5?'x100K':multi==6?'x1M':multi==7?'x10M':multi==8?'x100M':multi==9?'x1G':multi==10?'x0.1':multi==11?'x0.01':''}
          </h5>
        </div>
        
        <div className={'div-wrapper-r-sol-4-'+tol?'div-wrapper-r-sol-'+tol:''} 
        style={{
          width: "100%"
        }}>
          <h5 style={{color:(band2!=9?"white":"black"), textAlign:"center"}}>
            {tol==1?'1%':tol==2?'2%':tol==5?'0.5%':tol==6?'0.25%':tol==7?'0.1%':tol==8?'0.05%':tol==10?'5%':tol==11?'10%':''}
          </h5>
        </div>
      </div>
    </>
  )
}