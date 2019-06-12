<template>
    <div class="about" @click="setAge">
        <h1>{{age}}{{age}}{{age}}{{age}}</h1>
    </div>
</template>
<script>
  function test(target, key, descriptor) {
    console.log(target,key,descriptor)
    return descriptor
  }
  export default {
    data() {
      return {
        age: 1,
        yyf:{}
      }
    },
    methods: {
      @test
      setAge() {
        this.age++;
        const yyf = this.yyf
        yyf.x.y = 1
      }
    },
    beforeCreate() {
      console.log("before create");
    },
    created() {
      console.log("created");
    },
    beforeUpdate() {
      console.log("before update");
    },
    updated() {
      console.log("updated");
    }
  };
</script>
