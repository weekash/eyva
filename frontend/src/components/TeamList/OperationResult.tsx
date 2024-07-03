import SuccessSvg from "../../assets/svgs/success.svg"
interface OperationResultProps {
    success: boolean;
    message: string;
}
export default function OperationResult({ success, message }: OperationResultProps) {
    return (
        <div>
            {success && <SuccessSvg />}
            <h2 className="text-lg font-medium mb-6">{message}</h2>
        </div>
    )
}
