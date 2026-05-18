import "./Modal.module.css"
import classes from "./Modal.module.css"

type ModalProps = {
    children: React.ReactNode,
    onClose: () => void,
}

export default function Modal({ children, onClose }: ModalProps) {
  return (
    <div
      onClick={onClose}
      className={classes.backdrop}
    >
        <dialog
            open
            className={classes.modal}
            onClick={e => e.stopPropagation()}
        >
            {children}
        </dialog>
    </div>
  );
}