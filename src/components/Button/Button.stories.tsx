import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Button, { IButton } from './Button';
import { Label } from '..';

export default {
    title: 'minimal-components/Button',
    component: Button,
} as Meta<IButton>;

const Template: StoryFn<IButton> = args => <Button name="default" {...args} />;

export const ClickMe = Template.bind({});

ClickMe.args = {
    children: <Label>{'Click me!'}</Label>,
};
