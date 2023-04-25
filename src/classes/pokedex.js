import axios from "../plugins/axios";

export default class Pokedex {
  /**
   * Função para buscar a lista de pokemons da API
   *
   * @param {Number} offset Range de pokemons após o que já foi buscado
   * @return {Array} Lista de pokemons
   */
  async getList(offset = 0) {
    return new Promise(async (resolve, reject) => {
      const query = JSON.stringify({
        query: `query NewQuery {
          pokemons: pokemon_v2_pokemon(offset: ${offset}, limit: 50) {
            id
            name
            information: pokemon_v2_pokemonspecy {
              color: pokemon_v2_pokemoncolor {
                name
              }
            }
            types: pokemon_v2_pokemontypes {
              type: pokemon_v2_type {
                name
              }
            }
          }
        }`,
      });

      const pokemonList = await axios
        .post("/", query)
        .then((response) => {
          if (response.data.errors) {
            throw new Error(response.data.errors[0].message);
          }

          const result = response.data.data.pokemons;

          result.map((pokemon) => {
            pokemon.sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`;
          });

          console.log(result);

          return result;
        })
        .catch((error) => {
          console.error(error);
          reject();
        });

      resolve(pokemonList);
    });
  }
}
