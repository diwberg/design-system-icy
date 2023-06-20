/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../src/pages/**/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    "builder": "@storybook/builder-vite"
  },
  features: { storyStoreV7: true },
  docs: {
    autodocs: true,
    defaultName: 'Component',
  },

  viteFinal: (config, { configType }) => {
    if(configType === 'PRODUCTION') {
      config.base = '/design-system-icy/'
    }

    return config
  }
};
export default config;
