const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors')
const schemaSpaceX = require('./schemaSpaceX')

const app = express();

// Allow cross-origin
app.use(cors())

app.use('/graphql', graphqlHTTP({
    schemaSpaceX,
    graphiql: true,
  }),
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started port ${PORT}`));