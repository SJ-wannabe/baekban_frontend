import React from 'react';

import './FindAccount.css';
import {Card, Tabs} from 'antd';
import styled from 'styled-components';

import FindId from './FindId/FindId';
import FindPassword from './FindPassword/FindPassword';

const FindAccountStyleCard = styled(Card)`
  display: flex;
  width: 600px;
  height: 300px;
  margin: 100px auto;

  box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.6);
`;

const FindAccountStyleTab = styled(Tabs)`
  width: 100%;
`;

const onChange = (key: string) => {
  console.log(key);
};

const TabItem = [
  {
    label: '아이디 찾기',
    key: '1',
    children: <FindId />,
  },
  {
    label: '비밀번호 찾기',
    key: '2',
    children: <FindPassword />,
  },
];

function FindAccount() {
  return (
    <FindAccountStyleCard>
      <FindAccountStyleTab onChange={onChange} type="card" items={TabItem} />
    </FindAccountStyleCard>
  );
}

export default FindAccount;
