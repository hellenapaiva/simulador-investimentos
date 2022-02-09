import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;   
    background-color: #efefef;
    padding: 0 50px;
   

 
}
  

`;

export const ContainerSimulator = styled.div`
    display: flex;
     
   
    @media (max-width: 768px){
        display: flex;
        width: 100%;       
        justify-content: center;
        align-items: center;
        
 
}
 
`;

export const Tittle = styled.div`
    display: flex;
    justify-content:  center;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
    margin-top: 40px;
`;

export const Header = styled.div`
display: flex;
padding: 40px 0;



`;
