// components/Exerice-pokemon/PokemonDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export function DetailsPokemon() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${id}`);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error("Erreur lors de la récupération du pokémon:", error);
      }
    };

    fetchPokemon();
  }, [id]);

  if (!pokemon) {
    return (
      <div className="container text-center mt-5">
        <div className="alert alert-danger">
          <h2>Pokémon non trouvé</h2>
          <p>Nous n'avons pas pu trouver ce Pokémon. Veuillez réessayer.</p>
          <Link to="/" className="btn btn-primary mt-3">Retour à la liste</Link>
        </div>
      </div>
    );
  }

  const getTypeColor = (type: string) => {
    // Couleurs par défaut si l'API ne fournit pas de couleur
    const typeColors: { [key: string]: string } = {
      Feu: "#FF5733",
      Eau: "#3498DB",
      Plante: "#2ECC71",
      Électrik: "#F1C40F",
      Poison: "#9B59B6",
      Vol: "#85C1E9",
      Combat: "#E74C3C",
      Psy: "#E056FD",
      Normal: "#95A5A6",
      Sol: "#D35400"
      // Ajoutez d'autres types si nécessaire
    };
    
    return typeColors[type] || "#6c757d"; // Gris par défaut
  };

  return (
    <div className="container my-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="mb-0">{pokemon.name}</h1>
            <span className="badge bg-light text-dark">N°{pokemon.id}</span>
          </div>
        </div>
        
        <div className="card-body">
          <div className="row">
            {/* Image du Pokémon */}
            <div className="col-md-5 text-center mb-4">
              <div className="bg-light rounded p-3 d-flex justify-content-center align-items-center" style={{ height: "300px" }}>
                <img 
                  src={pokemon.image} 
                  alt={pokemon.name} 
                  className="img-fluid" 
                  style={{ maxHeight: "250px" }}
                />
              </div>
              
              {/* Types */}
              <div className="mt-3 d-flex justify-content-center">
                {pokemon.apiTypes && pokemon.apiTypes.map((type: any, index: number) => (
                  <span 
                    key={index}
                    className="badge me-2 p-2" 
                    style={{ 
                      backgroundColor: type.color || getTypeColor(type.name),
                      fontSize: "1rem"
                    }}
                  >
                    {type.name}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Informations du Pokémon */}
            <div className="col-md-7">
              <h3 className="border-bottom pb-2 mb-3">Statistiques</h3>
              
              <div className="row mb-4">
                <div className="col-sm-6">
                  <div className="mb-3">
                    <label className="fw-bold">HP:</label>
                    <div className="progress">
                      <div 
                        className="progress-bar bg-success" 
                        role="progressbar" 
                        style={{ width: `${(pokemon.stats.HP / 255) * 100}%` }}
                        aria-valuenow={pokemon.stats.HP}
                        aria-valuemin={0}
                        aria-valuemax={255}
                      >{pokemon.stats.HP}</div>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label className="fw-bold">Attaque:</label>
                    <div className="progress">
                      <div 
                        className="progress-bar bg-danger" 
                        role="progressbar" 
                        style={{ width: `${(pokemon.stats.attack / 255) * 100}%` }}
                        aria-valuenow={pokemon.stats.attack}
                        aria-valuemin={0}
                        aria-valuemax={255}
                      >{pokemon.stats.attack}</div>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label className="fw-bold">Défense:</label>
                    <div className="progress">
                      <div 
                        className="progress-bar bg-primary" 
                        role="progressbar" 
                        style={{ width: `${(pokemon.stats.defense / 255) * 100}%` }}
                        aria-valuenow={pokemon.stats.defense}
                        aria-valuemin={0}
                        aria-valuemax={255}
                      >{pokemon.stats.defense}</div>
                    </div>
                  </div>
                </div>
                
                <div className="col-sm-6">
                  <div className="mb-3">
                    <label className="fw-bold">Vitesse:</label>
                    <div className="progress">
                      <div 
                        className="progress-bar bg-warning" 
                        role="progressbar" 
                        style={{ width: `${(pokemon.stats.speed / 255) * 100}%` }}
                        aria-valuenow={pokemon.stats.speed}
                        aria-valuemin={0}
                        aria-valuemax={255}
                      >{pokemon.stats.speed}</div>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label className="fw-bold">Attaque Spé:</label>
                    <div className="progress">
                      <div 
                        className="progress-bar bg-info" 
                        role="progressbar" 
                        style={{ width: `${(pokemon.stats.special_attack / 255) * 100}%` }}
                        aria-valuenow={pokemon.stats.special_attack}
                        aria-valuemin={0}
                        aria-valuemax={255}
                      >{pokemon.stats.special_attack}</div>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label className="fw-bold">Défense Spé:</label>
                    <div className="progress">
                      <div 
                        className="progress-bar bg-secondary" 
                        role="progressbar" 
                        style={{ width: `${(pokemon.stats.special_defense / 255) * 100}%` }}
                        aria-valuenow={pokemon.stats.special_defense}
                        aria-valuemin={0}
                        aria-valuemax={255}
                      >{pokemon.stats.special_defense}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Évolutions */}
              {((pokemon.apiEvolutions && pokemon.apiPreEvolution)) && (
                <div className="mb-4">
                  <h3 className="border-bottom pb-2 mb-3">Évolutions</h3>
                  
                  <div className="row">
                    {pokemon.apiPreEvolution && (
                      <div className="col">
                        <h5 className="text-muted">Forme(s) précédente(s)</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to={`/pokemon/${pokemon.apiPreEvolution.pokedexIdd}`} className="text-decoration-none">
                                    <div className="d-flex align-items-center">
                                        <span>{pokemon.apiPreEvolution.name}</span>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                      </div>
                    )}
                    
                    {pokemon.apiEvolutions && (
                      <div className="col">
                        <h5 className="text-muted">Évolution(s) suivante(s)</h5>
                        <ul className="list-unstyled">
                            {pokemon.apiEvolutions.map((evolution: any, index: any) => (
                                <li key={index} className="mb-2">
                                    <Link to={`/pokemon/${evolution.pokedexId}`} className="text-decoration-none">
                                        <div className="d-flex align-items-center">
                                            <span>{evolution.name}</span>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
              
              {/* Résistances ou autres informations */}
              {pokemon.apiResistances && (
                <div>
                  <h3 className="border-bottom pb-2 mb-3">Résistances</h3>
                  <div className="d-flex flex-wrap">
                    {pokemon.apiResistances.map((resistance: any, index: number) => (
                      <div key={index} className="me-3 mb-2 text-center">
                        <span 
                          className="badge p-2" 
                          style={{ 
                            backgroundColor: resistance.damage_relation.name === "vulnerable" ? "#f8d7da" : 
                                            resistance.damage_relation.name === "resistant" ? "#d1e7dd" : "#e2e3e5",
                            color: resistance.damage_relation.name === "vulnerable" ? "#721c24" : 
                                   resistance.damage_relation.name === "resistant" ? "#0f5132" : "#41464b"
                          }}
                        >
                          {resistance.name}
                        </span>
                        <small className="d-block mt-1">
                          {resistance.damage_relation.name === "vulnerable" ? `${resistance.damage_multiplier}×` : 
                           resistance.damage_relation.name === "resistant" ? `${resistance.damage_multiplier}×` : 
                           resistance.damage_relation.name === "immune" ? "0×" : ""}
                        </small>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="card-footer">
          <div className="d-flex justify-content-between">
            <Link to="/" className="btn btn-primary">
              <i className="bi bi-arrow-left me-2"></i>Retour à la liste
            </Link>
            
            {/* Navigation précédent/suivant */}
            <div>
              {pokemon.id > 1 && (
                <Link to={`/pokemon/${pokemon.id - 1}`} className="btn btn-outline-primary me-2">
                  <i className="bi bi-chevron-left"></i> Précédent
                </Link>
              )}
              
              <Link to={`/pokemon/${pokemon.id + 1}`} className="btn btn-outline-primary">
                Suivant <i className="bi bi-chevron-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}