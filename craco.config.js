const CracoLessPlugin = require('craco-less');
const pathSeparatorPattern = '[/\\\\]';

module.exports = {
  // jest: {
  //   configure: {
  //     roots: ['<rootDir>/src', '<rootDir>/spec'],
  //     testMatch: ['<rootDir>/spec/**/*.{spec,test}.{js,jsx,ts,tsx}'],
  //     // setupFilesAfterEnv: ['<rootDir>/template/src/setupTests.ts'],
  //     // transform: { '^.+\\.(ts|tsx|js|jsx)?$': 'jest.config.js' },
  //   },
  // },
  jest: {
    configure: jestConfig => {
      const transformIgnorePatterns = jestConfig.transformIgnorePatterns;

      const indexOfNodeModulesPattern = transformIgnorePatterns.findIndex(p =>
        p.includes(`node_modules${pathSeparatorPattern}`),
      );
      if (indexOfNodeModulesPattern === -1) {
        throw new Error(
          "Can't find node_modules pattern in transformIgnorePatterns!",
        );
      }

      const nodeModulesPattern =
        transformIgnorePatterns[indexOfNodeModulesPattern];
      transformIgnorePatterns[indexOfNodeModulesPattern] =
        nodeModulesPattern.replace(
          `node_modules${pathSeparatorPattern}`,
          `node_modules${pathSeparatorPattern}(?!(antd|@ant-design|rc-.+?|@babel/runtime)${pathSeparatorPattern})`,
        );

      return jestConfig;
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#7346F8' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
