import './App.css'
import { Route, Routes } from "react-router";
import Active from './Components/Proposal/Active/Active'
import ArchProposals from './Components/Proposal/ArchProposals/ArchProposals';
import Messages from './Components/Proposal/Messages/Messages';
import Profile from './Components/Profile/Profile/Profile';
import MyProfile from './Components/Profile/ViewProfile/MyProfile';
import ChangePassword from './Components/Profile/ChangePassword/ChangePassword';
import Activities from './Components/Profile/Activities/Activities';
import Help from './Components/Profile/Help/Help';
import Settings from './Components/Profile/Settings/Settings';
import BuyCoin from './Components/Profile/BuyCoin/BuyCoin';
import Payment from './Components/Profile/Payment/Payment';
import About from './Components/Profile/About-Us/About';
import Privacy from './Components/Profile/Privacy/Privacy';
import Terms from './Components/Profile/Terms/Terms';




function App() {

  return (
    <>
     <div>
        <Routes>
          <Route path='/Active' element={<Active/>}></Route>
          <Route path='/ArchiveProposals' element={<ArchProposals/>}></Route>
          <Route path='/Messages' element={<Messages/>}></Route>
          <Route path='/Profile' element={<Profile/>}></Route>
          <Route path='/MyProfile' element={<MyProfile/>}></Route>
          <Route path='/ChangePassword' element={<ChangePassword/>}></Route>
          <Route path='/Activities' element={<Activities/>}></Route>
          <Route path='/Help' element={<Help/>}></Route>
          <Route path='/Settings' element={<Settings/>}></Route>
          <Route path='/BuyCoin' element={<BuyCoin/>}></Route>
          <Route path='/Payment' element={<Payment/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Privacy' element={<Privacy/>}></Route>
          <Route path='/Terms' element={<Terms/>}></Route>
        </Routes>
     </div>
    </>
  )
}

export default App
