import styled from "styled-components";

export const ContainerResult = styled.div`
   display: flex;
    flex-wrap: wrap;
     margin-bottom: 200px;
 
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

  @media (max-width: 530px){
      width:100%;
      margin-top: 30px;
      margin-bottom: 10px;
      justify-content: center;
      align-items: center;
  }


  @media (max-width: 1500px){   
      margin-left: 0;   
      margin-bottom: 10px;
  }
  
`;

export const TextValue = styled.h3`
  margin-top: 15px;
  font-size: 16px;
`;