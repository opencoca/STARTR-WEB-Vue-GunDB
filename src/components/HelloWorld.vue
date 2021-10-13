<template>
  <div class="hello">
    <h1>Gun DB Test</h1>
    <li v-for="(recipe, index) in recipes" v-bind:key="index">
      {{ recipe }}
      <button @click="deleteItem(index)">delete</button>
    </li>

    <br />
    <br />

    <input type="text" v-model="newRecipe" v-on:keyup.enter="add(newRecipe)" />
    <button @click="add(newRecipe)">Add</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data() {
    return {
      recipes: [],
      newRecipe: "",
      recipes_node: this.$gun.get("recipes"),
    };
  },

  methods: {
    add(newRecipe) {
      this.recipes_node.set(newRecipe);
    },
    deleteItem(index) {
      this.recipes_node.once(function (node) {
        console.log(node);
      });
      console.log(this.recipes);
    },
  },

  mounted() {
    this.recipes_node.map().on((node, key) => {
      //this.recipes.push(node);
      this.recipes[key] = node;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
