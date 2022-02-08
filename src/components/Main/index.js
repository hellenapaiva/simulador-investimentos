import React from 'react';

import SimulatorReturn from '../SimulatorReturn';
import { Container, ContainerSimulator, Tittle, Header } from './styles';

export default function Main() {
    return (

        <Container>
            <Tittle>Simulador de Investimentos</Tittle>
            <Header>
                <Tittle>Simulador</Tittle>
            </Header>
            <ContainerSimulator>
                <SimulatorReturn />
            </ContainerSimulator>
        </Container>
    )
}
