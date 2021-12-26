import * as React from 'react';
import { Resizable } from '../src';
import { storiesOf } from '@storybook/react';
import { style } from './style';

storiesOf('multiple', module)
  .add('horizontal', () => (
    <div
      style={{
        width: '100%',
        display: 'flex',
        overflow: 'hidden',
      }}
    >
      <Res