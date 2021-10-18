const GraysQL = require('graysql');
const LoadFromDir = require('graysql/extensions/load-from-dir');
const axios = require('axios').default;
const path = require('path');

axios.defaults.baseURL = 'http://localhost:3000';

const GQL = new GraysQL();
GQL.use(LoadFromDir);
GQL.load(path.join(__dirname, 'schema'));
const schema = GQL.generateSchema();

module.exports = {
    schema
}