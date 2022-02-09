import styled from "styled-components";

export const ContainerResult = styled.div`
   display: flex;
    flex-wrap: wrap;
     margin-bottom: 200px;

       
    @media (max-width: 768px){
    display: flex;
    flex-direction: column;
   
    
    }
`;

export const ContainerCard = styled.div`
    display: flex;
    flex-wrap: wrap;

    
    @media (max-width: 768px){
    display: flex;        
 
}
    
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 40px;
  margin-bottom: 40px;
  width: 350px;
  height: 110px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;

  @media (max-width: 768px){
      
    width: 300px;
      margin-top: 30px;
      margin-bottom: 10px;
      
      align-items: center;

  }
  
`;

export const TextValue = styled.h3`
  margin-top: 15px;
  font-size: 16px;
`;

export const ContainerChart = styled.div`
  display: flex;
  width: 1000px;
  height: auto; 
  flex-direction: column;
    margin-top: 50px;
  

  @media (max-width: 768px) {     
        display: flex;
        width:300px;
        
         align-items: center;
    } 

  

 
`;