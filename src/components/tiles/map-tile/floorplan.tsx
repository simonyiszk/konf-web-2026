'use client';
import { useRef, useState } from 'react';
import { MdLocationPin } from 'react-icons/md';

import { Map } from './map';

const map = [
  'Regisztrációs pult',
  'PTC',
  'ICF Tech Hungary Kft.',
  'Silicon Laboratories',
  'SEM',
  'WorldQuant',
  'schdesign',
  'Kir-Dev',
  'Nova Services Zrt.',
  'Barré Technologies Zrt.',
  'OTP',
  'Műegyetemi Rádió Club',
  'HA5KFU',
  'Nokia',
  'LEGO Kör',
  'BME Suborbitals',
  'Schönherz Iskolaszövetkezet',
  'Energetikai Szakkollégium',
  'BME Formula Racing Team',
  'BME SharkTeam',
  'VIK',
  'BME Solar Boat Team',
  'HUNOR - Magyar Űrhajós Program',
];

export function Floorplan() {
  const [active, setActive] = useState(-1);
  const ref = useRef<HTMLDivElement>(null);
  return (
    <section className='container'>
      <div className='relative flex flex-col-reverse lg:flex-row w-full rounded-lg justify-center gap-8 lg:gap-16 items-center lg:items-start'>
        <ol className='text-center lg:text-left gap-1 lg:flex-col lg:flex lg:w-1/3'>
          {map.map((name, i) => {
            return (
              <li key={name} className='text-lg'>
                <button
                  type='button'
                  className='group py-0.5 pl-1 text-center lg:text-left'
                  onClick={() => {
                    if (ref.current && window.innerWidth < 1024) {
                      ref.current.scrollIntoView({
                        behavior: 'smooth',
                        inline: 'start',
                      });
                    }
                    setActive(i);
                  }}
                >
                  {i == 0 ? 'R: Regisztrációs pult' : `${i}:  ${name}`}
                  <span>
                    <MdLocationPin
                      className={`inline pb-1 group-hover:text-konf-accent-yellow ${
                        active === i ? 'text-[#ffe500]' : 'text-white'
                      }`}
                    />
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
        <div className='pointer-events-none relative select-none bg-white/20 p-8 rounded-md flex-1 w-full lg:w-2/3 max-h-full flex flex-row justify-center items-center'>
          <Map active={active} />
        </div>
      </div>
    </section>
  );
}
