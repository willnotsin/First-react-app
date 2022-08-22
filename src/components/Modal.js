import Button from "./Button"
export default function Modal(prop){

    function cancelHandler(){
        prop.onCancel()
    }
    function confirmHandler(){
        prop.onConfirm()
    }
    return (
        <div className="modal">
            <p>Are you certain?</p>
            <Button className="cancel" onClick={cancelHandler}>Cancel</Button>
            <Button className="confirm" onClick={confirmHandler}>Confirm</Button>
        </div>
    )
}