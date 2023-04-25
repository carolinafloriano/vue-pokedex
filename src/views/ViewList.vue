<template>
  <div
    class="back bg-slate-100 p-3 bg-no-repeat flex flex-col flex-wrap gap-5 font-extrabold"
  >
    <div class="icons flex flex-col text-gray-800 gap-3">
      <div class="flex flex-row justify-between">
        <font-awesome-icon icon="fa-solid fa-arrow-left" />
        <font-awesome-icon icon="fa-solid fa-bars" />
      </div>
      <span> Pokedex</span>
    </div>
    <div class="grid grid-cols-2 gap-2">
      <VPokemon
        v-for="(pokemon, index) in pokemons"
        :key="'pokemon' + index"
        :pokemon="pokemon"
      ></VPokemon>
    </div>
  </div>
</template>
<script>
import VPokemon from "../components/VPokemon.vue";
import { useStore } from "../store/index.js";

const store = useStore();

export default {
  name: "ViewList",
  components: {
    VPokemon,
  },
  data() {
    return {
      pokemons: [],
    };
  },
  mounted() {
    this.pokemons = store.getPokemonList;
  },
  methods: {},
};
</script>

<style lang="scss">
.back {
  background-image: url("../assets/images/pokeball-background-2.png");
  background-size: 100%;
  background-position: 8rem -3.5rem;

  > .icons {
    font-size: 1.4rem;
  }
}
</style>
