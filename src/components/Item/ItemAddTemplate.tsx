import axios from 'axios';
import React, { ReactElement, useState } from 'react';
import { NavigateFunction } from 'react-router-dom';
import styled from 'styled-components';
import api from '../../api';
import Button from '../Button';

const ItemAddTemplateBlock = styled.div`
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
  .form {
    display: flex;
    flex-direction: column;
  }

  span {
    font-weight: bold;
  }
`;

const ItemAddTemplate = (): ReactElement => {
  const [inputs, setInputs] = useState({
    it_name: '',
    price: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onClick = async (navigate: NavigateFunction, url: string) => {
    try {
      const res = await axios.post(`${api}/item/add`, {
        it_name: it_name,
        price: price,
      });
      console.log(res);
      navigate(url);
    } catch (e) {
      console.log(e);
    }
  };

  const { it_name, price } = inputs;

  return (
    <ItemAddTemplateBlock>
      <div className="header">
        <Button navFunc={onClick} disabled={false} url={`/item`}>
          <p>추가하기</p>
        </Button>
      </div>
      <div className="form">
        <div>
          <span>이름: </span>
          <input name="it_name" onChange={onChange} value={it_name} />
        </div>
        <div>
          <span>가격: </span>
          <input name="price" onChange={onChange} value={price} />
        </div>
      </div>
    </ItemAddTemplateBlock>
  );
};

export default ItemAddTemplate;
