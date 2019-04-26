<template>
    <div class="about" @click="setAge">
        <h1>{{age}}{{age}}{{age}}{{age}}</h1>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        age: 1
      }
    },
    methods: {
      setAge() {
        this.age++
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
