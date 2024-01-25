/**
 * roc-cli-rollup-template v1.0.0
 * (c) 2020-2024 rocyuan
 * Email: rocyuan666@163.com
 * Released under the MIT License.
 */
import {ref,openBlock,createElementBlock,createElementVNode,toDisplayString}from'vue';const _hoisted_1 = { class: "roc-cpn" };


var script = {
  __name: 'RocCpn',
  setup(__props) {

const message = ref('roc-cli-rollup-vue-template');

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("span", null, toDisplayString(message.value), 1 /* TEXT */)
  ]))
}
}

};script.__file = "src/components/RocCpn.vue";export{script as RocCpn};