import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

export default {
  component: Button,
  title: 'Button',
} as ComponentMeta<typeof Button>;

// export const MyButton = () => {
//     <Button text='hello'></Button>
// }

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const MyButton = Template.bind({});
MyButton.args = {children: 'hello'};