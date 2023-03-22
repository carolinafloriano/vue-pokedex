<template>
  <div
    class="pokemon font-mono container mx-auto bg-emerald-400 pt-3 pb-2 pl-3 pr-2 rounded-lg flex flex-col justify-start items-start gap-1 bg-right-bottom bg-no-repeat"
  >
    <div class="font-extrabold text-base">{{ pokemon.name }}</div>
    <div class="flex flex-row justify-between gap-1">
      <div class="flex flex-col gap-1">
        <div class="text-xs bg-emerald-300 rounded-xl py-0.5 px-2">
          {{ pokemon.type }}
        </div>
        <div class="text-xs bg-emerald-300 rounded-xl py-0.5 px-2">
          {{ pokemon.power }}
        </div>
      </div>
      <div>
        <img class="rotate" :src="pokemon.image" />
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
