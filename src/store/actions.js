import { swal, swalLoading, swalClose } from '../helpers/swal'
import axios from '../api/axios'

export function setMissions(payload) {
  return { type: 'MISSIONS/SET_MISSIONS', payload }
}

export function setMission(payload) {
  return { type: 'MISSIONS/SET_MISSION', payload }
}

export function setLoading(payload) {
  return { type: 'MISSIONS/SET_LOADING', payload }
}

export function postMission(payload) {
  return async (dispatch, getState) => {
    try {
      console.log('Post mission to server')
      let { mission } = getState()

      dispatch(setLoading(true))
      swalLoading()

      const response = await axios({
        method: 'post',
        url: `/missions`,
        data: mission,
      })

      console.log(response, 'response dari server, post mission')
      dispatch(setMission(response))

      dispatch(setLoading(false))

      swalClose()
      swal('Successfully added mission to server')
    } catch (err) {
      console.log(err)
      swalClose()
      swal('Failed to upload mission to server', 'error')
    }
  }
}
