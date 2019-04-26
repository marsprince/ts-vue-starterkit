<template>
  <button @click="setAge">
    {{model.age}}{{other}}
  </button>
</template>
<script>
  import { observable, computed, action } from "mobx";
  import { observer } from "mobx-vue";

  class Model {
    @observable
    age = 10;

    @computed
    get computedAge() {
      return this.age + 1;
    }

    @action.bound
    setAge() {
      this.age++;
    }
  }

  export default observer({
    name: "App",
    data() {
      return {
        model: new Model(),
        other: 1
      };
    },
    methods: {
      setAge() {
        this.model.age ++
        this.other++
      }
    },
    watch: {
      other: function(val) {
        console.log(val);
      },
      model: function(val) {
        console.log(val);
      }
    },
    beforeCreate() {
      console.log("before create");
    },
    created() {
      console.log("created");
    },
    beforeUpdate() {
      console.log("before updatedddd");
    },
    updated() {
      console.log("updatedddd");
    }
  });
</script>
<style lang="scss">
  button {
    width: 100%;
    height: 44px;
    background: #667f1c;
    font-size: 18px;
    line-height: 44px;
  }
</style>
