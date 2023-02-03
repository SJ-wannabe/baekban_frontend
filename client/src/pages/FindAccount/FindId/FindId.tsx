import React from 'react';

import './FindId.css';
import {Form, Input, Button, Row, Col} from 'antd';
import styled from 'styled-components';

const FindIdButton = styled(Button)`
  width: 100%;
`;

const formItemLayout = {
  labelCol: {
    xs: {span: 6},
    sm: {span: 4},
  },
  wrapperCol: {
    xs: {span: 24},
    sm: {span: 19},
  },
};

function FindId() {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      style={{marginTop: 20}}
      scrollToFirstError
    >
      <Row>
        <Col span={20}>
          <Form.Item
            name="name"
            label="이름"
            rules={[{required: true, message: '이름을 입력해주세요!'}]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={20}>
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
        </Col>
        <Col span={4}>
          <Form.Item>
            <FindIdButton type="primary" htmlType="submit">
              인증
            </FindIdButton>
          </Form.Item>
        </Col>
      </Row>

      <Row justify="center">
        <Col span={10}>
          <Form.Item wrapperCol={{span: 0}} style={{marginTop: 20}}>
            <FindIdButton type="primary" htmlType="submit">
              로그인 하러 가기
            </FindIdButton>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

export default FindId;
