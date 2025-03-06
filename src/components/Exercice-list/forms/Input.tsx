/**
 * 
 * @param props 
 * @returns 
 */
export function Input(props:{placeHolder: string, value: string, onChange: (s: string) => void}){
    return <>
        <input className="form-control"
            type="text" 
            placeholder={props.placeHolder}
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
        />
    </>
}