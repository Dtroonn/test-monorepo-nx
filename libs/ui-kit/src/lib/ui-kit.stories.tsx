import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UiKit } from './ui-kit';

export default {
  component: UiKit,
  title: 'UiKit',
} as ComponentMeta<typeof UiKit>;

const Template: ComponentStory<typeof UiKit> = (args) => <UiKit {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
