import { Fragment, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AppLoader from './Components/AppLoader/AppLoader';
import AppRouter from './Components/AppRouter/AppRouter';
import routes from './Routes/Routes';
import Header from './Components/Common/Header/Header';
import Footer from './Components/Common/Footer/Footer';
import Chatbot from './Components/Common/Chatbot/Chatbot';
import ConsentPopup from './Components/Common/ConsentPopup/ConsentPopup';
import MobileFixedButtons from './Components/Common/MobileFixedButtons/MobileFixedButtons';
import BookingModal from './Components/Common/BookingModal/BookingModal';
import DripDetailModal from './Components/DripDetail/DripDetailModal';
import { useBookingModal } from './Context/BookingModalContext';
import { useDripDetailModal } from './Context/DripDetailModalContext';
import { initAttributionCapture } from './Utils/attribution';

// New Changes - Icon file name changed

export default function App() {
  const location = useLocation();
  const [ pageLoading, setPageLoading ] = useState(true);
  const { isOpen, closeModal } = useBookingModal();
  const { selectedDripId } = useDripDetailModal();
  const hideSiteChrome = selectedDripId != null;

  // Initialize attribution capture on app load
  useEffect(() => {
    initAttributionCapture();
  }, []);

  useEffect(() => {
    setPageLoading(true);

    const timeout = setTimeout(() => {
      setPageLoading(false);
    }, 1500); // Adjust loader duration

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  // Normal site
  return (
    <>
      <AppLoader isVisible={pageLoading} />
        {!pageLoading && (
          <Fragment>
            {!hideSiteChrome && <Header />}
            <AppRouter routes={routes} />
            {!hideSiteChrome && <Footer />}
            <MobileFixedButtons />
            <BookingModal isOpen={isOpen} onClose={closeModal} />
            <DripDetailModal />
            {/* <ConsentPopup /> */}
            {/* {location.pathname !== '/thank-you' && <Chatbot />} */}
          </Fragment>
        )}
    </>
  );
}