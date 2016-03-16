import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'src/app/main.js',
  format: 'cjs',
  plugins: [
    json(),
    babel(),
    nodeResolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs({
      ignoreGlobal: false
    })
  ],
  dest: 'build/app.js'
};
