import { useState } from "react";
import { ProductTable } from "./components/Exercice-list/ProductTable";
import { SearchBar } from "./components/Exercice-list/SearchBar";

const products = [
    { id: 1, nom: "Téléphone", prix: 499, enStock: true, categorie: "Électronique" },
    { id: 3, nom: "Tablette", prix: 349, enStock: false, categorie: "Électronique" },
    { id: 2, nom: "Ordinateur", prix: 899, enStock: true, categorie: "Informatique" },
    { id: 4, nom: "Écouteurs", prix: 99, enStock: true, categorie: "Audio" },
    { id: 5, nom: "Montre", prix: 199, enStock: true, categorie: "Accessoires" }
  ];

export function AppList(){

    const [showStockedOnly, setShowStockedOnly] = useState(false);
    const [search, setSearch] = useState('');

    const visibleProducts = products.filter(product => {
        if(showStockedOnly && !product.enStock){
            return false;
        }

        if(search && !product.nom.includes(search)){
            return false;
        }

        return true;
    });

    return <div className="container my-3">
        <SearchBar 
            showStockedOnly={showStockedOnly} onStockedOnlyChange={setShowStockedOnly}
            search={search} onSearchChange={setSearch}
        >
        </SearchBar>
        <ProductTable products={visibleProducts}></ProductTable>
    </div>

}