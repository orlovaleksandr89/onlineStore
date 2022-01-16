export default function isOutDated(date) {
  if (Date.now() - date > 10 * 60 * 5000) {
    return true
  }
  return false
}
