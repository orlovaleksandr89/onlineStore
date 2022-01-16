import { toast } from 'react-toastify'

export default function createError(error) {
  const message =
    error.response.data.message ||
    'Something went wrong, please try again later'
  toast.error(message)
  return message
}
