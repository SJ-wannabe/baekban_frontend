import React from 'react';

import './Register.css';
import {Button, Form, Input, Select, DatePicker, Card} from 'antd';
import styled from 'styled-components';

const RegisterStyleCard = styled(Card)`
  display: flex;
  width: 650px;
  height: 635px;
  margin: 30px auto;

  box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.6);
`;

const {Option} = Select;

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

function Register() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{width: 70}}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

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
          name="id"
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
          <DatePicker />
        </Form.Item>

        <Form.Item
          name="gender"
          label="성별"
          rules={[{required: true, message: '성별을 선택해주세요!'}]}
        >
          <Select placeholder="select your gender">
            <Option value="male">남자</Option>
            <Option value="female">여자</Option>
          </Select>
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
          name="phone"
          label="휴대폰 번호"
          rules={[{required: true, message: '휴대폰 번호를 입력해주세요!'}]}
        >
          <Input addonBefore={prefixSelector} style={{width: '100%'}} />
        </Form.Item>

        <Form.Item
          name="companyRegisterNumber"
          label="사업자 등록 번호"
          rules={[
            {required: true, message: '사업자 등록 번호를 입력해주세요!'},
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </RegisterStyleCard>
  );
}

export default Register;
