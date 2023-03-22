<template>
  <div class="container back mx-auto bg-slate-100 p-3 bg-no-repeat">
    <div class="header text-red-900">
      <font-awesome-icon icon="fa-solid fa-arrow-left" />
    </div>
    PokeList
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

export default {
  name: "ViewList",
  components: {
    VPokemon,
  },
  data() {
    return {
      pokemons: [
        {
          name: "Bulbasaur",
          type: "Grass",
          power: "Poison",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
        },
        {
          name: "Ivisaur",
          type: "Grass",
          power: "Poison",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style>
.back {
  background-image: url("../assets/images/pokeball-background-2.png");
  background-size: 100%;
  background-position: 8rem -3.5rem;
}
</style>
