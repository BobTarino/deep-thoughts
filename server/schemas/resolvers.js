const { User, Thought } = require('../models');

const resolvers = {
    Query: {
        thoughts: async (parent, { username }) => {
            // use a ternary operator to check if username exists
            const params = username ? { username } : {};
            // returning the thought data in descending order
            return Thought.find(params).sort({ createdAt: -1 });
        },
    }
};
  
module.exports = resolvers;