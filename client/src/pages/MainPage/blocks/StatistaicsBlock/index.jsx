import React from "react";
import s from "./statistics.module.scss";

const StatisticsBlock = () => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <p className={s.num}>1</p>
        Clinics
      </div>
      <div className={s.container}>
        <p className={s.num}>2k+</p>
        Reviews
      </div>
      <div className={s.container}>
        <p className={s.num}>1000+</p>
        Donors
      </div>
      <div className={s.container}>
        <p className={s.num}>900+</p>
        Patients
      </div>
    </div>
  );
};

export default StatisticsBlock;
