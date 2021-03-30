export async function getPokemonByParam(pokemonName) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await response.json();
    return data;
  } catch (error) {
    alert('Erro ao buscar Pokémon');
    console.error(error);
  }
}
