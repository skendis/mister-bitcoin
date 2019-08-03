import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';


const Chart = (props) => {
    const { chartData } = props
    console.log(chartData)
    return (
        chartData.length ? (
            <Sparklines data={chartData}>
                <SparklinesLine color="orange" />
            </Sparklines>
        ) :
            (<h2>loading</h2>)
    )

}
export default Chart
