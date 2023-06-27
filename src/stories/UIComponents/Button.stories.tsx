import { Button } from "../Button";
import { expect } from "@storybook/jest";
import { within, userEvent } from "@storybook/testing-library";

import type { Meta, StoryFn, StoryObj } from "@storybook/react";

const meta = {
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Button>;

// const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

// export const Base = Template.bind({});

// Base.args = {
//   label: "Sign up",
// };

const baseParams = {
  parameters: { backgrounds: { values: [{ name: "black", value: "#000" }] } },
};

export const Base: StoryObj<typeof Button> = {
  ...baseParams,
  args: { label: "Sign up" },
};

export const TestButton: StoryObj<typeof Button> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId("button"));
    await expect(args.onClick).toHaveBeenCalled();
  },
  args: {
    label: "Click Me",
  },
};

export default meta;
