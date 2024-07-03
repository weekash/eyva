import { useState } from "react";
import EditUserDetailsForm from "../components/TeamList/EditUserDetailsForm";
import Header from "../components/TeamList/Header";
import TeamListItem from "../components/TeamList/TeamListItem";
import Modal from "../components/common/Modal";
import DeleteConfirmation from "../components/TeamList/DeleteConfirmation";

export default function TeamMembers() {
const [mode, setMode] = useState<string>("")
const [selection, setSelection] = useState<any>()
function closeModal(){
  setMode("")
  setSelection(null)
}
  return (
    <div>
      <div >
        <Header />
        {[1, 2, 3].map((item) => <TeamListItem setMode={setMode} setSelection={setSelection}/>)}
        <Modal onClose={closeModal} isOpen={mode=="edit"}>
          <EditUserDetailsForm />
        </Modal>
        <Modal onClose={closeModal} isOpen={mode=="delete"}>
          <DeleteConfirmation />
        </Modal>
      </div>
    </div>
  )
}
