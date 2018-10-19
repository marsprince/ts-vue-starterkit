<template>
    <div class="hello">
        <div>props:{{ msg }}</div>
        <div>obj props:{{obj.x}}</div>
        <div>computed:{{ computedMsg }}</div>
        <div>data=>x:{{ x }}</div>
        <div>data=>y:{{ y }}</div>
        <div @click="onClick">click change x</div>
    </div>
</template>

<script lang="ts">
import { Prop, Model, Vue, Watch } from 'vue-property-decorator';

import Component from 'vue-class-component'

import { mixins } from 'vue-class-component';

import { MyMixin } from './mixin';

interface test {
  y: string;
}
@Component
export default class HelloWorld extends mixins(MyMixin) {
  // props
  @Prop({
    default: '123',
  })
  private msg!: string;

  @Prop()
  private obj!: test;

  // data
  private x: number = 1;
  private y: string = '2';

  // watch
  @Watch('x')
  private onChanged(val: number, oldVal: number) {
    console.log(`x changed from ${oldVal} to ${val}`);
  }

  // method
  private greet() {
    console.log('greeting: ' + this.msg);
  }

  // computed
  private get computedMsg() {
    return 'computed ' + this.msg;
  }

  // emit
  private onClick() {
    this.x++;
    this.$emit('clicks', 'click!!!!');
    console.log(this);
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
