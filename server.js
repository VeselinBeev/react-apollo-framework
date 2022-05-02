const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require('./schema.js');
const cors = require('cors')

const app = express();
app.use(cors())
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`server started on ${PORT}`));