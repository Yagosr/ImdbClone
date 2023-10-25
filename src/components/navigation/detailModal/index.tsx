import React from "react";
import { Container, Modal } from "rsuite";

const DetailModal: React.FC<any> = ({openModal, setOpenModal}) => {

    const handleClose = () => {
        setOpenModal(false)
    }

    return(
        <Modal open={openModal} onClose={handleClose}>
            <Modal.Header>
                <h1>Detalhes</h1>
            </Modal.Header>
            <Modal.Body>
                <Container>

                </Container>
            </Modal.Body>
        </Modal>
    )
}

export default DetailModal