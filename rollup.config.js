import uglify from 'rollup-plugin-uglify-es';

export default {
    input: 'src/index.js',
    output: {
        file: 'index.js',
        dir: 'dist',
        format: 'esm'
    },
    plugins: [
        uglify()
    ]
};
