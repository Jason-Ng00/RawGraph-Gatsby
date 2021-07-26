import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { graphql, useStaticQuery } from "gatsby"
import data from './data'
import config from './config'
import Checkbox from '@material-ui/core/Checkbox';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/styles';
import { CardHeader, Button } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import BarChartHeader from "./BarChartHeader";


import './chart.css'

const columns = [
    { field: 'id', headerName: 'ID', width: 170 },
    { field: 'name', headerName: 'NAME', width: 170 },
    { field: 'age', headerName: 'AGE', width: 170 },
  ];
    
  const rows = [
    { id: 1, name: 'Gourav', age: 12 },
    { id: 2, name: 'Geek', age: 43 },
    { id: 3, name: 'Pranav', age: 41 },
  ];
    
  const useStyles = makeStyles(() => ({
    root: {},
    chartContainer: {
      position: 'relative',
      padding: '19px 0',
    },
  }));






export default function Chart(props) {
const { className, query, dates, ...rest } = props;
const classes = useStyles();

const data1 = useStaticQuery(graphql`
query {
    allJpsgCsv {
        distinct(field: Performance_types_concatenated)
        group(field: Performance_types_concatenated) {
          fieldValue
          totalCount
          nodes {
            Genres_concatenated
          }
        }
      }
      allCopyOfJpsgCsv {
        group(field: Date) {
          fieldValue
          totalCount
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
        "legend": "country",
        "legendPosition": "middle",
        "legendOffset": 32
    },
    axisLeft: {
        "tickSize": 5,
        "tickPadding": 5,
        "tickRotation": 0,
        "legend": "food",
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
            "itemHeight": 20,
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


const [dateRange, setDateRange] = React.useState(dates ? dates[0] : 'All');

        return (
            <div>
        <BarChartHeader data={data1} dates={dates} dateRange={dateRange} setDateRange={setDateRange} />

            <div class="chart">
                  <button
        onClick={() => {
         alert(JSON.stringify(data1.allJpsgCsv.group))
        }}
       ></button>
       {/* <DataGrid rows={rows} 
                columns={columns} 
                pageSize={2}
        filterModel={{
          items: [
            { columnField: 'name',
              operatorValue: 'contains', 
              value: 'Geek' },
          ],
        }}
      /> */}

                <ResponsiveBar
                    data={data1.allJpsgCsv.group}
                    keys={["totalCount"]}
                    indexBy="fieldValue"
                    margin={config1.margin}
                    padding={0.3}
                    colors="nivo"
                    defs={config1.defs}
                    fill={config1.fill}
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

