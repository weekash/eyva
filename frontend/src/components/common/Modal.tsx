interface ModalProps extends React.ComponentProps<'div'>{
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, ...rest }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-3 text-gray-700 hover:text-gray-900"
        >
          ✖️
        </button>
        {rest.children}
      </div>
    </div>
  );
};

export default Modal;
