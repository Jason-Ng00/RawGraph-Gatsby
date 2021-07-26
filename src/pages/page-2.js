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

const ChartHeader = (props) => {
  const { data, defaultYear , year, setYear} = props;
  const categories = ["2020","2019","2018","2017","2016","2015"];
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (year) => {
    setYear(year);
    setAnchorEl(null);
  };

  return (
    <CardHeader
      action={
        <div>
          <Button
            className={classes.headerButton}
            size="small"
            variant="text"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            {year} <ArrowDropDownIcon />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => handleClose(year)}
          >
            {categories.map((year) => (
                <MenuItem key={year} onClick={() => handleClose(year)}>{year}</MenuItem>
              ))}
          </Menu>
        </div>
      }
      title="Performances Calendar"
    />
  );
};

ChartHeader.propTypes = {
  className: PropTypes.string,
};


export default function SecondPage(props) {        
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


const [year, setYear] = React.useState('2020');
const [day, setDay] = React.useState(null);

const dataNew = data1.allCopyOfJpsgCsv.group;
dataNew.shift();
  
  return (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <button
        onClick={() => {
        //  alert(dataNew[0].day.slice(0,4) == year)
         alert(JSON.stringify(dataNew.filter(event => event.day.slice(0,4) == year)))
        }}
       ></button>

  <ChartHeader data={data1} defaultYear="2020" year={year} setYear={setYear} />

    <div class="chart" style={{height:500}}>
    <ResponsiveCalendar
        data={dataNew.filter(event => event.day.slice(0,4) == year)}
        from={year +  "-01-01"}
        to={year + "-12-31"}
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
        onClick={(info) => setDay(info.day)}
    />
    </div>
    <div class="Events">
      {data1.allCopyOfJpsgCsv.nodes.filter(node => node.Date == day).map(node =>
        <div>
          <h4>{node.Performance_Title}</h4>
          <p>{node.Genres_concatenated}</p>
          <span>{node.Time}</span>
        </div>
              )}
    </div>
    <br />
    <Link to="/page-3/">Go to page 3</Link>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)
      }

