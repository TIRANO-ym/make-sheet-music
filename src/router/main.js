import styled from "styled-components";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { useOutletContext } from 'react-router-dom';
import './main.css';

const Wrapper = styled.div`
  width: 100%;
  // max-width: 1500px;
  height: 100%;
`;

export default function Main() {
  const { t } = useTranslation();
  const props = useOutletContext();   // get Outlet props. (ex. props.showLeftMenu)

  useEffect(() => {
    // eslint-disable-next-line
  }, []);

  return <Wrapper className='layout-wrapper'>
    <div class="stave2">
      {/* <div class="half note e4"></div> */}
      <div class="quarter note b5"></div>
      {/* <div class="quarter note c5"></div> */}
    </div>
    <div class="stave2">
      <svg data-pitch="G4" class="note">
        <use href="#note[2]"></use>
      </svg>
      <svg data-pitch="E5" class="note">
        <use href="#note[2]"></use>
      </svg>
    </div>
  </Wrapper>;
}