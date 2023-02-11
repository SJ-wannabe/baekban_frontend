import React from 'react';

import {Button, Form, Input, DatePicker, Card, Col} from 'antd';
import type {DatePickerProps} from 'antd';
import axios from 'axios';
import './Register.css';
import styled from 'styled-components';

const RegisterStyleCard = styled(Card)`
  display: flex;
  width: 650px;
  height: 600px;
  margin: 30px auto;

  box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.6);
`;

const formItemLayout = {
  labelCol: {
    xs: {span: 12},
    sm: {span: 6},
  },
  wrapperCol: {
    xs: {span: 24},
    sm: {span: 16},
  },
};

const config = {
  rules: [
    {type: 'object' as const, required: true, message: 'Please select time!'},
  ],
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 11,
    },
  },
};

let birth = '0';

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
  birth = dateString;
};

function Register() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);

    const data = {
      ...values,
      birth,
    };
    axios.post('http://localhost:3000/users', data).then(res => {
      console.log(res.data);
    });
  };

  return (
    <RegisterStyleCard>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          prefix: '86',
        }}
        style={{width: 600}}
        scrollToFirstError
      >
        <Form.Item
          name="userid"
          label="아이디"
          rules={[{required: true, message: '아이디를 입력해주세요!'}]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="비밀번호"
          rules={[
            {
              required: true,
              message: '비밀번호를 입력해주세요!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="비밀번호 재확인"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: '비밀번호를 입력해주세요!',
            },
            ({getFieldValue}) => ({
              async validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error('입력하신 비밀번호가 일치하지 않습니다!'),
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="name"
          label="이름"
          rules={[{required: true, message: '이름을 입력해주세요!'}]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="date-picker" label="생년월일" {...config}>
          {/* <Col span={8}> */}
          <DatePicker onChange={onChange} style={{width: 400}} />
          {/* </Col> */}
        </Form.Item>

        <Form.Item
          name="email"
          label="이메일"
          rules={[
            {
              type: 'email',
              message: '유효한 이메일 형식이 아닙니다.',
            },
            {
              required: true,
              message: '이메일을 입력해주세요!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phoneNumber"
          label="휴대폰 번호"
          rules={[{required: true, message: '휴대폰 번호를 입력해주세요!'}]}
        >
          <Input type="number" style={{width: '100%'}} />
        </Form.Item>

        <Form.Item
          name="businessRegistrationNumber"
          label="사업자 등록 번호"
          rules={[
            {required: true, message: '사업자 등록 번호를 입력해주세요!'},
          ]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Col span={1}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Col>
        </Form.Item>
      </Form>
    </RegisterStyleCard>
  );
}

export default Register;
