import React, { useEffect, useRef } from "react";
import alert from "../images/alert.png";
import axios from "axios";
import Confirm from "./confirm";
import { CSSTransition } from "react-transition-group";
export default function DeletePopUp(props) {
  //  delete
  const [isLoading, setIsLoading] = React.useState(false);
  const deleteHandle = async (id) => {
    const url = `https://todo.api.devcode.gethired.id/todo-items/${props.id}`;
    console.log(url);
    try {
      await axios.delete(url);
      props.getData();
      setIsLoading(false);
      console.log(url);
    } catch (err) {
      setIsLoading(false);
    }
  };

  const [info, setInfo] = React.useState(false);
  const [showButton, setShowButton] = React.useState(true);
  const [sort, setSort] = React.useState(false);
  const ref = useRef();
  React.useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (info && ref.current && !ref.current.contains(e.target)) {
        setInfo(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [info]);

  return (
    <CSSTransition
      in={props.showDelete}
      timeout={300}
      unmountOnExit
      classNames="alert"
    >
      <div className="bg-black bg-opacity-50 z-20 modal absolute inset-0 flex justify-center items-center">
        {showButton && (
          <div data-cy="modal-delete" className="bg-white rounded-lg">
            <div className="flex flex-col items-center justify-center py-10 px-24">
              <div>
                <img
                  data-cy="modal-delete-icon"
                  src={alert}
                  alt=""
                  className="h-28"
                />
              </div>
              <p
                data-cy="modal-delete-title"
                className="popin text-2xl text-center my-16"
              >
                Apakah anda yakin menghapus activity <br />
                <span className="popin text-2xl font-semibold">
                  "{props.title}"?
                </span>
              </p>
              <div className="flex space-x-7">
                <button
                  data-cy="modal-delete-cancel-button"
                  onClick={() => {
                    props.setShowDelete(false);
                  }}
                  className="popin bg-gray-200 text-2xl px-12 rounded-full text-gray-400 py-4 font-semibold "
                >
                  Batal
                </button>
                <button
                  data-cy="modal-delete-confirm-button"
                  onClick={() => {
                    deleteHandle();
                    props.getItem();
                    setInfo(true);
                  }}
                  className="popin bg-red-500 text-2xl px-12 rounded-full text-white py-4 font-semibold "
                >
                  Hapus
                </button>
              </div>
            </div>
          </div>
        )}
        <Confirm
          getItem={props.getItem}
          setShowDelete={props.setShowDelete}
          ref={ref}
          showButton={showButton}
          setShowButton={setShowButton}
          info={info}
          setInfo={setInfo}
        />
      </div>
    </CSSTransition>
  );
}
