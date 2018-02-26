import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, number, boolean } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import Select from '../components/Select';

const selectOptions = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' },
  { value: 'four', label: 'Four' },
  { value: 'five', label: 'Five' }
];

const SelectStory = storiesOf('Select', module)
  .add('with options', withInfo(`
    ~~~js
    <Select
      name="select-story"
      options={[
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two' },
      ]}
    />
    ~~~
  `)(() => {
    return (
      <Select
        name="select-story"
        onChange={this.handleChange}
        options={selectOptions}
      />
    );
  }));

export default SelectStory;