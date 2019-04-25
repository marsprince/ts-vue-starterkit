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
      return { model: new Model() };
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
    },
    render(h) {
      return h("button", {
        on: { click: this.model.setAge },
        domProps: { textContent: this.model.age }
      });
    }
  });
</script>
<style lang="scss">
  button {
    width: 80px;
    height: 44px;
  }
</style>
