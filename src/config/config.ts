/* eslint-disable prettier/prettier */
export default () => {
    const {
      env: {
        URL_DB: urlDb
      },
    } = process
  
    return {
      urlDb
    }
  }
  