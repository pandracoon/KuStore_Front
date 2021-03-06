import axios from 'axios';
import React, { ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';
import api from '../../api';
import MembershipTable from './MembershipTable';

const MembershipTemplateBlock = styled.div`
  width: 512px;
  height: 768px;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto;

  margin-bottom: 32px;
  display: flex;
  flex-direction: column;

  .header {
    height: 50px;
    display: flex;
    flex-direction: row-reverse;
  }
`;

type MembershipData = {
  me_id: number;
  me_name: string;
  point: number;
};

const MembershipTemplate = (): ReactElement => {
  const column = ['ID', '이름', '포인트'];

  const state = useState<MembershipData[]>([
    {
      me_id: 0,
      me_name: '',
      point: 0,
    },
  ]);

  const tableData: MembershipData[] = state[0];
  const setTableData = state[1];

  useEffect(() => {
    const fetchMembershipList = async (): Promise<number> => {
      try {
        const url = `${api}/membership`;
        console.log(url);
        const res = await axios.get(url);
        const resData = res.data as MembershipData[];

        setTableData(resData);
        return 1;
      } catch (e) {
        console.log(e);
      }
    };

    const a = fetchMembershipList();
    console.log(a);
  }, []);

  return (
    <MembershipTemplateBlock>
      <div className="header">결제액의 10%가 자동으로 적립됩니다.</div>
      <MembershipTable columns={column} data={tableData} />
    </MembershipTemplateBlock>
  );
};

export default MembershipTemplate;
