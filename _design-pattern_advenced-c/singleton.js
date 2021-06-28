const singleton = (() => {
  let obj
  const createInstance = () => {
    var obj = new Object()
    return obj
  }
  return {
    getInstance: () => {
      if (!obj) obj = createInstance()
      return obj
    },
  }
})()

export default singleton