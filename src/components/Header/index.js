import React from 'react';
import { Container, Icons, IconsContainer, InputHeader, InputSearch, InputText, TittleHeader } from './styles';
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineClose, AiOutlineHome } from 'react-icons/ai';

export default function Header() {
    return (
        <>
            <Container>
                <TittleHeader>
                    Calculadora de Investimentos
                </TittleHeader>
                <IconsContainer>
                    <Icons>
                        <AiOutlineArrowLeft size={30} color="#545454" />
                    </Icons>
                    <Icons>
                        <AiOutlineArrowRight size={30} color="#545454" />
                    </Icons>
                    <Icons>
                        <AiOutlineClose size={30} color="#545454" />
                    </Icons>
                    <Icons>
                        <AiOutlineHome size={30} color="#545454" />
                    </Icons>
                </IconsContainer>
                <InputHeader>
                    <InputText type="text" />
                    <InputSearch type="text" />
                </InputHeader>
            </Container>
        </>
    );
}
