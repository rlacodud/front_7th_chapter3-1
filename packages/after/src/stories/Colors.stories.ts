import type { Meta, StoryObj } from "@storybook/react-vite";
import { ColorPalette } from "@/components/ColorPalette";

const meta = {
  title: "Design System/Colors",
  component: ColorPalette,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "디자인 시스템에서 사용하는 색상 팔레트입니다. Primitive 색상과 Semantic 색상으로 구성되어 있습니다.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ColorPalette>;

export default meta;
type Story = StoryObj<typeof meta>;

// Gray Scale
const grayScale = {
  name: "Gray",
  colors: [
    { label: "50", value: "#fafafa", variable: "--gray-50" },
    { label: "100", value: "#f5f5f5", variable: "--gray-100" },
    { label: "200", value: "#e0e0e0", variable: "--gray-200" },
    { label: "250", value: "#dddddd", variable: "--gray-250" },
    { label: "300", value: "#d1d5db", variable: "--gray-300" },
    { label: "350", value: "#cccccc", variable: "--gray-350" },
    { label: "400", value: "#bdbdbd", variable: "--gray-400" },
    { label: "500", value: "#757575", variable: "--gray-500" },
    { label: "550", value: "#666666", variable: "--gray-550" },
    { label: "600", value: "#565656", variable: "--gray-600" },
    { label: "700", value: "#424242", variable: "--gray-700" },
    { label: "800", value: "#333333", variable: "--gray-800" },
  ],
};

// Chromatic Colors
const chromaticScales = [
  {
    name: "Blue",
    colors: [
      { label: "50", value: "#e3f2fd", variable: "--blue-50" },
      { label: "200", value: "#90caf9", variable: "--blue-200" },
      { label: "400", value: "#1976d2", variable: "--blue-400" },
      { label: "500", value: "#1565c0", variable: "--blue-500" },
      { label: "900", value: "#0d47a1", variable: "--blue-900" },
    ],
  },
  {
    name: "Cyan",
    colors: [{ label: "500", value: "#0288d1", variable: "--cyan-500" }],
  },
  {
    name: "Green",
    colors: [
      { label: "50", value: "#e8f5e9", variable: "--green-50" },
      { label: "200", value: "#81c784", variable: "--green-200" },
      { label: "500", value: "#388e3c", variable: "--green-500" },
      { label: "600", value: "#2e7d32", variable: "--green-600" },
      { label: "900", value: "#1b5e20", variable: "--green-900" },
    ],
  },
  {
    name: "Orange",
    colors: [
      { label: "50", value: "#fff3e0", variable: "--orange-50" },
      { label: "200", value: "#ffb74d", variable: "--orange-200" },
      { label: "500", value: "#f57c00", variable: "--orange-500" },
      { label: "900", value: "#e65100", variable: "--orange-900" },
    ],
  },
  {
    name: "Red",
    colors: [
      { label: "50", value: "#ffebee", variable: "--red-50" },
      { label: "200", value: "#e57373", variable: "--red-200" },
      { label: "500", value: "#d32f2f", variable: "--red-500" },
      { label: "600", value: "#c62828", variable: "--red-600" },
      { label: "900", value: "#b71c1c", variable: "--red-900" },
    ],
  },
];

// Base Colors
const baseScale = {
  name: "Base",
  colors: [
    { label: "White", value: "#ffffff", variable: "--white" },
    { label: "Black", value: "#000000", variable: "--black" },
  ],
};

export const Gray: Story = {
  args: {
    title: "Gray",
    scales: [grayScale],
  },
};

export const Chromatic: Story = {
  args: {
    title: "Chromatic",
    scales: chromaticScales,
  },
};

export const AllPrimitive: Story = {
  args: {
    title: "Color Palette",
    scales: [grayScale, ...chromaticScales, baseScale],
  },
};

// Semantic Colors
const semanticScales = [
  {
    name: "Backgrounds",
    colors: [
      {
        label: "Background",
        value: "#ffffff",
        variable: "--color-background",
      },
      {
        label: "Muted",
        value: "#fafafa",
        variable: "--color-background-muted",
      },
      {
        label: "Card",
        value: "#ffffff",
        variable: "--color-card",
      },
      {
        label: "Primary",
        value: "#1976d2",
        variable: "--color-primary",
      },
      {
        label: "Secondary",
        value: "#f5f5f5",
        variable: "--color-secondary",
      },
      {
        label: "Danger",
        value: "#d32f2f",
        variable: "--color-danger",
      },
      {
        label: "Success",
        value: "#388e3c",
        variable: "--color-success",
      },
      {
        label: "Warning",
        value: "#f57c00",
        variable: "--color-warning",
      },
      {
        label: "Info",
        value: "#0288d1",
        variable: "--color-info",
      },
      {
        label: "Muted",
        value: "#757575",
        variable: "--color-muted",
      },
    ],
  },
  {
    name: "Text",
    colors: [
      {
        label: "Foreground",
        value: "#333333",
        variable: "--color-foreground",
      },
      {
        label: "Secondary",
        value: "#424242",
        variable: "--color-text-secondary",
      },
      {
        label: "Tertiary",
        value: "#666666",
        variable: "--color-text-tertiary",
      },
      {
        label: "Disabled",
        value: "#757575",
        variable: "--color-text-disabled",
      },
    ],
  },
  {
    name: "Borders",
    colors: [
      {
        label: "Border",
        value: "#bdbdbd",
        variable: "--color-border",
      },
      {
        label: "Light",
        value: "#dddddd",
        variable: "--color-border-light",
      },
      {
        label: "Primary",
        value: "#1565c0",
        variable: "--color-border-primary",
      },
      {
        label: "Danger",
        value: "#c62828",
        variable: "--color-border-danger",
      },
      {
        label: "Success",
        value: "#2e7d32",
        variable: "--color-border-success",
      },
    ],
  },
];

export const Semantic: Story = {
  args: {
    title: "Color Roles",
    scales: semanticScales,
  },
};

