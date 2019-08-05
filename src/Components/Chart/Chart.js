import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';


const Chart = (props) => {
    const { chartData } = props
    return (
        chartData.length ? (
            <Sparklines data={chartData}>
                <SparklinesLine color={props.color} />
            </Sparklines>
        ) :
            (<h2>loading</h2>)
    )

}
export default Chart
