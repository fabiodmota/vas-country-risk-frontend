/* eslint-disable no-console */
import React, { useState, useEffect, Component } from "react";
import { Button, Dropzone } from "cx-portal-shared-components";
import "./styles.scss";
import DashboardTable from "./DashboardTable";
import DatePicker from "./DatePicker";
import RangeSlider from "./RangeSlider";
import RatingsTable from "./RatingsTable";
import UploadButton from "./UploadButton";

const Dashboard = () => {
  return (
    <div className="wrapper">
      <div className="main-content">
        <div className="maps">
          <img alt="mapping" className="left-map" src="left_map.PNG" />
          <img alt="mapping" className="right-map" src="right_map.PNG"></img>
        </div>
        <DashboardTable></DashboardTable>
      </div>
      <div className="right-content">
        <div className="right-upper-content">
          <div className="right-upper-left-content">
            <DatePicker className="DateForm"></DatePicker>
          </div>
          <div className="divider"></div>
          <div className="right-upper-right-content">
            <Button title="RefreshButton">Refresh</Button>
          </div>
        </div>
        <div className="right-middle-content">
          <RatingsTable className="ratingtable"></RatingsTable>
        </div>
        <div className="right-middle-bottom-content">
          <UploadButton></UploadButton>
        </div>
        <div className="right-bottom-content">
          <div className="slider-header">
            <Button className="SaveRange" size="small">
              Save Ranges
            </Button>
          </div>
          <RangeSlider></RangeSlider>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
