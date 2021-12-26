import * as React from 'react';
import { Resizable } from '../src';
import { storiesOf } from '@storybook/react';
import { style } from './style';

storiesOf('max', module)
  .add('height', () => (
    <Resizable
      style={style}
      defaultSize={{
        width: 200,
        height: 200,
      }}
      maxHeight="400px"
    >
      001
    </Resizable>
  ))
  .add('width', () => (
    <Resizable
      style={style}
      defaultSize={{
        width: 200,
        height: 200,
      }}
      maxWidth="400px"
    >
      001
    </Resizable>
  ))
  .add('percentage', () => (
    <Resizable
      style={style}
      defaultSize={{
        width: 200,
        height: 200,
      }}
      maxWidth="30%"
      maxHeight="50%"
    >
      001
    </Resizable>
  ));
