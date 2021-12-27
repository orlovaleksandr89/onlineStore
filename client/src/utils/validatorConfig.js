export const validatorConfig = {
  email: {
    isRequired: {
      message: 'Email field is required'
    },
    isEmail: {
      message: 'Check your email address please'
    }
  },
  password: {
    isRequired: { message: 'Password field is required' },
    isCapitalLetter: { message: 'Password should contain a capital letter' },
    isNumber: { message: 'Password should contain a number' },
    min: {
      message: 'Password should be at least 8 characters long',
      value: 8
    }
  },

  name: {
    isRequired: {
      message: 'Name field is required'
    }
  },

  type: {
    isRequired: {
      message: 'Type field is required'
    }
  },
  price: {
    isRequired: {
      message: 'Price field is required'
    },
    isNumber: {
      message: 'Price should be a number'
    }
  },
  title: {
    isRequired: {
      message: 'Title field is required'
    }
  },
  description: {
    isRequired: {
      message: 'Description field is required'
    }
  },
  quantity: {
    isRequired: {
      message: 'Quantity field is required'
    },
    isNumber: {
      message: 'Quantity should be a number'
    }
  },
  imgURL: {
    isRequired: {
      message: 'Image Url field is required'
    },
    isValidLink: {
      message: 'Check your URL please'
    }
  }
}
