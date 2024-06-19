import { Button, Modal, ModalClose, ModalDialog } from "@mui/joy";
import { useState } from "react";

export default function Product() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div>
                <Button onClick={() => setOpen(true)}>Open Modal</Button>
            </div>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog>
                    <ModalClose />
                    <span></span>
                </ModalDialog>
            </Modal>
        </div>
    );
}
