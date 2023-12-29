import { useGetUserQuery } from "../../redux/reducers/userApi"
import { getToken } from "../tools"

export const useGetUser =()=>{
    const token =getToken()


}