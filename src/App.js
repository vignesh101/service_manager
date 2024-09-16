import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CIScreen from './pages/CIScreen';
import ServerPatchDetails from './pages/ServerPatchDetails';
import ServiceManagement from './pages/ServiceManagement';
import ServiceManager from './pages/ServiceManager';

const App = () => (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ci-screen" element={<CIScreen />} />
          <Route path="/server-patch" element={<ServerPatchDetails />} />
          <Route path="/service-management" element={<ServiceManagement />} />
          <Route path="/service-manager" element={<ServiceManager />} />
        </Routes>
      </Layout>
    </Router>
);

export default App;
