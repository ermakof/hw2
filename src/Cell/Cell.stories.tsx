import React, { useState, FC } from 'react';
import { action } from '@storybook/addon-actions';
import { Cell } from './Cell';
import { withKnobs, number, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Example/Cell',
  component: Cell,
  decorators: [withKnobs],
};

export const Static = () => {
  return (
    <Cell
      num={number('num', 3)}
      alive={boolean('alive', true)}
      onClick={action('clicked')}
      isRight={boolean('isRight', true)}
      isBottom={boolean('isBottom', true)}
      isLeft={boolean('isLeft', true)}
    />
  );
};

export const Dynamic: FC = () => {
  const [alive, setAlive] = useState(true);
  const num = number('num', 3);
  const onClick = () => {
    setAlive(!alive);
  };

  return (
    <Cell
      num={num}
      alive={alive}
      onClick={onClick}
      isRight={boolean('isRight', true)}
      isBottom={boolean('isBottom', true)}
      isLeft={boolean('isLeft', true)}
    />
  );
};
