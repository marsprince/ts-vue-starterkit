<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <Theme>
            <HelloWorld :obj="objs" @clicks="onClick"/>
        </Theme>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { Route } from 'vue-router';
import Theme from '../components/theme.vue'

@Component({
  components: {
    HelloWorld,
    Theme
  },
})
export default class Home extends Vue {
  private objs = {
    x: 2,
  };

  private onClick(str: string) {
    console.log(`收到！${str}`);
  }


  // router
  beforeRouteEnter (to:any, from:any, next:()=>void) {
    console.log('beforeRouteEnter')
    next() // needs to be called to confirm the navigation
  }
}
</script>
