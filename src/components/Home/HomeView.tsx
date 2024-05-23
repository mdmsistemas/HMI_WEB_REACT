import React, {useEffect, useState} from 'react'
import { useAutoRefresh } from '../../context/AutoRefresh';
import { Icon, InlineIcon } from "@iconify/react";


const HomeView: React.FC = () => {
    const {refresh, setSpin, lang} = useAutoRefresh() ;

    return (
        <>
        <div className="m-4 mt-1 justify-content-center">
          <div className="jumbotron ">
            <h1 className="display-3">Welcome to CompactRIO Web.</h1>
            <p className="lead">
              This is a web application for configuration settings and access data
              from your CompactRIO device.
            </p>
            <hr className="my-4" />
            <div className="my-8">
              <img
                src="crio31.png"
                className=" d-block m-0 logo"
                alt="Logo"
              />
            </div>
          </div>
        
          <div className="row container pt-2">
           <div className="p-0 pb-4">
             <h2>Select the option to continue:</h2>
           </div>
           <div className="col-md p-0">
              <button className="btn btn-outline-dark me-1 mx-3 fs-5 w-100 " >                  
                  <InlineIcon icon="f7:waveform-path" style={{width:'1.2em', height:"1.2em"}}/> Sensor Data                   
              </button>  
           </div>
           <div className="col-md ">
              <button  className="btn btn-outline-dark me-1 mx-3 fs-5 w-100">
                <InlineIcon icon="mdi:alarm-light" style={{ fontSize: '22px', }}/> Alarm Data                   
              </button>
           </div>
           <div className="col-md ">
            <button className="btn btn-outline-dark mx-3 fs-5 w-100">
              <InlineIcon icon="iconamoon:history-bold" style={{ fontSize: '21px', }}/> History Data
            </button>
           </div>        
         </div>
        </div>
      </>
      
    )
}
export default HomeView