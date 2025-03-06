import { ProductCategoryRow } from "./products/ProductCategoryRow";
import { ProductRow } from "./products/ProductRow";


export function ProductTable(props: {products: {id: number, nom: string, prix: number, enStock: boolean, categorie: string}[]}) {

    const rows = [];
    let lastCategorie = null

    for(let product of props.products){
        if(product.categorie != lastCategorie){
            rows.push(<ProductCategoryRow key={product.categorie} nom={product.categorie}></ProductCategoryRow>)
        }

        lastCategorie = product.categorie;
        rows.push(<ProductRow product={product} key={product.id}></ProductRow>)
    }


    return <table className="table">
        <thead>
        <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prix</th>
            <th>Disponible ?</th>
        </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>
}