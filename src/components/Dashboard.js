import React from 'react';
import { Button, Col, Row, Typography } from 'antd';
import useDashboard from '../hooks/useDashboard';

export default function Dashboard() {
  const { isLoading, logout } = useDashboard();

  return (
    <div style={{ backgroundColor: 'ghostwhite', height: '100%' }}>
      <Row justify="center" style={{ paddingTop: "3%", marginBottom: "2%" }}>
        <img
          src='logo.png'
          alt='header-logo'
          width='600'
          style={{ padding: '20px' }}
        />
      </Row>
      <Row justify='center'>
        <Typography.Title>The Dashboard</Typography.Title>
      </Row>
      <Row justify='center'>
        <Col span={3}>
          <Button loading={isLoading} block onClick={logout}>Logout</Button>
        </Col>
      </Row>
    </div>
  );
}
