import React, {useState} from 'react';

import './Login.css';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Form, Input, Card} from 'antd';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import styled from 'styled-components';

// import logo from '';

const StyleForm = styled(Form)`
  color: red;
  width: 100%;
`;

const StyleCard = styled(Card)`
  display: flex;
  width: 500px;
  height: 390px;
  margin: 100px auto;
  position: relative;
  padding: 0px;

  box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.6);
`;

const StyleButton = styled(Button)`
  width: 120px;
  margin: 0px;
`;

const LoginStyleFormItem = styled(Form.Item)`
  margin-bottom: 24px;
`;

function Login() {
  const navigate = useNavigate();
  const [failMsg, setFailMsg] = useState(false);

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);

    axios
      .post('http://localhost:3000/login', values)
      .then(res => {
        console.log(res.data);

        const {accessToken} = res.data;

        // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${accessToken}`;

        navigate('/main');
      })
      .catch(error => {
        console.log(error);
        setFailMsg(true);
      });
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
            <LoginStyleFormItem
              className="loginInput"
              name="userid"
              rules={[{required: true, message: '아이디를 입력해주세요!'}]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="UserID"
              />
            </LoginStyleFormItem>
            <LoginStyleFormItem
              className="loginInput"
              name="password"
              rules={[{required: true, message: '비밀번호를 입력해주세요!'}]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </LoginStyleFormItem>
            <LoginStyleFormItem>
              <StyleButton
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </StyleButton>
            </LoginStyleFormItem>
            {failMsg && <span>아이디 혹은 비밀번호가 일치하지 않습니다.</span>}
            <LoginStyleFormItem
              style={{position: 'absolute', bottom: 0, left: 30}}
            >
              <div className="loginForm-account">
                <Link to="/register">회원 가입</Link>

                <div>
                  <Link to="/findAccount">아이디 / 비밀번호 찾기</Link>
                </div>
              </div>
            </LoginStyleFormItem>
          </StyleForm>
        </div>
      </div>
    </StyleCard>
  );
}

export default Login;
