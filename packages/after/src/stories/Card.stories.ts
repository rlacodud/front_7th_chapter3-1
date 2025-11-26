import type { Meta, StoryObj } from "@storybook/react-vite";

import { InfoCard } from "@/components/InfoCard";

const meta = {
  title: "UI/InfoCard",
  component: InfoCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["success", "danger", "warning", "info", "muted"],
      description: "Badge variant style",
      table: {
        type: {
          summary: "success | danger | warning | info | muted",
        },
        defaultValue: { summary: "default" },
      },
    },
    title: {
      control: "text",
      description: "Alert Title content",
    },
    description: {
      control: "text",
      description: "Alert Description content",
    },
  },
  args: {
    title: "Title",
    description: "Description",
    variant: "success",
  },
} satisfies Meta<typeof InfoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Danger: Story = {
  args: {
    variant: "danger",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
  },
};

export const Muted: Story = {
  args: {
    variant: "muted",
  },
};
