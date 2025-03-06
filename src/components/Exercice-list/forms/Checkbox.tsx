export function Checkbox(props: {checked: boolean, onChange: (s: boolean) => void, label: string, id: string}){
    return <div className="form-check">
        <input 
            id={props.id}
            type="checkbox" 
            className="form-check-input"
            checked={props.checked}
            onChange={(e) => props.onChange(e.target.checked)}
            
            />

        <label htmlFor={props.id} className="form-check-label"> {props.label} </label>
    </div>
}