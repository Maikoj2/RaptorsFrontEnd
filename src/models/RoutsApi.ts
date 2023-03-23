
export enum ApiLoginRoutes {
  LOGIN = '/login', /** this routes is login post */
  RE_NEW = '/login/reNew', /** this routes is a get and  renuew the Token */
}

export enum ApiUserRoutes {
  API_USER = '/User', /** this route is to Get and Post users*/
  API_ID_USER = '/User/:id', /** this route is to Put and Post users*/
}
