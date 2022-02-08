import styled from "styled-components";

export const Container = styled.div`
    height: 100px;
    padding: 0 30px;
    background: #efefef;
    color: #000;
    display: flex;   
`;

export const IconsContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;    
    `;

export const Icons = styled.div`
    margin-right: 15px;
    cursor: pointer;
`;

export const TittleHeader = styled.div`
   position: absolute;
 
    top: 2%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)     
`;

export const InputHeader = styled.div`
    width: 100%;
   flex-direction: row;
   display: flex;
   justify-content: center;
   align-items: center;

`;

export const InputText = styled.input`
    width: 100%;
    height: 30px;    
    border: none;
    border-radius: 10px;
    margin-right: 10px;
  
    outline: none;
   
`;
export const InputSearch = styled.input`
    width: 40%;
    height: 30px;    
    border: none;
    border-radius: 10px;
    outline: none;
    
`;

