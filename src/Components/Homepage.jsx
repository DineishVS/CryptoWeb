import React from 'react'
import mililfy, { millify } from 'millify';
import {Typography,Row,Col,Statistic} from 'antd';
import {Link} from 'react-router-dom'
import News from './News';
import Cryptocurrencies from './Cryptocurrencies';
import { useGetCryptosQuery } from '../services/cryptoAPI';

const Homepage = () => {

  const {data,isFetching} = useGetCryptosQuery();
  const globalStats=data?.data?.stats;
  if (isFetching) return 'Loading....';
  console.log(data)
  return (  
    <>
      
      <Typography.Title level={2} className="heading"> GLOBAL CRYPTO STATS</Typography.Title>
      <Row className="stat">
        <Col span={12}> <Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>
        <Col span={12}> <Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
        <Col span={12}> <Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>
        <Col span={12}> <Statistic title="Total 24th Volume" value={millify(globalStats.total24hVolume)}/></Col>
        <Col span={12}> <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
        
      </Row>
      <div className="home-heading-container">
        <Typography.Title level={2} className="home-title">Top 10 Cryptocurrencies in the World</Typography.Title>
        <Typography.Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Typography.Title>  
      </div>
      <Cryptocurrencies simplified/>
      <div className="home-heading-container">
        <Typography.Title level={2} className="home-title">Latest CryptoNews</Typography.Title>
        <Typography.Title level={3} className="show-more"><Link to="/news">Show more</Link></Typography.Title>  
      </div>
      <News simplified/>

    </>
  )
}

export default Homepage
