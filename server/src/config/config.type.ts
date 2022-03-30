export interface configInterface{
    http: httpInterface,
    db: dbInterface
}
//
interface httpInterface{
    port: number
}
interface dbInterface{
    postgres: postgresInterface,
    mongodb: mongoInterface,
}
//
interface postgresInterface {
    url: string,
    port: string,
    database: string
}
interface mongoInterface{
    url: string,
    port: number,
    session: {
        dbname: string,
        user: string,
        password: string,
        secret: string
    }
    database: {
        dbname: string
    }
}