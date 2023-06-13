"use client";
import React, { FC, useEffect, useState } from "react";
import s from "./Contacts.module.scss";
import { ContactsRoot } from "../types";
import Link from "next/link";
import { Map, Placemark, YMaps, ZoomControl } from "@pbe/react-yandex-maps";

interface ContactsProps {
  data: ContactsRoot[];
}

export const Contacts: FC<ContactsProps> = ({ data }) => {
  const [mapZoom, setMapZoom] = useState(9);
  const initialCoordinates = { lon: 37.57, lat: 55.75 };
  return (
    <div className={s.contacts}>
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
      <div className={s.info}>
        {data.map((e) => (
          <div key={e.id} className={s.item}>
            <h2 className={s.title}>{e.title}</h2>
            <div className={s.address}>{e.address}</div>
            <p className={s.work}>пн-пт: 09:00 - 18:00</p>
            <p className={s.work}>сб-вс: 10:00 - 18:00</p>
            <Link className={s.mail} href={`mailto:${e.email}`}>
              {e.email}
            </Link>
            <Link className={s.phone} href={`tel:${e.phone}`}>
              {e.phone}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
