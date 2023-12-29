import {
  useAddImgMutation,
  useDeleteAdvMutation,
  useAddAdvMutation,
} from '../../redux'
import { getToken } from '../tools'
import { useRefreshToken } from './useRefreshToken'
// import { useAddAdvMutation } from '../../redux'

export const useAuthMutations = () => {
  let token = getToken()
  const [deleteAdvAttempt] = useDeleteAdvMutation()
  const [refreshToken] = useRefreshToken()
  const [addAdvAttempt, { isError: advError }] = useAddAdvMutation()
  const [addImgAttempt] = useAddImgMutation()

  const deleteAdv = async (id) => {
    await deleteAdvAttempt({ id, token })
      .unwrap()
      .catch(() => {
        refreshToken().then((data) => {
          token = data
          deleteAdvAttempt({ id, token })
        })
      })
  }

  const addAdv = async (body) => {

    addAdvAttempt({ body, token }).unwrap

    if(!advError){
      console.log ("ok")
    }














    // const newId = addAdvAttempt({ body, token })
    //   .unwrap()
    //   .then((fulfilled) => {
    //     const data = fulfilled.id
    //     return data
    //   })
    //   .catch(() => {
    //     refreshToken().then((data) => {
    //       token = data
    //       addAdvAttempt({ body, token })
    //         .unwrap()
    //         .then(() => {
    //           console.log(refetchData)
    //         })
    //     })
    //   })
    // return newId
  }

  const addImg = async ({ id, body }) => {
    await addImgAttempt({ id, body, token })
      .unwrap()
      .catch(() => {
        refreshToken().then((data) => {
          token = data
          addImgAttempt({ id, body, token })
        })
      })
  }

  return { deleteAdv, addAdv, addImg }
}
