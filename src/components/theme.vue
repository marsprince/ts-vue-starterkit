<script>
  export default {
    name: 'theme',
    render(h) {
      const theme = this.$attrs;
      const merge = vNode => {
        console.log(vNode)
        if (!vNode.tag) {
          return
        }

        if (vNode.componentOptions) {
          let props = vNode.componentOptions.propsData
          props = Object.assign({}, theme, props)
          vNode.componentOptions.propsData = props
        } else {
          if (!vNode.data) {
            return
          }

          let attrs = vNode.data.attrs || {}
          attrs = Object.assign({}, theme, attrs)
          vNode.data.attrs = attrs
        }
      }

      this.$slots.default.map(vNode => merge(vNode))
      return this.$slots.default[0] // 直接返回，无需额外渲染
    }
  };
</script>
