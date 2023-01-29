import React from 'react';

import './Login.css';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Form, Input, Card} from 'antd';
import styled from 'styled-components';

// import logo from '';

const StyleForm = styled(Form)`
  color: red;
  width: 100%;
`;

const StyleCard = styled(Card)`
  display: flex;
  width: 500px;
  height: 370px;
  margin: 100px auto;

  box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.6);
`;

const StyleButton = styled(Button)`
  width: 120px;
`;

function Login() {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <StyleCard>
      <div className="loginForm">
        <div className="loginForm-header">
          {/* <h1>BaekBan</h1> */}
          <img src="assets/img/logo.png" className="logo" />
        </div>
        <div>
          <StyleForm
            name="normal_login"
            className="login-form"
            initialValues={{remember: true}}
            onFinish={onFinish}
          >
            <Form.Item
              className="loginInput"
              name="username"
              rules={[{required: true, message: '아이디를 입력해주세요!'}]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              className="loginInput"
              name="password"
              rules={[{required: true, message: '비밀번호를 입력해주세요!'}]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <StyleButton
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </StyleButton>
            </Form.Item>
            <Form.Item>
              <div className="loginForm-account">
                <a className="loginForm-register" href="">
                  회원 가입
                </a>
                <div>
                  <a className="login-form-forgot loginForm-id" href="">
                    아이디
                  </a>
                  <span className="loginForm-account-span"> / </span>
                  <a className="login-form-forgot loginForm-password" href="">
                    <span> 비밀번호 찾기</span>
                  </a>
                </div>
              </div>
            </Form.Item>
          </StyleForm>
        </div>
      </div>
    </StyleCard>
  );
}

export default Login;
