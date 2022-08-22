import Button from "./Button"
export default function Modal(prop){
    return (
        <div className="modal">
            <p>Are you certain?</p>
            <Button className="cancel">Cancel</Button>
            <Button className="confirm">Confirm</Button>
        </div>
    )
}