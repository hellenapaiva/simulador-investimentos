import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;   
    background-color: #efefef;
    padding: 0 50px;
   

    
    @media (max-width: 530px){  /* Responsive */       
        display: flex;
        background-color: #efefef
        width: 100%;
        
       justify-content: center;
       align-items: center;        
 
}

`;

export const ContainerSimulator = styled.div`

    display: flex;
    gap: 24px;
   

    @media (max-width: 530px){
        display: flex;
        flex-direction: column;     
        background-color: #efefef;
        width: 100%;       
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
