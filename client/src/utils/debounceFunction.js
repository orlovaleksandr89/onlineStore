export function debounce(fn, ms) {
  let timeOut

  return function () {
    const fnCall = () => {
      fn.apply(this, arguments)
    }
    clearTimeout(timeOut)
    timeOut = setTimeout(fnCall, ms)
  }
}
