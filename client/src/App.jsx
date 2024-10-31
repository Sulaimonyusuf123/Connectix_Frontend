import './App.css'
import { Route, Routes } from "react-router";
import Active from './Components/ShowPromoterdetails/ShowProposals/Proposal/Active/Active'
import ArchProposals from './Components/ShowPromoterdetails/ShowProposals/Proposal/ArchProposals/ArchProposals';
import Messages from './Components/ShowPromoterdetails/ShowProposals/Proposal/Messages/Messages';
import SignUp from './Components/Login_Home/SignUp/SignUp';
import Login from './Components/Login_Home/Login/Login.jsx';
import Home from './Components/Login_Home/Home/Home';
import Events from './Components/Login_Home/Events/Events';
import Create from './Components/Login_Home/Create/Create';
import Settings1 from './Components/ShowPromoterdetails/ShowProposals/Proposal/Settings/Settings';
import MainLogin from './Components/MainLogin/MainLogin';
import Favorites from './Components/Login_Home/Favorite/Favorites';
import Activities from './Components/Profile/Activities/Activities'
import BuyCoin from './Components/Profile/BuyCoin/BuyCoin';
import ProfileSettings from './Components/Profile/Settings/Settings'
import Payment from './Components/Profile/Payment/Payment';
import ChangePassword from './Components/Profile/ChangePassword/ChangePassword';
import MyProfile from './Components/Profile/ViewProfile/MyProfile';
import Profile from './Components/Profile/Profile/Profile';
import { UsernameProvider } from './Components/Usernameprovider'
import ShowHome from './Components/ShowpromoterHome/ShowHome';
import ShowFavorites from './Components/ShowPromoterdetails/ShowEvents/ShowEvents';
import { RegistrationProvider } from './Components/contexts/Formcontext'
import AccountType from  "./Components/ShowPromoterdetails/AccountType/Accounttype"
import Landing from './Components/Login_Home/Landing/Landing'
import ArtistDetails from './Components/ShowPromoterdetails/ShowProposals/ArtistDetails/ArtistDetails.jsx';
import Chat from './Components/ShowPromoterdetails/ShowProposals/Chat/Chat.jsx';
import PromoterProfile from './Components/ShowpromoterProfile/PromoterProfile/PromoterProfile.jsx';
import PromoterHelp  from './Components/ShowpromoterProfile/PromoterHelp/PromoterHelp.jsx';
import  PromoterViewProfile  from './Components/ShowpromoterProfile/PromoterViewProfile/PromoterViewProfile.jsx';
import  PromoterActivities  from './Components/ShowpromoterProfile/ShowpromoterActivities/PromoterActivities.jsx';
import  {PromoterLogOut}  from './Components/ShowpromoterProfile/PromoterLogOut/PromoterLogOut.jsx';
import  PromoChangePass  from './Components/ShowpromoterProfile/PromoterchangePass/PromoChangePass.jsx';
import PromotePremium  from './Components/ShowpromoterProfile/promoterGetPremium/PromotePremium.jsx';
import  PromoterSettings  from './Components/ShowpromoterProfile/PromoterSettings/PromoterSettings.jsx';
import  PromoterCoin  from './Components/ShowpromoterProfile/PromoterBuyCoin/PromoterCoin.jsx';
import PromoterPayment from './Components/ShowpromoterProfile/PromoterSettings/PromoterPayment.jsx';
import PromoterAddPayment from './Components/ShowpromoterProfile/PromoterSettings/PromotterAddPayment.jsx';
import  Showpromoterfacial  from './Components/ShowpromoterProfile/Showpromoterfacial.jsx';






function App() {

  return (
    <>
     <div>
     <RegistrationProvider>
     <UsernameProvider>
        <Routes>
          <Route index element={<Landing />}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/SignUp' element={<SignUp/>}></Route>
          <Route path='/Create' element={<Create/>}></Route>
          {/* <Route path='/Details' element={<Details/>}></Route> */}
          <Route path='/Events' element={<Events />}></Route>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/showproposals' element={<Active/>}></Route>
          <Route path='/ArchiveProposals' element={<ArchProposals/>}></Route>
          <Route path='/settings' element={<Settings1/>}></Route>
          <Route path='/Messages' element={<Messages/>}></Route>
          <Route path='/mainlogin' element={<MainLogin/>}></Route>
          <Route path='/favorites' element={<Favorites/>}></Route>
          <Route path='/showfavorites' element={<ShowFavorites/>}></Route>
          <Route path='/showevents' element={<ShowFavorites/>}></Route>
          <Route path='/activities' element={<Activities/>}></Route>
          <Route path='/buycoin' element={<BuyCoin/>}></Route>
          <Route path='/payment' element={<Payment/>}></Route>
          <Route path='/showhome' element={<ShowHome/>}></Route>
          <Route path='/profilesettings' element={<ProfileSettings/>}></Route>
          <Route path='/Profile' element={<Profile/>}></Route>
          <Route path='/MyProfile' element={<MyProfile/>}></Route>
          <Route path='/ChangePassword' element={<ChangePassword/>}></Route>  
          <Route path='/accounttype' element={<AccountType/>}></Route>
          <Route path='/artistdetails' element={<ArtistDetails/>}></Route>  
          <Route path='/chat' element={<Chat/>}></Route>          
        


          <Route path='/accounttype' element={<AccountType/>}></Route>          
          <Route path='/PromoterProfile' element={<PromoterProfile/>}></Route>          
          <Route path='/PromoterHelp' element={<PromoterHelp/>}></Route> 
          <Route path='/PromoterViewProfile' element={<PromoterViewProfile/>}></Route> 
          <Route path='/PromoterActivities' element={<PromoterActivities/>}></Route>
          <Route path='/PromoterLogOut' element={<PromoterLogOut/>}></Route>
          <Route path='/PromoChangePass' element={<PromoChangePass/>}></Route>   
          <Route path='/PromotePremium' element={<PromotePremium/>}></Route> 
          <Route path='/PromoterSettings' element={<PromoterSettings/>}></Route>   
          <Route path='/PromoterCoin' element={<PromoterCoin/>}></Route>   
          <Route path='/PromoterPayment' element={<PromoterPayment/>}></Route> 
          <Route path='/PromoterAddPayment' element={<PromoterAddPayment/>}></Route> 
          <Route path='/Showpromoterfacial' element={<Showpromoterfacial/>}></Route> 

        </Routes>
        </UsernameProvider>
        </RegistrationProvider>

     </div>
    </>
  )
}

export default App
