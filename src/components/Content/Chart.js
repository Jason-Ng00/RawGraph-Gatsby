import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { graphql, useStaticQuery } from "gatsby"

import './Chart.css'

export default function Chart(props) {

const data1 = useStaticQuery(graphql`
query {
    allJpsgCsv {
        distinct(field: Performance_types_concatenated)
        one:group(field: Date) {
          fieldValue
          totalCount
        } 
        two:group(field: Performance_types_concatenated) {
              fieldValue
              totalCount
              nodes {
                Genres_concatenated
            }
        }
  }
}
`)


const config1 = {
    keys: data1.allJpsgCsv.distinct,
    margin: {
        "top": 50,
        "right": 130,
        "bottom": 50,
        "left": 60
    },
    defs: [
        {
            "id": "dots",
            "type": "patternDots",
            "background": "inherit",
            "color": "#38bcb2",
            "size": 4,
            "padding": 1,
            "stagger": true
        },
        {
            "id": "lines",
            "type": "patternLines",
            "background": "inherit",
            "color": "#eed312",
            "rotation": -45,
            "lineWidth": 6,
            "spacing": 10
        }
    ],
    fill: [
        {
            "match": {
                "id": "fries"
            },
            "id": "dots"
        },
        {
            "match": {
                "id": "sandwich"
            },
            "id": "lines"
        }
    ],
    axisBottom: {
        "tickSize": 5,
        "tickPadding": 5,
        "tickRotation": 0,
        "legend": "Genre",
        "legendPosition": "middle",
        "legendOffset": 32
    },
    axisLeft: {
        "tickSize": 5,
        "tickPadding": 5,
        "tickRotation": 0,
        "legend": "Number of Performances",
        "legendPosition": "middle",
        "legendOffset": -40
    },
    legends: [
        {
            "dataFrom": "keys",
            "anchor": "bottom-right",
            "direction": "column",
            "justify": false,
            "translateX": 120,
            "translateY": 0,
            "itemsSpacing": 2,
            "itemWidth": 100,
            "itemHeight": 10,
            "itemDirection": "left-to-right",
            "itemOpacity": 0.85,
            "symbolSize": 20,
            "effects": [
                {
                    "on": "hover",
                    "style": {
                        "itemOpacity": 1
                    }
                }
            ]
        }
    ]
}


        return (
            <div>
            <div class="chart">
            <h2>Performances by Genre</h2>
                  {/* <button
        onClick={() => {
         alert(JSON.stringify(data1.allJpsgCsv.two))
        }}
       ></button> */}


                <ResponsiveBar
                    data={data1.allJpsgCsv.two}
                    keys={["totalCount"]}
                    indexBy="fieldValue"
                    margin={config1.margin}
                    padding={0.3}
                    colors="nivo"
                    defs={config1.defs}
                    borderColor="inherit:darker(1.6)"
                    axisTop={null}
                    axisRight={null}
                    axisBottom={config1.axisBottom}
                    axisLeft={config1.axisLeft}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor="inherit:darker(1.6)"
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                />
                </div>


                </div>

        )
}

