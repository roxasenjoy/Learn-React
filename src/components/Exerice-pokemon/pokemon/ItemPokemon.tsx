import { Link } from "react-router-dom";

export function ItemPokemon(props: any) {
    const { pokemon } = props;
    
  
    return (
      <div className="col d-flex justify-content-center mb-4">
        <div className="card" style={{ width: "240px" }}>
          {/* Image container */}
          <div className="d-flex justify-content-center align-items-center p-2" style={{ height: "150px" }}>
            <img 
              src={pokemon.image} 
              alt={`Image de ${pokemon.name}`}
              className="img-fluid"
              style={{ maxHeight: "130px" }}
            />
          </div>
          <div className="card-body text-center">
            <h5 className="card-title text-truncate">{pokemon.name}</h5>
            
            {/* Types du Pokémon */}
            <div className="mb-2 d-flex justify-content-center flex-wrap">
              {pokemon.apiTypes && pokemon.apiTypes.map((type: any, index: number) => (
                <span 
                  key={index}
                  className="badge me-1 mb-1" 
                  style={{ 
                    backgroundColor: type.color || '#6c757d'
                  }}
                >
                  {type.name}
                </span>
              ))}
            </div>
            
            <p className="card-text small">
              HP: {pokemon.stats.HP} | ATK: {pokemon.stats.attack} | DEF: {pokemon.stats.defense}
            </p>
            <Link to={`/pokemon/${pokemon.id}`} className="btn btn-primary">Voir détails</Link>
          </div>
        </div>
      </div>
  );
}