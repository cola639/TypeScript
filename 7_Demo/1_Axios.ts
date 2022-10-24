const axios = {
  fun1() {
    console.log('fun1')
  }
}

const fun1 = () => {}

console.log(axios.fun1, typeof axios.fun1, axios.fun1 instanceof Function)
console.log(fun1, typeof fun1, fun1 instanceof Function)
