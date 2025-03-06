import { Checkbox } from "./forms/Checkbox";
import { Input } from "./forms/Input";


export function SearchBar(props: {
    showStockedOnly: boolean, onStockedOnlyChange: any, 
    search: any, onSearchChange: any
}){
    return <div>
        <div className="mb-3">
            <Input value={props.search} onChange={props.onSearchChange} placeHolder="Rechercher..."/>
            <Checkbox id="stocked" 
                checked={props.showStockedOnly} 
                onChange={props.onStockedOnlyChange} 
                label="N'afficher que les produits en stock'">
            </Checkbox>
        </div>
    </div>
}