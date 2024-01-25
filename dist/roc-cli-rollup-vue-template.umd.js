/**
 * roc-cli-rollup-template v1.0.0
 * (c) 2020-2024 rocyuan
 * Email: rocyuan666@163.com
 * Released under the MIT License.
 */
(function(g,f){typeof exports==='object'&&typeof module!=='undefined'?f(exports,require('vue')):typeof define==='function'&&define.amd?define(['exports','vue'],f):(g=typeof globalThis!=='undefined'?globalThis:g||self,f(g.Roc={},g.Vue));})(this,(function(exports,vue){'use strict';const _hoisted_1 = { class: "roc-cpn" };


var script = {
  __name: 'RocCpn',
  setup(__props) {

const message = vue.ref('roc-cli-rollup-vue-template');

return (_ctx, _cache) => {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    vue.createElementVNode("span", null, vue.toDisplayString(message.value), 1 /* TEXT */)
  ]))
}
}

};script.__file = "src/components/RocCpn.vue";exports.RocCpn=script;}));