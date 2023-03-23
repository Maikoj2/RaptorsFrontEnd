export interface ApiUser {
  _id: string
  Names: string
  email: string
  img: string
  role: string
  createdAt: string
  updatedAt: string

}
export interface ApiUserLogin {
  ok: string
  message: string
  remerberMe: boolean
  Data: {
    user: ApiUser
    token: string
  }
}
