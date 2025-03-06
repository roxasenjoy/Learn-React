export function ProductCategoryRow(props: {nom: string}){
    return <tr>
        <td colSpan={4}> 
            <strong>{props.nom}</strong>
        </td>
    </tr>
}