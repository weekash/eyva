import Button from "../common/Button";

export default function DeleteConfirmation() {
    function handleCancel() {

    }

    function handleConfirm() {

    }
    return (
        <div>
            <h2 className="text-lg font-medium mb-6">Are you sure you want to delete selected users?</h2>
            <div className="flex justify-between mt-6 gap-4">
                <Button classes='flex-grow' text="Cancel" onClick={handleCancel} variant="secondary" />
                <Button classes='flex-grow' text="Confirm" onClick={handleConfirm} />
            </div>
        </div>
    )
}
