// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import MainScreen from './pages/MainScreen';
// import TicketExpired from './pages/TicketExpired';
// import TicketValid from './pages/TicketValid';
// import TicketInvalid from './pages/TicketInvalid';

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<MainScreen />} />
//         <Route path="/ticket-expired" element={<TicketExpired />} />
//         <Route path="/ticket-valid" element={<TicketValid />} />
//         <Route path="/ticket-invalid" element={<TicketInvalid />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MobileOnly from './components/MobileOnly';
import MainScreen from './pages/MainScreen';
import TicketValid from './pages/TicketValid';
import TicketInvalid from './pages/TicketInvalid';
import TicketExpired from './pages/TicketExpired';
import MobileOnlyWarning from './pages/MobileOnlyWarning';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MobileOnly>
              <MainScreen />
            </MobileOnly>
          }
        />
        <Route path="/ticket-valid" element={<TicketValid />} />
        <Route path="/ticket-invalid" element={<TicketInvalid />} />
        <Route path="/ticket-expired" element={<TicketExpired />} />
        <Route path="/mobile-only" element={<MobileOnlyWarning />} />
      </Routes>
    </Router>
  );
};

export default App;
