import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
const { uglify } = require('rollup-plugin-uglify')

export default {
    input: 'src/RemHelp.js',
    output: {
        name: 'RemHelp',
        file: 'rem-help.min.js',
        format: 'umd'
    },
    plugins: [
        resolve(),
        uglify(),
        babel({
            exclude: 'node_modules/**' // 只编译我们的源代码
        })
    ]
};
