const graphqlFields = require('graphql-fields');
const axios = require("axios")

module.exports = () => {
  return {
    name: 'Book',
    fields: {
        id: { type: 'Int!' },
        title: { type: 'String!' },
        author: { type: 'String!' },
        genre: {
            type: '[Genre]',
            args: {
                limit: { type: 'Int' },
            }
        }
    },
    queries: {
        getBook: {
            type: 'Book',
            args: {
                id: { type: 'Int!' },
            },
            resolve: async (_, { id }, ctx, info) => {
                const getGenreLimit = () => {
                    const { genre } = graphqlFields(info, {}, { processArguments: true });
                    if (genre) {
                        const defaultLimit = { limit: { value: 0 } };
                        const [ { limit: { value } } = defaultLimit ] = genre.__arguments.filter(({ limit }) => !!limit );
                        return `&genre._limit=${value}`
                    }
                    return '';
                }
                const { data: [ book ] } = await axios.get(`/books?id=${id}${getGenreLimit()}`);
                return book;
            }
        }
    }
  };
};