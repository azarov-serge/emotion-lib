import React from 'react';
import { Color } from '../@themes/foodCity/color';
import { Icon } from './Icon';
import { IconNameEnum, IconProps } from './types';

export const IconsDemo = () => {
  const tmp: [number, string][] = [
    [24, Color.Red_Tomato],
    [48, Color.Black_Oven],
    [64, Color.Black_Oven_35],
  ];

  return (
    <>
      {tmp.map((el) => {
        const [size, fill] = el;

        return (
          <div
            style={{ paddingTop: 30, display: 'flex', flexWrap: 'wrap' }}
            key={size}
          >
            {(Object.keys(IconNameEnum) as IconProps['name'][]).map((key) => {
              if (key === 'spinner') {
                return (
                  <div style={{ padding: 20 }} key={key}>
                    <Icon
                      name="spinner"
                      width={size}
                      height={size}
                      rotate
                      iconStyles={{
                        stroke: fill,
                        strokeWidth: 2,
                      }}
                    />
                  </div>
                );
              }
              return (
                <div style={{ padding: 20 }} key={key}>
                  <Icon name={key} width={size} height={size} fill={fill} />
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};
