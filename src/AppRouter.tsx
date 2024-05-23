import { BrowserRouter, Routes,Route, redirect  } from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import DaqView from './components/Daq/DaqView'
import SensorsView from './components/Sensors/SensorsView'
import HomeView from './components/Home/HomeView'
import LoginView from './components/Login/LoginView'
import OperationsView from './components/Operations/OperationsView'
import AlarmsView from './components/Alarms/AlarmsView'
import ProtectionView from './components/Protection/ProtectionView'



const AppRouter: React.FC = () => {
    return (
		<BrowserRouter>
			<Navbar/>		
			<Routes>			
				<Route path='/' element={<HomeView/>}/>
				<Route path='home' element={<HomeView/>}/>
				<Route path='login' element={<LoginView/>}/>
				<Route path='daq' element={<DaqView/>}/>
				<Route path='sensors' element={<SensorsView/>}/>
				<Route path='operations' element={<OperationsView/>}/>
				<Route path='alarms' element={<AlarmsView/>}/>
				<Route path='protection' element={<ProtectionView/>}/>
			</Routes>
			</BrowserRouter>   
    )
}
export default AppRouter