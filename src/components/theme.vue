<script>
  export default {
    name: 'theme',
    render(h) {
      console.log(this)
      return this.$slots.default[0] // 直接返回，无需额外渲染
    }
  };
</script>
