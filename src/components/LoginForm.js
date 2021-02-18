import React from 'react';
import { Row, Col, Typography, Card, Form, Button, Divider, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import useLoginForm from '../hooks/useLoginForm';

function LoginForm() {
  const [form] = Form.useForm();
  const { isLoading, login } = useLoginForm();

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
      <Row>
        <Col span={12} offset={6}>
          <Card>
            <Typography.Title data-cy='login-title'>Login</Typography.Title>
            <Typography.Paragraph className="text-muted">
              Sign in to your account
            </Typography.Paragraph>
            <Form form={form} layout="vertical" onFinish={login}>
              <Form.Item
                name="email"
                label={<b>Email Address</b>}
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid email address."
                  },
                  {
                    required: true,
                    message: "Please input your email address."
                  }
                ]}
              >
                <Input
                  prefix={<UserOutlined />}
                  type="text"
                  placeholder="Enter your email address"
                  disabled={isLoading}
                  id="login-email-input"
                  data-cy="email-input"
                />
              </Form.Item>
              <Form.Item
                name="password"
                label={<b>Password</b>}
                rules={[
                  { required: true, message: "Please input your password." }
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Password"
                  disabled={isLoading}
                  data-cy="password-input"
                />
              </Form.Item>
              <Divider />
              <Form.Item>
                <Button
                  block
                  loading={isLoading}
                  type="primary"
                  htmlType="submit"
                  data-cy="submit-button"
                >
                  Login
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default LoginForm;
