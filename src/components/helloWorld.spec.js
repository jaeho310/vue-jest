import HelloWorld from '@/components/HelloWorld.vue'
import Vue from 'vue'

let Constructor
let vm
let abc

test('HelloWorld Test', () => {
  Constructor = Vue.extend(HelloWorld)
  vm = new Constructor().$mount()
  abc = vm._data.abc
  expect(abc).toBe(100);
});