export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./src/setupTests.js'], 
  
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|jpg|jpeg|png|svg)$': '<rootDir>/src/__mocks__/fileMock.js',
  },
};
