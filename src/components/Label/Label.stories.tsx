import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Label, ILabel } from './Label';

const text = '`1234567890-=qwertyuiop[]asdfghjkl;zxcvbnm,./~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?';

export default {
    title: 'minimal-components/Label',
    component: Label,
} as Meta<ILabel>;

const Template: StoryFn<ILabel> = args => <Label name="default" {...args} />;

export const LabelComponent = Template.bind({});
LabelComponent.args = {
    children: text,
};
