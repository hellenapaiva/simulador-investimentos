import React from 'react';
import Chart from "react-apexcharts";
import { ContainerChart } from './styles';

export default function Graph(props) {

    const { simulator = {} } = props;
    const { graficoValores = {} } = simulator;
    const { comAporte = {}, semAporte = {} } = graficoValores;
    const valoresComAporte = Object.values(comAporte).map(value => value.toFixed());
    const valoresSemAporte = Object.values(semAporte).map(value => value.toFixed());

    var options = {
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
        },
        plotOptions: {
            bar: {
                horizontal: false,

            },
        },
        stroke: {
            width: 1,
            colors: ['#fff']
        },
        title: {
            text: 'Projeção de valores'
        },
        xaxis: {
            categories: Object.keys(new Array(valoresComAporte.length).fill(null)),
            label: []

        },
        yaxis: {
            title: {
                text: undefined
            },
        },

        fill: {
            opacity: 1
        },
        colors: ['#000', '#ed8e53'],




        legend: {
            position: 'bottom',
            horizontalAlign: 'center',



        }
    }
    const series = [
        {
            name: 'Sem Aporte',
            data: valoresSemAporte
        },
        {
            name: 'Com Aporte',
            data: valoresComAporte

        }
    ]

    return (
        <ContainerChart>

            <Chart
                options={options}
                type="bar"
                height="300"
                series={series}

            />
        </ContainerChart>

    );
}

