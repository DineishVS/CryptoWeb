import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import Exchanges from './Components/Exchanges';
import Cryptocurrencies from './Components/Cryptocurrencies';
import CryptoDetails from './Components/CryptoDetails';
import News from './Components/News';
import { Typography,Space } from 'antd';

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <div className="routes">
            <Routes>
              <Route path="/homepage" element={<Homepage />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinid" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </div>
        <div className="footer" >
          <Typography.Title level={5} style={{color:'white',textAlign:'center'}}>
            Cryptoweb <br/>
            All rights reserved
          </Typography.Title>
          <Space size="large" style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <Link to="/homepage">Home</Link>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>

        </div>
      </div>
    </Router>
  );
};

export default App;
