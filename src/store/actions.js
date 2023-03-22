import Pokedex from "../classes/pokedex";

export default {
  /**
   * Atualiza a pokedex com os pokemons
   */
  async updatePokemonList() {
    const pokedex = new Pokedex();
    const pokemonList = await pokedex.getList(this.getPokemonListOffset);

    this.pokemonList.push(...pokemonList);
    console.log(this.pokemonList);
  },
};
