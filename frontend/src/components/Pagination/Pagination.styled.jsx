
import styled from 'styled-components';

// export const PaginationCont = styled.div`


//   & > * {
//     display: flex;
//     color: ${props => props.active ? 'white' : 'blue'};
//     background-color: ${props => props.active ? 'blue' : 'transparent'};
//     border: 1px solid blue; 
//    padding: 5px 10px;
//     margin: 0 5px;
//     border-radius: 5px;
//     cursor: pointer;
//    }  
// `;
// PaginationCont

export const PaginationCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
     display: flex; 
   align-items: center; 
    justify-content: center; 
    color: ${props => props.active ? 'white' : 'blue'};
    background-color: ${props => props.active ? 'blue' : 'transparent'};
    border: 1px solid blue;
    width: 30px;
    height: 30px;
    margin: 10px -15px;
    /* border-radius: 50%; */
    cursor: pointer;
  }

  & > .prev,
  & > .next {
    display: flex;
    align-items: center;
    justify-content: center;
    color: blue;
    background-color: transparent;
    border: none;
    width: 30px;
    height: 30px;
    margin: 0 5px;
    cursor: pointer;
  }
`;
