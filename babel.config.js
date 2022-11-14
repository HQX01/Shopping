module.exports = {
  // https://github.com/facebook/create-react-app/blob/main/packages/babel-preset-react-app/create.js
  // babel-preset-react-app
  presets: [
    'react-app',
    [
      '@babel/preset-env',
      {
        targets:
            { node: 'current' },
      },
    ],
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],

};
