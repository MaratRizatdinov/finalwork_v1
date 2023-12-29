import { useUpdateTokensMutation } from '../../redux/reducers/authApi'
import { useSaveToken } from './useSaveToken'

export const useRefreshToken = () => {
  const [saveToken] = useSaveToken()
  const [getNewToken] = useUpdateTokensMutation()

  const refreshToken = async () => {
    const data = getNewToken()
      .unwrap()
      .then((fulfilled) => {
        saveToken(fulfilled)
        const data = fulfilled.access_token
        return data
      })
    return data
  }
  return [refreshToken]
}
