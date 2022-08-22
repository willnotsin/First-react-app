export default function Backdrop(prop){
    const {onClick} = prop
    return <div className="backdrop" onClick={onClick}/>
}