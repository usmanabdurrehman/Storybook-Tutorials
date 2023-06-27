import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";
import { expect } from "@storybook/jest";
import { within, userEvent } from "@storybook/testing-library";

const meta = {
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const baseParams = {
  parameters: {
    backgrounds: { values: [{ name: "black", value: "#000" }] },
  },
};

export const Base = {
  ...baseParams,
  args: { label: "Sign up" },
};

export const Colored: Story = {
  ...baseParams,
  args: { label: "Sign up", backgroundColor: "#f7ff00" },
};

export const TestButton: Story = {
  args: { label: "Click Me" },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId("button"));
    await expect(args.onClick).toHaveBeenCalled();
  },
};
