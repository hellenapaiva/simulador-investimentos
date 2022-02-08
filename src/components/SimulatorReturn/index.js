import { useEffect, useState } from 'react';
import { useForm, } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { RiErrorWarningLine } from 'react-icons/ri'

import { ContainerButtons, Container, ContainerSub, ButtonClick, Input, Span, ContainerIndex, ContainerRend, ButtonSimular, ButtonToggle, FormContainer, Error, WrapResult } from './styles';

import { api } from '../../services/api';
import Resultado from '../Resultado';


const schema = yup.object().shape({
    initialAporte: yup.number().positive().integer().required(),
    deadline: yup.number().positive().integer().required(),
});

export default function Simulator() {


    const typesRend = [
        { label: "Bruto", value: "bruto" },
        { label: "Líquido", value: "liquido" }];
    const typesIndex = [
        { label: "PRÉ", value: "pre" },
        { label: "PÓS", value: "pos" },
        { label: "FIXADO", value: "ipca" }
    ];

    const [activeRend, setActiveRend] = useState(typesRend[0].value);
    const [activeIndex, setActiveIndex] = useState(typesIndex[0].value);
    const [showResult, setShowResult] = useState(false);

    const [indicadores, setIndicadores] = useState([]);
    const [simulators, setSimulators] = useState({});

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });


    useEffect(() => {
        async function getIndicators() {
            const indicators = await api.get('/indicadores/');
            if (indicators.length === 0) {
                console.error('Erro ao carregar os indicadores');
            }
            setIndicadores(indicators.data);
        }
        getIndicators();
    }, [])


    async function getSimulators() {
        const simulators = await api.get(`/simulacoes?tipoRendimento=${activeRend}&tipoIndexacao=${activeIndex}`);
        if (simulators.length === 0) {
            console.error('Erro ao carregar o resultado do simulador');
        }
        setSimulators(simulators.data[0]);
    }

    function handleSimulate(e) {
        setSimulators({ ...simulators })
        setShowResult(true);
        getSimulators();
    }

    return (
        <Container>
            <FormContainer onSubmit={handleSubmit(handleSimulate)}>
                <ContainerRend>
                    <ContainerSub>
                        Rendimentos
                        <RiErrorWarningLine size={20} color="#545454" />
                    </ContainerSub>
                    <ContainerButtons>
                        {typesRend.map((type) => (
                            <ButtonToggle active={activeRend === type.value} onClick={() => setActiveRend(type.value)} >
                                {type.label}
                            </ButtonToggle>
                        ))}
                    </ContainerButtons>
                    <label>
                        Aporte Inicial
                    </label>
                    <Input
                        name="initialAporte"
                        {...register('initialAporte')}
                    />
                    <Error>{errors.initialAporte?.type === 'required' && "O prazo não pode ser vazio"}</Error>
                    <Error>{errors.initialAporte?.type === 'typeError' && "O prazo deve ser um número"}</Error>
                    <label>
                        Prazo (em meses)
                    </label>
                    <Input
                        name="deadline"
                        {...register('deadline')}
                    />
                    <Error>{errors.deadline?.type === 'required' && "O prazo não pode ser vazio"}</Error>
                    <Error>{errors.deadline?.type === 'typeError' && "O prazo deve ser um número"}</Error>
                    <label>
                        IPCA (ao ano)
                    </label>
                    {indicadores.filter(value => (value.nome === 'ipca')).map(value => (
                        <Span>{value.valor}%</Span>
                    ))}
                    <ButtonClick
                    >
                        Limpar campos
                    </ButtonClick>
                </ContainerRend>
                <ContainerIndex >
                    <ContainerSub>
                        Tipos de indexação
                        <RiErrorWarningLine size={20} color="#545454" />
                    </ContainerSub>
                    <ContainerButtons>
                        {typesIndex.map((type) => (
                            <ButtonToggle active={activeIndex === type.value} onClick={() => setActiveIndex(type.value)} >
                                {type.label}
                            </ButtonToggle>
                        ))}
                    </ContainerButtons>
                    <label>
                        Aporte Mensal
                    </label>
                    <Input {...register('monthly')} />
                    <Error>{errors.initialAporte?.type === 'required' && "O aporte não pode ser vazio"}</Error>
                    <Error>{errors.initialAporte?.type === 'typeError' && "O aporte deve ser um número"}</Error>
                    <label>
                        Rentabilidade
                    </label>
                    <Input
                        {...register('profitability')}
                    />
                    <Error>{errors.initialAporte?.type === 'required' && "A rentabilidade não pode ser vazio"}</Error>
                    <Error>{errors.initialAporte?.type === 'typeError' && "A rentabilidade deve ser um número"}</Error>
                    <label>
                        CDI (ao ano)
                    </label>
                    {indicadores.filter(value => (value.nome === 'cdi')).map(value => (
                        <Span>{value.valor}%</Span>
                    ))}
                    <ButtonSimular type="submit">
                        Simular
                    </ButtonSimular>
                </ContainerIndex>
            </FormContainer>
            {showResult && (
                <WrapResult>
                    <Resultado simulator={simulators} />
                </WrapResult>
            )}
        </Container>
    );
}
