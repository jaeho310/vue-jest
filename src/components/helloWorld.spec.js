import HelloWorld from './HelloWorld.vue'
import Vue from 'vue'

let Constructor
let vm
let abc

test('HelloWorld Test', () => {
  Constructor = Vue.extend(HelloWorld)
  vm = new Constructor().$mount()
  abc = vm._data.abc
  console.log(abc)
  expect(true).toBe(true);
});
