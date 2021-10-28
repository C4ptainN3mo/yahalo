import React from "react";
import { CSSTransition } from "react-transition-group";

function confirm(props) {
  return (
    <div>
      <CSSTransition
        in={props.info}
        timeout={300}
        unmountOnExit
        unmountOnExit
        onEnter={() => props.setShowButton(false)}
        onExit={() => props.setShowButton(true)}
        classNames="alert"
      >
        <div
          onClick={() => {
            props.setInfo(false);
            props.setShowDelete(false);
            props.getItem();
          }}
          data-cy="modal-information"
          className="bg-black bg-opacity-50 w-full z-20 modal absolute inset-0 flex justify-center items-center "
        >
          <div className="bg-white rounded-xl flex gap-5 w-[500px] py-4 px-6">
            <svg
              data-cy="modal-information-icon"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-450"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 data-cy="modal-information-title">Todo berhasil di hapus</h2>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}

export default confirm;
