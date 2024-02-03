import '@testing-library/react-native/extend-expect';
import * as React from 'react';
import {render, screen} from '@testing-library/react-native';
import {MyButton} from './Button';

import {composeStory} from '@storybook/react';
import Meta, {Basic} from './Button.stories'; //👈 Our stories imported here.

test('examples of some things', async () => {
  render(
    <MyButton
      onPress={jest.fn()}
      text="testing"
      color="purple"
      textColor="white"
    />,
  );

  screen.getByText('testing');

  expect(screen.toJSON()).toMatchSnapshot();
});

const BasicButton = composeStory(Basic, Meta);

test('Checks if the form is valid', () => {
  render(<BasicButton />);

  screen.getByText('Hello World');
});
