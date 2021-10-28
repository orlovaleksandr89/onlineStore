export const validatorConfig = {
  email: {
    isRequired: {
      message: 'Электронная почта обязательна для заполнения'
    },
    isEmail: {
      message: 'Проверьте правильность вашего email'
    }
  },
  password: {
    isRequired: { message: 'Пароль обязателен для заполнения' },
    isCapitalLetter: { message: 'Пароль должен содержать загланую букву' },
    isNumber: { message: 'Пароль должен содержать цыфру' },
    min: {
      message: 'Пароль должен быть не меньше 8 символов',
      value: 8
    }
  },
  profession: {
    isRequired: { message: 'Профессия обязательна к выбору' }
  },
  licence: {
    isRequired: {
      message: 'Вы не можете использовать наш сервис без принятия лицензии'
    }
  },
  name: {
    isRequired: {
      message: 'Имя обязательно для заполнения'
    }
  },
  qualities: {
    isRequired: {
      message: 'Выбирете хотя б одно качество'
    }
  },
  userId: {
    isRequired: {
      message: 'Выбирете хотя б одного пользователя'
    }
  },
  content: {
    isRequired: {
      message: 'Поле обязательно для заполнения'
    }
  },
  type: {
    isRequired: {
      message: 'Поле тип обязательно для заполнения'
    }
  },
  price: {
    isRequired: {
      message: 'Поле обязательно для заполнения'
    },
    isNumber: {
      message: 'Должно быть числом'
    }
  },
  title: {
    isRequired: {
      message: 'Поле обязательно для заполнения'
    }
  },
  description: {
    isRequired: {
      message: 'Поле обязательно для заполнения'
    }
  },
  quantity: {
    isRequired: {
      message: 'Поле обязательно для заполнения'
    },
    isNumber: {
      message: 'Должно быть числом'
    }
  },
  imgURL: {
    isRequired: {
      message: 'Поле обязательно для заполнения'
    },
    isValidLink: {
      message: 'Проверьте правильность URL'
    }
  }
}
