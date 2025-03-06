/**
 * Ligne produit dans un tableau à 4 colonnes
 * @param props 
 * @returns 
 */
export function ProductRow(props: {product: {id: number, nom: string, prix: number, enStock: boolean, categorie: string}}) {
    return <tr>
        <td>{props.product.id}</td>
        <td>{props.product.nom}</td>
        <td>{props.product.prix} €</td>
        <td>{props.product.enStock ? "En stock" : "Rupture de stock"}</td>
    </tr>
}