import React from "react";
import s from "./maps.module.scss";
import { Map, YMaps } from "@pbe/react-yandex-maps";
import Hr from "../../../../UI/Hr";

const MapsBlock = () => {
  return (
    <YMaps
      showUserPosition={true}
      rotateGesturesEnabled={false}
      nightMode={true}
      mapType={"vector"}
      initialRegion={{
        lat: 30,
        lon: 30,
        zoom: 7,
        azimuth: 0,
      }}
    >
      <div className={s.root}>
        <div className={s.container}>
          <h1>КАК НАС НАЙТИ</h1>
          <Hr />
          <p>
            Вы можете связаться с нами по номеру{" "}
            <a href="+998999371889">+998999371889</a>
            <br />
            по
            <a href="https://t.me/pythonnn_alish_bot"> телеграмм боту</a>
            <br />
            или по карте
          </p>
        </div>

        <Map
          className={s.map}
          defaultState={{ center: [41,69], zoom: 9 }}
        />
      </div>
    </YMaps>
  );
};

export default MapsBlock;
