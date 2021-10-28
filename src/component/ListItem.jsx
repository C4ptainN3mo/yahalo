import React, { useState } from "react";
import Edit from "./Edit";
import DeletePopUp from "./Delete";
import Check from "./check";

function ListItem(props) {
  const [showButton, setShowButton] = useState(true);
  const [showModal, setShowModal] = React.useState(false);
  const [showDelete, setShowDelete] = React.useState(false);

  return (
    <div className="mb-2">
      <div data-cy="todo-item" className={`border flex relative left-52 top-60 w-3/4 items-center bg-white p-7 rounded-lg shadow-xl justify-between`}>
        <div>
          <div className="w-full h-full inline-flex">
            <div className="mr-3">
              <Check
                getItem={props.getItem}
                id={props.id}
                is_active={props.is_active}
                title={props.title}
                priority={props.priority}
                activity_group_id={props.activity_group_id}
              />
            </div>
            <div data-cy="todo-item-priority-indicator" className="items-center justify-center mx-4 inline-flex">
              <div
                className={`w-5 h-5 rounded-full ${
                  props.priority == "very-high"
                    ? "bg-red-500"
                    : props.priority == "high"
                    ? "bg-yellow-500"
                    : props.priority == "normal"
                    ? "bg-green-400"
                    : props.priority == "low"
                    ? "bg-blue-400"
                    : "bg-indigo-500"
                }`}
              ></div>
            </div>
            <h1 data-cy="todo-item-title"
              className={`font-semibold text-lg break-all  ${
                props.is_active == 0
                  ? "line-through text-[#888]"
                  : "text-[#303030]"
              }`}
            >
              {props.title}
            </h1>
            <button data-cy="todo-item-edit-button"
              onClick={() => {
                setShowModal(true);
              }}
              className="inline-flex ml-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div data-cy="todo-item-delete-button"
          className="ml-5 text-gray-450"
          onClick={() => {
            setShowDelete(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <Edit
        getItem={props.getItem}
        id={props.id}
        setShowButton={setShowButton}
        showButton={showButton}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <DeletePopUp
        title={props.title}
        getItem={props.getItem}
        id={props.id}
        setShowButton={setShowButton}
        showButton={showButton}
        showDelete={showDelete}
        setShowDelete={setShowDelete}
      />
    </div>
  );
}

export default ListItem;
