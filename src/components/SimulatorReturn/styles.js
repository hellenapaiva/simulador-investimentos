import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;

    @media (max-width:900px){
    display: flex;
    height: auto;
    flex-direction: column; 
   
    justify-content: center;
         
 
}
`;

export const WrapperGeneral = styled.div`
    display: flex;

@media (max-width: 900px){
    display: flex;
    flex-direction: column;    
    justify-content: center;
    align-items: center;
    gap: 40px;         
 
}
`
export const FormContainer = styled.form`
    display:flex;  
    
    @media (max-width: 900px){
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
    
         
 
}
`;

export const ContainerRend = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    margin-right: 20px;  
    gap: 15px;
    
`;

export const ContainerIndex = styled.div`
    display: flex;
    flex-direction: column;
      width: 200px;
    gap: 15px;

 
      
`;
export const Header = styled.div`
    display: flex;
    padding: 40px 0;

`;
export const ContainerSub = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const Tittle = styled.div`
    font-size: 2em;
    font-weight: bold;
`;

export const ContainerButtons = styled.div`
    display: flex;   
    margin-bottom: 15px;
`;

export const ButtonClick = styled.button`
    display: flex;
    padding: 15px;
    border: 1px solid #000;
    border-radius:10px;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
    margin-top: 15px;
`;

const Button = styled.button`
flex: 1 1 auto;
padding: 12px;
border-radius: 5px; 
border: 1px solid #000;

`;

export const ButtonSimular = styled.button`
    background-color: #ed8e53;
    display: flex;
    padding: 15px;
    border: none;
    border-radius:10px;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
    margin-top: 15px;
`;

export const ButtonToggle = styled(Button)`     
background-color: ${props => props.active ? '#ed8e53' : '#efefef'};
color: ${props => props.active ? '#fff' : '#000'};   
margin-bottom: 20px;  
margin-top: 20px;
`;

export const Input = styled.input`
    background-color: #efefef;
    border: none;
    border-bottom: 1px solid #000;
    padding: 10px; 
    margin-bottom: 20px;     
`;

export const Span = styled.span`
    background-color: #efefef;
    border: none;
    border-bottom: 1px solid #000;
    padding: 10px;   
    margin-bottom: 20px;    
`;

export const Error = styled.div`
    color: red;
    font-size: 12px;
    margin-top: -30px;
    margin-bottom: 20px;
`;

export const WrapResult = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;

    
    
`;


