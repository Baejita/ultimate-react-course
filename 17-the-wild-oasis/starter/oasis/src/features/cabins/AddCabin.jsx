import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  const [isOpenModal, setIsOmpenModal] = useState(false);
  return (
    <div>
      <Button onClick={() => setIsOmpenModal((show) => !show)}>
        Add new cabin
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOmpenModal(false)}>
          <CreateCabinForm onCloseModal={() => setIsOmpenModal(false)} />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;
