import styled from 'styled-components';

export const MainContainer = styled.div`
    
    display: grid;
    place-items: center;
    /* justify-items: center; */
    grid-gap: 25px;
    /* padding: 0 20px; */
    margin: 0 auto;
    /* outline: 1px solid crimson; */
    width: 320px;
    @media screen and (min-width: 768px) {
      /* padding: 0 32px; */
      width: 768px
    }

    @media screen and (min-width: 1280px) {
      /* padding: 0 16px; */
      width: 1280px
    }

    
`
    
    