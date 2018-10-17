<template>
    <div class="hello">
        <div>props:{{ msg }}</div>
        <div>computed:{{ computedMsg }}</div>
        <div>data:{{ x }}</div>
        <div>data:{{ y }}</div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Model, Vue } from 'vue-property-decorator';

@Component
export default class HelloWMoorld extends Vue {
  // props
  @Prop()
  private msg!: string;

  // data
  private x: number = 1;
  private y: string = '2';

  // method
  private greet() {
    console.log('greeting: ' + this.msg);
  }

  // computed
  private get computedMsg() {
    return 'computed ' + this.msg;
  }

  // lifecycle
  mounted() {
    this.greet();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;

  div {
    height: 100px;
  }
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
