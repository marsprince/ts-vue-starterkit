export default {
  install (Vue) {
    Vue.mixin({
      // beforeRouteEnter (to, from, next) {
      //  console.log('beforeRouteEnter', to, from)
      //  next(beforeRouteEnterHandler)
      // }
      mounted () {
        const vnode = this.$vnode;
        if (vnode && vnode.tag.includes('keep-alive') && !Vue.prototype.$keepAlive) {
          this.useInitData = false;
          Vue.prototype.$keepAlive = this
        }
      }
    });
  }
}
