import babel from 'rollup-plugin-babel';

export default {
    entry: 'script.js',
    plugins: [ babel() ],
    dest: 'bundle.js'
};