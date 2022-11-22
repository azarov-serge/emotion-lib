import React from 'react';
import { Switcher } from './Switcher';

const asyncChange = () => {
  return new Promise((res) => {
    setTimeout(res, 2000);
  });
};
export const SwitchersDemo = () => {
  return (
    <>
      <div>
        <Switcher mb={20} checked={true} label="Label" />
      </div>
      <div>
        <Switcher mb={20} checked={true} label="Label" disabled />
      </div>
      <div>
        <Switcher mb={20} />
      </div>
      <div>
        <Switcher mb={20} disabled />
      </div>
      <div>
        <Switcher mb={20} checked={true} onChange={asyncChange} />
      </div>
    </>
  );
};
