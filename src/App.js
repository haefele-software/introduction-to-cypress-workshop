import React from "react";
import "antd/dist/antd.css";
import { Row, Col, Typography, Card, Form, Button, Divider, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

export default function App() {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <>
      <Row justify="center" style={{ marginTop: "3%", marginBottom: "2%" }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Magnavox_Odyssey_Logo.svg/1920px-Magnavox_Odyssey_Logo.svg.png"
          alt="header-log"
          width="600"
          style={{ padding: "20px" }}
        />
      </Row>
      <Row>
        <Col span={12} offset={6}>
          <Card>
            <Typography.Title>Login</Typography.Title>
            <Typography.Paragraph className="text-muted">
              Sign in to your account
            </Typography.Paragraph>
            <Form form={form} layout="vertical" onFinish={() => {}}>
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
                />
              </Form.Item>
              <Divider />
              <Form.Item>
                <Button
                  block
                  loading={isLoading}
                  type="primary"
                  htmlType="submit"
                >
                  Login
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
}
