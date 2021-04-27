

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

export const notifyError = (props) => {
  return (
    toast.error(props, {position: toast.POSITION.TOP_RIGHT})
  )
}
export const notifySuccess = (props) => {
  return (
    toast.success(props, {position: toast.POSITION.TOP_RIGHT})
  )
}


