import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "@/components/ui/button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger", "success"],
      description: "Button variant style",
      table: {
        type: { summary: "primary | secondary | danger | success" },
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
      description: "Button size",
      table: {
        type: { summary: "default | sm | lg" },
        defaultValue: { summary: "default" },
      },
    },
    children: {
      control: "text",
      description: "Button content",
    },
  },
  args: {
    children: "Button",
    variant: "primary",
    size: "default",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
  },
};

export const SmallSize: Story = {
  args: {
    size: "sm",
  },
};

export const LargeSize: Story = {
  args: {
    size: "lg",
  },
};
