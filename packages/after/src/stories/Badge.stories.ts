import type { Meta, StoryObj } from "@storybook/react-vite";

import { Badge } from "@/components/ui/badge";

const meta = {
  title: "UI/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "danger", "warning", "info", "muted"],
      description: "Badge variant style",
      table: {
        type: {
          summary: "default | success | danger | warning | info | muted",
        },
        defaultValue: { summary: "default" },
      },
    },
    radius: {
      control: "select",
      options: ["default", "lg"],
      description: "Border radius size",
      table: {
        type: { summary: "default | lg" },
        defaultValue: { summary: "default" },
      },
    },
    children: {
      control: "text",
      description: "Badge content",
    },
  },
  args: {
    children: "Badge",
    variant: "default",
    radius: "default",
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Success",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Danger",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Warning",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    children: "Info",
  },
};

export const Muted: Story = {
  args: {
    variant: "muted",
    children: "Muted",
  },
};

export const RadiusLarge: Story = {
  args: {
    radius: "lg",
    children: "Large Radius",
  },
};
