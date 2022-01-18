import { toast } from 'react-toastify'

export default function createError(error) {
  console.log(error)
  const message =
    error?.response?.data?.message ||
    'Something went wrong, please try again later'
  toast.error(message)
  return message
}
