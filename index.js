const app = require('express')()
const openapi = require('@wesleytodd/openapi')
const oapi = openapi({
    openapi: '3.0.0',
    info: {
        title: 'Express App',
        description: 'Express App',
        version: 'v1',
        termsOfService: "http://fake.com",
        contact: {
            name: "Yiqing Liang",
            email: "yiqing.liang@hotmail.com"
        }
    }
});

app.use(oapi)
// server swagger docment
app.use('/doc', oapi.swaggerui)

console.log(`App is starting, listen http port: 8081`)
app.listen(8081);