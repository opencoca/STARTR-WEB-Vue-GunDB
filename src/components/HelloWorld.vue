<template>
  <div class="hello">
    <h1>Gun DB Test</h1>
    <li
      v-for="(recipe, index) in recipes"
      v-if="recipe !== null"
      v-bind:key="index"
    >
      {{ recipe }}
      <button @click="deleteItem(index)">delete</button>
    </li>

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
      var key = Object.keys(this.recipes_node._.put)[index + 1];
      console.log(key);
      this.recipes_node.get(key).put(null);
      this.recipes.splice(index, 1); // place a null value and splice the vue list
    },
  },

  mounted() {
    this.recipes_node.map().on((node, key) => {
      this.recipes.push(node);
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
  /*display: block;*/
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
