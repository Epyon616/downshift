module.exports = {
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/index.ts'],
    moduleNameMapper: {'^.+\\.s?css$': 'identity-obj-proxy', "^.+\\.svg$": "jest-svg-transformer"},
    transform: {'^.+\\.tsx?$': 'babel-jest'},
    testRegex: '/.*\\.test\\.tsx?$',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    setupFiles: [],
    testPathIgnorePatterns: [
        '__snapshots__',
        '__mocks__',
        '<rootDir>/scripts',
    ],
    preset: 'ts-jest',
    transform: {
      '^.+\\.(ts|tsx)?$': [
        'ts-jest',
        {
          diagnostics: {
            ignoreCodes: [1343]
          },
          astTransformers: {
            before: [
              {
                path: 'ts-jest-mock-import-meta',  // or, alternatively, 'ts-jest-mock-import-meta' directly, without node_modules.
                options: { metaObjectReplacement: { url: 'https://www.url.com' } }
              }
            ]
          } 
        }
      ],
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    testEnvironment: 'jsdom'
};