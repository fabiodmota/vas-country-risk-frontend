/* eslint-disable no-console */
import React, { useState } from "react";
import { Button } from "cx-portal-shared-components";
import "./styles.scss";
import DashboardTable from "./DashboardTable";
import DatePicker from "./DatePicker";
import RangeSlider from "./RangeSlider";
import Ratings from "./Ratings";
import UploadDownloadZone from "./UploadDownloadZone";
import { getAll } from "../services/dashboard-api";
import CustomWorldMap from "./CustomWorldMap";
import LeftMap from "./LeftMap";

const Dashboard = () => {
  const [ratings, setRatings] = useState("");

  const [years, setYears] = useState("");

  const [rangeValues, setRangeValues] = useState("");

  const passValuesFromComponent = (rates) => {
    setRatings(rates);
  };

  const passYearSelected = (yearSelected) => {
    setYears(yearSelected);
  };

  return (
    <div className="wrapper">
      <div className="main-content">
        <div className="maps">
          <LeftMap getRatings={ratings} years={years}></LeftMap>
          <img alt="mapping" className="right-map" src="right_map.PNG"></img>
        </div>

        <DashboardTable getRatings={ratings} years={years}></DashboardTable>
      </div>
      <div className="right-content">
        <div className="right-upper-content">
          <div className="right-data-picker-content">
            <DatePicker
              className="DateForm"
              passYearSelected={passYearSelected}
            ></DatePicker>
          </div>
          <div className="divider"></div>
          <div className="right-upper-right-content"></div>
        </div>
        <div>
          <Ratings
            passValuesFromComponent={passValuesFromComponent}
            years={years}
          ></Ratings>
        </div>
        <div className="right-middle-bottom-content">
          <UploadDownloadZone></UploadDownloadZone>
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
