module.exports = {
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }],
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
    plugins: [
      '@emotion',
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
    ],
    env: {
      production: {
        plugins: ['@emotion'],
      },
      development: {
        plugins: [['@emotion', { sourceMap: true }]],
      },
    },
  }