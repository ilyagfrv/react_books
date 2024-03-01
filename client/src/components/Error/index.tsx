import * as React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { useSelector } from 'react-redux'
import { useAppDispatch } from 'redux/redux-hook'
import { clearError } from 'redux/error/slice'
import { selectError } from 'redux/error/selectors'

export default function Error() {
  const dispatch = useAppDispatch()
  const errorMessage = useSelector(selectError)

  React.useEffect(() => {
    if (errorMessage) {
      toast.info(errorMessage)
      dispatch(clearError())
    }
  }, [errorMessage, dispatch])

  return <ToastContainer position='top-right' autoClose={2000} />
}
