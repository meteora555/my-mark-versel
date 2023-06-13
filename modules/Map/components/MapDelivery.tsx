"use client";
import React, { FC, useState } from "react";
import { Title } from "@/components/ui/Title/Title";

import s from "./Map.module.scss";
import { Map, Placemark, YMaps, ZoomControl } from "@pbe/react-yandex-maps";
import { ContactsRoot } from "@/modules/Contacts/types";

interface ContactsProps {
  data: ContactsRoot[];
}

export const MapDelivery: FC<ContactsProps> = ({ data }) => {
  const [mapZoom, setMapZoom] = useState(9);
  const initialCoordinates = { lon: 37.57, lat: 55.75 };
  return (
    <div className={s.container}>
      <Title className={"mb-[25px]"}>Пункты выдачи</Title>
      <div className={s.mapWrapper}>
        <YMaps>
          <Map
            className={s.map}
            defaultState={{
              center: [initialCoordinates.lat, initialCoordinates.lon],
              zoom: 9,
            }}
            state={{
              center: [initialCoordinates.lat, initialCoordinates.lon],
              zoom: mapZoom,
              controls: [],
            }}
          >
            {data.map((e, index) => (
              <Placemark
                key={e.id}
                modules={["geoObject.addon.balloon"]}
                defaultGeometry={[
                  initialCoordinates.lat,
                  initialCoordinates.lon,
                ]}
                geometry={[e.longitude, e.latitude]}
                properties={{
                  balloonContentBody: `${e.title}`,
                }}
                options={{
                  hideIconOnBalloonOpen: false,
                  balloonCloseButton: true,
                  openBalloonOnClick: true,
                }}
              />
            ))}
            <ZoomControl />
          </Map>
        </YMaps>
      </div>
    </div>
  );
};
