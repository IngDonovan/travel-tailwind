import { useContext } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import AuxBar from '../components/AuxBar';
import { TravelContext } from "../Context";

function AppUI() {
  const {
    isDarkMode,
  } = useContext(TravelContext);
  
  return (
    <> 
      <div className={`${isDarkMode ? 'dark' : ''}`}>
        <div className="w-full h-screen font-Montserrat dark:bg-gray-900 text-white">
          <Header />
          <Main />
          <Footer />
          <AuxBar />
        </div>
      </div>
    </>
  )
}

export default AppUI;
