import {ChartDiv,ChartTitle} from './ChartElem';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart({title,data,dataKey,grid}) {

    
    return (
        <ChartDiv>
            <ChartTitle>{title}</ChartTitle>
            <ResponsiveContainer width='100%' aspect={4/1}>
            <LineChart data={data}>
            <XAxis dataKey='name' stroke='#5550bd'/>
            <Line type='monotone' dataKey={dataKey[0]} stroke='#5550bd'/>
            <Line type='monotone' dataKey={dataKey[1]} stroke='#555'/>
            <Line type='monotone' dataKey={dataKey[2]} stroke='#cdac79'/>
            <Tooltip/>
            {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5'/>}
            </LineChart>
            </ResponsiveContainer>
        </ChartDiv>
    )
}
