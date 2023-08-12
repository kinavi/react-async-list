import React from 'react';
import {
  LoaderCircle,
  LoaderItem4,
  LoaderItem6,
  LoaderItem7,
  LoaderItem8,
  LoaderItem5,
  LoaderItem9,
  LoaderItem11,
  LoaderItem10,
  LoaderItem2,
  LoaderItem12,
  LoaderItem3,
  LoaderContainer,
} from './styled';

type LoaderPropsType = {
  className?: string;
};
export const Loader = ({ className }: LoaderPropsType) => (
  <LoaderContainer className={className}>
    <LoaderCircle />
    <LoaderItem2 />
    <LoaderItem3 />
    <LoaderItem4 />
    <LoaderItem5 />
    <LoaderItem6 />
    <LoaderItem7 />
    <LoaderItem8 />
    <LoaderItem9 />
    <LoaderItem10 />
    <LoaderItem11 />
    <LoaderItem12 />
  </LoaderContainer>
);
