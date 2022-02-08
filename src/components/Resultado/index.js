import React from 'react';
import Graph from './Chart';
import { CardWrapper, ContainerResult, TextValue } from './styles';


export default function Resultado(props) {

    const { simulator } = props;

    return (
        <ContainerResult>
            <CardWrapper>
                <h2>Valor Bruto Final</h2>
                <TextValue>
                    <h3>R${simulator.valorFinalBruto}</h3>
                </TextValue>
            </CardWrapper>
            <CardWrapper>
                <h2>Alíquota do IR</h2>
                <TextValue>
                    <h3>{simulator.aliquotaIR}%</h3>
                </TextValue>
            </CardWrapper>
            <CardWrapper>
                <h2>Valor Pago em IR</h2>
                <TextValue>
                    <h3>R${simulator.valorPagoIR}</h3>
                </TextValue>
            </CardWrapper>
            <CardWrapper>
                <h2>Valor Final Líquido</h2>
                <TextValue>
                    <h3 style={{ color: "#3d9f2d" }}>R${simulator.valorFinalLiquido}</h3>
                </TextValue>
            </CardWrapper>
            <CardWrapper>
                <h2>Valor Total Investido</h2>
                <TextValue>
                    <h3>R${simulator.valorTotalInvestido}</h3>
                </TextValue>
            </CardWrapper>
            <CardWrapper>
                <h2>Ganho Líquido</h2>
                <TextValue>
                    <h3 style={{ color: "#3d9f2d" }}>R${simulator.ganhoLiquido}</h3>
                </TextValue>
            </CardWrapper>
            <div>
                <Graph simulator={simulator} />
            </div>
        </ContainerResult>
    );
}
