
import {Button,Menu,Typography,Avatar} from 'antd';
import {Link} from 'react-router-dom';
import {HomeOutlined,MoneyCollectOutlined,BulbOutlined,FundOutlined,MenuOutlined} from '@ant-design/icons';
import img from '../assets/cryptocurrency.png';
const Navbar = () => {
  return (
    
      <div className="nav-container">
        <div className="logo-container">
            
            <Avatar src={img} size="large" style={{ backgroundColor: 'white', padding: '5px', borderRadius: '50%' }} />
            <Typography.Title level={2} className="logo" style={{ fontSize: '28px' }}>
                <Link to="/">Cryptoweb</Link>
            </Typography.Title>
            
        </div>
        <Menu theme='dark' mode='inline'>
          <Menu.Item icon={<HomeOutlined/>}>
            <Link to='/homepage'>Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined/>}>
            <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined/>}>
            <Link to='/exchanges'>Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined/>}>
            <Link to='/news'>News</Link>
          </Menu.Item>
        </Menu>
      </div>
    
  )
}

export default Navbar
