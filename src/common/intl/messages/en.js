const login = {"defaultCase": "sign in", "titleCase": "Sign In"}
const register = {"defaultCase": "register", "titleCase": "Register"}

export default {
  app: {
    footer: {
      madeByHtml: 'Copyright &copy; 2016 HijUp.com'
    },
    links: {
      home: 'HijUp',
      login: login.titleCase,
      todos: 'Todos',
      account: 'Your account'
    }
  },
  auth: {
    form: {
      button: {
        login: login.titleCase,
        register: register.titleCase
      },
      hint: 'Hint: pass1',
      legend: `${login.titleCase} / ${register.titleCase}`,
      placeholder: {
        email: 'your@email.com',
        password: 'password'
      },
      rememberMe: 'Remember me',
      wrongPassword: 'Wrong password.'
    },
    logout: {
      button: 'Logout'
    },
    login: {
      title: login.titleCase
    },
    validation: {
      email: 'Email address is not valid.',
      password: 'Password must contain at least {minLength} characters.',
      required: `Please fill out {prop, select,
        email {email}
        password {password}
        other {'{prop}'}
      }.`
    }
  },
  home: {
    // // TODO: Android text.
    // androidInfoText: ``,
    iosInfoText: `
      Este.js dev stack
      Press CMD+R to reload
      Press CMD+D for debug menu
    `,
    title: 'Home' // Required by React Helmet
  },
  notFound: {
    continueMessage: 'Continue here please.',
    header: 'This page isn\'t available',
    message: 'The link may be broken, or the page may have been removed.',
    title: 'Page Not Found'
  },
  todos: {
    add100: 'Add 100 Todos',
    clearAll: 'Clear All',
    clearCompleted: 'Clear Completed',
    empty: `It's rather empty here...`,
    leftList: `{size, plural,
      =0 {Nothing, enjoy}
      one {You are almost done}
      other {You have {size} tasks to go}
    }`,
    newTodoPlaceholder: 'What needs to be done?',
    title: 'Todos'
  },
  account: {
    title: 'Account',
    welcome: 'Hi {email}. This is your account page.'
  }
};
