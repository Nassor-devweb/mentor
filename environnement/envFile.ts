
export default () => ({
    port : parseInt(process.env.Port,10) || 3000,
    database : {
        port : parseInt(process.env.DATA_BASE_PORT) || 3306,
        host : process.env.HOST
    }
})