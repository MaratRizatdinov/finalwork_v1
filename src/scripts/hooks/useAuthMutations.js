import {
  useAddImgMutation,
  useDeleteAdvMutation,
  useAddAdvMutation,
  useUpdateAdvMutation,
  useDeleteImgMutation
} from '../../redux'
import { getToken } from '../tools'
import { useRefreshToken } from './useRefreshToken'
// import { useAddCommentMutation } from '../../redux'


export const useAuthMutations = () => {
  let token = getToken()

  const [deleteAdvAttempt] = useDeleteAdvMutation()
  const [refreshToken] = useRefreshToken()
  const [addAdvAttempt] = useAddAdvMutation()
  const [addImgAttempt] = useAddImgMutation()
  const [updateAdvAttempt] = useUpdateAdvMutation()
  const [deleteImgAttempt] = useDeleteImgMutation()
  // const [addCommentAttempt] = useAddCommentMutation()


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
    try {
      const result = await addAdvAttempt({ body, token }).unwrap()
      return result.id
    } catch (error) {
      const token = await refreshToken()
      const result = await addAdvAttempt({ body, token }).unwrap()
      return result.id
    }
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

  const updateAdv = async ({ id, body }) => {
    try {
      await updateAdvAttempt({ id, body, token }).unwrap()
    } catch (error) {
      const token = await refreshToken()
      await addAdvAttempt({ id, body, token }).unwrap()
    }
  }

  const deleteImg = async ({ id, file_url }) => {
    try {
      await deleteImgAttempt({ id, file_url, token }).unwrap()
    } catch (error) {
      const token = await refreshToken()
      await deleteImgAttempt({ id, file_url, token }).unwrap()
    }
  }

  // const addComment 











  return { deleteAdv, addAdv, addImg, updateAdv, deleteImg }
}
