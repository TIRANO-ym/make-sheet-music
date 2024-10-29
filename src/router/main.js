import styled from "styled-components";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { useOutletContext } from 'react-router-dom';

const Wrapper = styled.div`
  display: grid;
  gap: 50px;
  grid-template-columns: 20% 3fr;
  padding: 50px;
  width: 100%;
  max-width: 1500px;
  height: 100%;
`;

export default function Main() {
  const { t } = useTranslation();
  const props = useOutletContext();   // get Outlet props. (ex. props.showLeftMenu)

  useEffect(() => {
    // eslint-disable-next-line
  }, []);

  return <Wrapper className='layout-wrapper'>
    Main!
  </Wrapper>;
}