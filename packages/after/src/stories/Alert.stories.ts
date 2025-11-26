import type { Meta, StoryObj } from "@storybook/react-vite";

import { InfoAlert } from "@/components/InfoAlert";

const meta = {
  title: "UI/InfoAlert",
  component: InfoAlert,
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
    variant: "success",
    title: "Title",
    description: "Description",
  },
} satisfies Meta<typeof InfoAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
