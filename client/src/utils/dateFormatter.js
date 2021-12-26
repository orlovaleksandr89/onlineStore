import moment from 'moment'

const dateFormatter = (date) => {
  return moment(date).format('dddd, MMMM Do YYYY, HH:mm')
}

export default dateFormatter
