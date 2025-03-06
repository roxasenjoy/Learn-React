// Récupérer les informations de l'API

import { useEffect, useState } from "react";
import { ListPokemon } from "./components/Exerice-pokemon/ListPokemon";
import { Pagination } from "./components/Exerice-pokemon/pagination/Pagination";

export function AppPokemon(){

    const [pokemons, setPokemons] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 14; // Nombre de Pokémon par page

    useEffect(() => {
        // Fonction pour récupérer les données de l'API
        const fetchPokemonData = async () => {
            const response = await fetch('https://pokebuildapi.fr/api/v1/pokemon');
            
            const data = await response.json();

            setPokemons(data);
        };

        // Appel de la fonction au montage du composant
        fetchPokemonData();
    }, []); 

    // Calculer l'index du premier et du dernier élément de la page actuelle
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // Obtenir les éléments actuels
    const currentPokemons = pokemons.slice(indexOfFirstItem, indexOfLastItem);
    
    // Changer de page
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="container-fluid">
          <h1 className="text-center my-4">Pokédex</h1>
          
          {/* Liste de Pokémon */}
          <ListPokemon pokemons={currentPokemons} />
          
          {/* Pagination */}
          <Pagination 
            totalItems={pokemons.length} 
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      );

}