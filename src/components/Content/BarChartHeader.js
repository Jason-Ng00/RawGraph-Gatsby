import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { CardHeader, Button } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(() => ({
  headerButton: {
    letterSpacing: '0.4px',
  },
}));

const BarChartHeader = (props) => {
  const { data, setDateRange, dateRange, dates } = props;
  const categories = data.allJpsgCsv.distinct;
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

  };

  const handleClose = (date) => {
    setDateRange(date);
    setAnchorEl(null);
  };

  return (
    <CardHeader
      action={
        <div>
          {/* <Button
            className={classes.headerButton}
            size="small"
            variant="text"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            {dateRange} <ArrowDropDownIcon />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => handleClose(dateRange)}
          >
            {dates ?
              dates.map((date) => (
                <MenuItem key={date} onClick={() => handleClose(date)}>{date}</MenuItem>
              ))
             : categories.map((date) => (
                <MenuItem key={date} onClick={() => handleClose(date)}>{date}</MenuItem>
              ))}
          </Menu> */}
        </div>
      }
      title="Performances by Genre"
    />
  );
};

BarChartHeader.propTypes = {
  className: PropTypes.string,
};

export default BarChartHeader;