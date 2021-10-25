export const validator = (data, config) => {
  const errors = {}
  function validate(method, data, config) {
    let statusValidate
    switch (method) {
      case 'isRequired': {
        try {
          if (typeof data === 'boolean') {
            statusValidate = !data
          } else {
            statusValidate =
              typeof data === 'object'
                ? Object.keys(data).length === 0
                : Array.isArray(data)
                ? data.length === 0
                : data.trim() === ''
          }
        } catch (error) {
          console.log(error.message)
        }

        break
      }
      case 'isEmail':
        {
          const emailRegExp = /^\S+@\S+\.\S+$/g
          statusValidate = !emailRegExp.test(data)
        }
        break
      case 'isCapitalLetter':
        {
          const passwordRegExp = /[A-Z]+/g
          statusValidate = !passwordRegExp.test(data)
        }
        break
      case 'isNumber':
        {
          const passwordRegExp = /\d+/g
          statusValidate = !passwordRegExp.test(data)
        }
        break
      case 'min':
        statusValidate = data.length < config.value
        break
      case 'isCorrectDate':
        statusValidate = Number(data.split('-')[0]) > new Date().getFullYear()
        break
      case 'isValidLink':
        {
          const linkRegExp = /^\S+:\/\/\S+\.\S+/g
          statusValidate = !linkRegExp.test(data)
        }
        break

      default:
        break
    }
    if (statusValidate) return config.message
  }

  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      )
      if (error && !errors[fieldName]) {
        errors[fieldName] = error
      }
    }
  }
  return errors
}
