import * as React from "react"
import { Link } from "gatsby"
import { ResponsiveCalendar } from '@nivo/calendar'
import { graphql, useStaticQuery } from "gatsby"
import { makeStyles } from '@material-ui/styles';
import { CardHeader, Button } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';

import Layout from "../components/Layout"
import Seo from "../components/seo"

const useStyles = makeStyles(() => ({
  headerButton: {
    letterSpacing: '0.4px',
  },
}));

export default function ThirdPage(props) {        
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
          day:fieldValue
          value:totalCount
        }
        nodes {
          Date
          English_name_of_performing_troupes__performers_concatenated
          Genres_concatenated
          Performance_Title
          Time
          Venue_concatenated
        }
      }
  }
`)

const [day, setDay] = React.useState("01-01");
var dates=[];
var dataAll = [];
const dataNew = data1.allCopyOfJpsgCsv.group;
dataNew.shift();
  
  return (
  <Layout>
    <Seo title="Page three" />
    <h1>Hi from the third page</h1>
    <p>Welcome to page 3</p>
    <button
        onClick={() => {
        //  alert(dataNew[0].day.slice(0,4) == year)
         alert(JSON.stringify(dataNew.map(event => 
            ({
                day: "2020" + event.day.slice(4,10),
                value: event.value
            })           
             ).map(event => 
                 {
                    if (!dates.includes(event.day)) {
                        dates.push(event.day);
                        dataAll.push({
                            day: event.day,
                            value: event.value
                        })
                    } else {
                        for(var data of dataAll) {
                            if(data.day === event.day) {
                                data.value += event.value
                            }  
                        }
                    }
                    return dataAll
                 }
             )))
        }}
       ></button>

<button
        onClick={() => {
          alert(day)

        //  alert(data1.allCopyOfJpsgCsv.nodes[0].Date.slice(5,10) == day.slice(5,10))
        }}
       ></button>


    <div class="chart" style={{height:500}}>
    <ResponsiveCalendar
        data={dataNew.map(event => 
            ({
                day: "2020" + event.day.slice(4,10),
                value: event.value
            })           
             ).map(event => 
                 {
                    if (!dates.includes(event.day)) {
                        dates.push(event.day);
                        dataAll.push({
                            day: event.day,
                            value: event.value
                        })
                    } else {
                        for(var data of dataAll) {
                            if(data.day === event.day) {
                                data.value += event.value
                            }  
                        }
                    }
                    return dataAll
                 }
             )[0]}
        from={"2020-01-01"}
        to={"2020-12-31"}
        emptyColor="#eeeeee"
        colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'row',
                translateY: 36,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: 'right-to-left'
            }
        ]}
        yearLegend={(year) => ""}
        onClick={(info) => setDay(info.day.slice(5,10))}
        tooltip={function(info){return <h1>{info.day.slice(5,10)}:{info.value}</h1>}}
    />
    </div>
    <div class="Events">
      {data1.allCopyOfJpsgCsv.nodes.filter(node => node.Date.slice(5,10) == day).map(node =>
        <div>
          <h4>{node.Performance_Title}</h4>
          <p>{node.Genres_concatenated}</p>
          <span>{node.Time}</span>
        </div>
              )}
    </div>

    <Link to="/page-2/">Go to page 2</Link> <br />

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)
      }

