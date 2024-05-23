import React, {useEffect, useState} from 'react'
import { Link, useNavigate, useLocation, useNavigationType } from 'react-router-dom';
import { useAutoRefresh } from '../../context/AutoRefresh';
import { InlineIcon } from "@iconify/react";


const Navbar: React.FC = () => {
    const [activeTab, setActiveTab] = useState(''); 
    const {refresh, setRefresh, spin, lang, setLang} = useAutoRefresh() ;
    let navigate = useNavigate();

    useEffect(() => {
        let url = window.location.href;
        let tab = url.split('/')[3];
        console.log('tab url=',url, tab)
        if (!tab) {tab = 'home'}     
        setActiveTab(tab);  

        if (tab == 'home') {
            console.log('tab =', tab)
             navigate("/home");
         }
    }, [])
    
   
    let location = useLocation();
    useEffect(() => {
        // execute on location change   
        let tabHist = location.pathname.slice(1)
        if(tabHist.includes('/')){
            tabHist = tabHist.split('/')[0];            
        } 
        setActiveTab(tabHist);         
        console.log('hist=', tabHist)       
        
    }, [location]);
   /* useNavigate().listen((location, action) => {    
        let tabHist = location.pathname.slice(1)
        if(tabHist.includes('/')){
            tabHist = tabHist.split('/')[0];            
        } 
        setActiveTab(tabHist);    
        console.log('hist=',action, tabHist)
    }); */

    const styleTab = () =>{
        return {       
                backgroundColor: '#f9f9f9', //'white',
                color: 'black',
                //paddingTop:'4.7px'
                }
    }  

    return (
      <div>   
		<nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
            <div className="container" >
                <li className="nav-item">
                    <Link className="navbar-brand " to='/home'>                      
                       <InlineIcon icon="ion:home" style={{ fontSize: '22px', }}/> Home
                    </Link>
                </li>
                <div className=" navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item ">
                            <Link className="nav-link fs-5" to="/login">                            
                                <InlineIcon icon="fa-solid:edit" style={{ fontSize: '18px', }}/> Configuration
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={(activeTab==='daq'?'active ':'') + "nav-link btn btn-sm rounded-pill fs-5"} 
                                style={activeTab==='daq'?styleTab():{}}  
                                onClick={() => {setActiveTab('daq')}}
                                to="/daq"                      
                            >
                            DAQ
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={(activeTab ==='sensors'?'active ':'') + "nav-link btn btn-sm rounded-pill fs-5"}
                                style={activeTab==='sensors'?styleTab():{}}  
                                onClick={() => {setActiveTab('login')}}
                                to="/sensors"                      
                            >
                            Sensors
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={(activeTab ==='operations'?'active ':'') + "nav-link btn btn-sm rounded-pill fs-5"}
                                style={activeTab==='operations'?styleTab():{}}                                
                                to="/operations"                  
                            >
                            Op. Conditions
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={(activeTab ==='alarms'?'active ':'') + "nav-link btn btn-sm rounded-pill fs-5"}
                                style={activeTab==='alarms'?styleTab():{}}                                  
                                to="/alarms"                 
                            >
                            Alarms
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={(activeTab ==='protection'?'active ':'') + "nav-link btn btn-sm rounded-pill fs-5"}
                                style={activeTab==='protection'?styleTab():{}}                               
                                to="/protection"                 
                            >
                            Protection
                            </Link>
                        </li>
                    </ul>
                    <a className="nav-link" style={{ textDecoration: "none", color: "Dodgerblue" }}>
                        admin <InlineIcon icon="fa-solid:user" style={{ fontSize: '17px', }}/>
                    </a>
                    <div className="nav-item dropdown" style={{paddingLeft:'0.5em'}}>
                        <a className="btn btn-outline-secondary btn-sm dropdown-toggle "                       
                           role="button"
                           data-bs-toggle="dropdown"
                           aria-expanded="false">
                          <InlineIcon icon="fa-solid:cog" style={{ fontSize: '16px', }}/>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark"
                            style={{ cursor: "pointer" }}
                            aria-labelledby="navbarScrollingDropdown">
                            <li>
                                <a className="dropdown-item " >
                                   <InlineIcon icon="fa-solid:hdd" style={{ fontSize:'17px',}}/> Save to Device
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item " >
                                    <InlineIcon icon="fa:download" style={{ fontSize:'17px',}}/> Save to Local
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item " >
                                    <InlineIcon icon="subway:round-arrow-5" style={{ fontSize:'17px',}}/> Reboot
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a className="dropdown-item "  >
                                    <InlineIcon icon="fa-solid:sign-out-alt" style={{ fontSize:'18px', marginBottom:'-0.1em'}}/> Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
      </div>  
    )
}
export default Navbar