import { useDispatch } from 'react-redux'
import { addTokens } from '../../redux/reducers/userSlice'


export const useSaveToken=()=>{
    const dispatch = useDispatch()
    const saveToken = (data) => {
    
      localStorage.setItem('access', data.access_token)
      localStorage.setItem('refresh', data.refresh_token)
    
      dispatch(
        addTokens({
          access: localStorage.getItem('access'),
          refresh: localStorage.getItem('refresh'),
        }),
      )
    }
    return [saveToken]
  }
  