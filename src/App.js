
import Form from './components/Forms/Form';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import FormSignup from './components/Forms/FormSignup';
import DashboardPage from './components/Pages/DashboardPage';
import OrderHistoryPage from './components/Pages/OrderHistoryPage';
import CartPage from './components/Pages/CartPage';
import FormLogin from './components/Forms/FormLogin';
import SettingsPage from './components/Pages/SettingsPage';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import PrincipalBank from './components/Pages/USABANKS/PrincipalBank';
import CitiBank from './components/Pages/USABANKS/CitiBank';
import HillsBank from './components/Pages/USABANKS/HillsBank';
import HuntingtonBank from './components/Pages/USABANKS/HuntingtonBank';
import MTBank from './components/Pages/USABANKS/M&TBank';
import PNCBank from './components/Pages/USABANKS/PNCBank';
import SuntrustBank from './components/Pages/USABANKS/SuntrustBank';
import WoodforestBank from './components/Pages/USABANKS/WoodforestBank';
import ChaseBank from './components/Pages/USABANKS/ChaseBank';
import TDBank from './components/Pages/CANADABANKS/TDBank';
import ScotiaBank from './components/Pages/CANADABANKS/ScotiaBank';
import RBCBank from './components/Pages/CANADABANKS/RBCBank';
import BusinessChecks from './components/Pages/COMPANYFULLZ/Businesschecks';
import CompanyFullz from './components/Pages/COMPANYFULLZ/Companyfullz';
import Wirechecks from './components/Pages/COMPANYFULLZ/Wirechecks';
import BoaCC from './components/Pages/CREDITCARDLOGINS/BoaCC';
import DiscoverBanks from './components/Pages/CREDITCARDLOGINS/Discover';
import ChaseCC from './components/Pages/CREDITCARDLOGINS/ChaseCC';
import HsbcBank from './components/Pages/EUROPEANBANKS/Hsbc';
import LloydBank from './components/Pages/EUROPEANBANKS/Lloydbank';
import BarclaysBank from './components/Pages/EUROPEANBANKS/Barclaysbank';
import Fundscripcanada from './components/Pages/SHOPWITHSCRIP/Fundscripcanada';
import Usashopwithscrip from './components/Pages/SHOPWITHSCRIP/Usashopwithscrip';
import Azssnfullz from './components/Pages/SSNFULLZ/Azssnfullz';
import Calissnfullz from './components/Pages/SSNFULLZ/Calissnfullz';
import Flssnfullz from './components/Pages/SSNFULLZ/Flssnfullz';
import Nyssnfullz from './components/Pages/SSNFULLZ/Nyfullz';
import Ohssnfullz from './components/Pages/SSNFULLZ/Ohssnfullz';
import Txssnfullz from './components/Pages/SSNFULLZ/Txssnfullz';
import AlibabaWireTransfer from './components/Pages/TUTORIALS/AlibabaWireTransfer';
import BecWireTransfer from './components/Pages/TUTORIALS/BecWireTransfer';
import CardingTut from './components/Pages/TUTORIALS/CardingTut';
import DumpsTut from './components/Pages/TUTORIALS/DampsTut';
import SbaTut from './components/Pages/TUTORIALS/SbaTut';
import SpammingTut from './components/Pages/TUTORIALS/SpammingTut';
import TwoFactor from './components/Pages/TUTORIALS/TwoFactorBypass';
import { AppContainer } from './components/styled/AppContainer.styled';

function App() {
  return (
    <Router>
      <AppContainer>
      <Routes>
        <Route exact path='/' element = {<FormLogin />} />
        <Route exact path="/login" element = {<FormLogin />} />
        <Route exact path="/signup" element = {<FormSignup />} />
        <Route exact path="/Home/Dashboard" element = { < DashboardPage />} />
        <Route exact path="/OrderHistory" element = {<OrderHistoryPage />} />
        <Route exact path="/Cart" element = {<CartPage />} />
        <Route exact path="/Settings" element = {<SettingsPage />} />
        <Route exact path="/usabanks/principalbank" element = {<PrincipalBank />} />
        <Route exact path="/usabanks/citibank" element = {<CitiBank />} />
        <Route exact path="/usabanks/huntingtonbank" element = {<HuntingtonBank />} />
        <Route exact path="/usabanks/hillsbank" element={<HillsBank />} />
        <Route exact path="/usabanks/m&tbank" element = {<MTBank />} />
        <Route exact path="/usabanks/pncbank" element = {<PNCBank />} />
        <Route exact path="/usabanks/suntrustbank" element = {<SuntrustBank />} />
        <Route exact path="/usabanks/woodforestbank" element = {<WoodforestBank />} />
        <Route exact path="/usabanks/chasebank" element={<ChaseBank />} />
        <Route exact path="/canadabanks/rbcbank" element={<RBCBank />} />
        <Route exact path="/canadabanks/scotiabank" element={<ScotiaBank />} />
        <Route exact path="/canadabanks/tdbank" element={<TDBank />} />
        <Route exact path="/companyfullzandchecks/businesschecks" element = {<BusinessChecks />} />
        <Route exact path="/companyfullzandchecks/companyfullz" element = {<CompanyFullz />} />
        <Route exact path="/companyfullzandchecks/wirechecks" element={<Wirechecks />} />
        <Route exact path="/creditcardlogins/boacc" element={<BoaCC />} />
        <Route exact path="/creditcardlogins/discoverbankcc" element={<DiscoverBanks />} />
        <Route exact path="/creditcardlogins/chasecc" element={<ChaseCC />} />
        <Route exact path="/europeanbanks/barclaysbank" element={<BarclaysBank />} />
        <Route exact path="/europeanbanks/lloydbank" element={<LloydBank />} />
        <Route exact path="/europeanbanks/hsbcbank" element={<HsbcBank />} />
        <Route exact path="/shopwithscrip/fundscripcanada" element={<Fundscripcanada />} />
        <Route exact path="/shopwithscrip/usashopwithscrip" element={<Usashopwithscrip />} />
        <Route exact path="/ssnfullz/azssnfullz" element={<Azssnfullz />} />
        <Route exact path="/ssnfullz/calissnfullz" element={<Calissnfullz />} />
        <Route exact path="/ssnfullz/flssnfullz" element={<Flssnfullz />} />
        <Route exact path="/ssnfullz/nyssnfullz" element={<Nyssnfullz />} />
        <Route exact path="/ssnfullz/ohssnfullz" element={<Ohssnfullz />} />
        <Route exact path="/ssnfullz/txssnfullz" element={<Txssnfullz />} />
        <Route exact path="/tutorials/alibabawiretransfertut" element={<AlibabaWireTransfer />} />
        <Route exact path="/tutorials/becwiretransfertut" element={<BecWireTransfer />} />
        <Route exact path="/tutorials/cardingtut" element={<CardingTut />} />
        <Route exact path="/tutorials/dumpsandcpntut" element={<DumpsTut />} />
        <Route exact path="/tutorials/sbatut" element={<SbaTut />} />
        <Route exact path="/tutorials/spammingtut" element={<SpammingTut />} />
        <Route exact path="/tutorials/twofactorbypasstut" element={<TwoFactor />} />
      </Routes>
      <Sidebar /> <Navbar />
      </AppContainer>
    </Router>
  );
}

export default App;
