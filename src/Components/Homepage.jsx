import React from 'react'
import mililfy from 'millify';
import {Typography,Row,Col,Statistic} from 'antd';
import {Link} from 'react-router-dom'
const Homepage = () => {
  return (
    <div>
      
      <Typography.Title level={3} className="heading"> GLOBAL CRYPTO STATS</Typography.Title>
      <Row className="stat">
        <Col span={12}> <Statistic title="Total Cryptocurrencies" value="5"/></Col>
        <Col span={12}> <Statistic title="Total Exchanges" value="5"/></Col>
        <Col span={12}> <Statistic title="Total Market Cap" value="5"/></Col>
        <Col span={12}> <Statistic title="Total 24th Volume" value="5"/></Col>
        <Col span={12}> <Statistic title="Total Markets" value="5"/></Col>
        
      </Row>

    </div>
  )
}

export default Homepage
