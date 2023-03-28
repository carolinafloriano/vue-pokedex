<template>
  <div
    class="pokemon font-mono bg-emerald-400 pt-3 pb-2 pl-3 pr-2 rounded-lg flex flex-col gap-1 bg-right-bottom bg-no-repeat text-white"
  >
    <div class="font-extrabold text-sm capitalize">{{ pokemon.name }}</div>
    <div class="flex flex-row justify-between gap-1">
      <div class="z-10 flex flex-col gap-1">
        <span
          v-for="(type, index) in pokemon.types"
          :key="'pokemon' + index"
          class="text-xs bg-emerald-300 rounded-xl py-0.5 px-2 capitalize"
        >
          {{ type.type.name }}
        </span>
      </div>
      <div class="relative h-[80px]">
        <img
          :src="pokemon.sprite"
          class="absolute right-0 bottom-0 max-h-[80px] max-w-[80px]"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VPokemon",

  props: {
    pokemon: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.pokemon {
  background-image: url("../assets/images/pokeball-background.png");
  background-size: 55%;
}
.rotate {
  transform: scaleX(-1);
}
</style>
