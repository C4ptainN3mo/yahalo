import React from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

function Upload(props) {
  const [disableSubmit, setDisableSubmit] = React.useState(true);
  const [loading, setLoading] = useState(false);
  let params = useParams();
  const [values, setValues] = React.useState({
    activity_group_id: params.id,
    title: "",
    is_active: true,
    _comment: "",
    priority: "",
  });
  const [error, setError] = React.useState({
    activity_group_id: params.id,
    title: "",
    is_active: true,
    _comment: "",
    priority: "",
  });
  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setValues((values) => ({
      ...values,
      [key]: value,
    }));
    if (key === "title")
      if (value === "") {
        error.title = "judul Tidak Boleh Kosong";
      } else {
        error.title = "";
      }
    if (key === "priority")
      if (value == "") {
        values.priority = "very-high";
      }
    disableSubmitHandle();
  };

  const disableSubmitHandle = () => {
    if (values.title === "" && values.priority === "") {
      return setDisableSubmit(false);
    } else {
      return setDisableSubmit(true);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `https://todo.api.devcode.gethired.id/todo-items`;

    try {
      await axios.post(url, values);
      setLoading(false);
      props.getItem();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div>
        <CSSTransition
          in={props.showModal}
          timeout={300}
          unmountOnExit
          classNames="alert"
        >
          <div data-cy="modal-add"
            variant="primary"
            className="bg-black bg-opacity-50 z-20 modal absolute inset-0 flex justify-center items-center"
          >
            <div className="bg-white rounded-lg">
              <div className="px-10">
                <div className="flex items-center pt-10 pb-4 space-x-96 justify-between">
                  <h1 data-cy="modal-add-title" className="text-3xl popin font-semibold capitalize">
                    tambah list item
                  </h1>
                  <svg data-cy="modal-add-close-button"
                    onClick={() => {
                      props.setShowModal(false);
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <hr />
                <div className="mt-14 pb-10">
                  <form onSubmit={handleSubmit} action="">
                    <div className="grid gap-1">
                      <label data-cy="modal-add-name-title"
                        htmlFor="title"
                        className="capitalize text-xl font-semibold popin"
                      >
                        nama list item
                      </label>
                      <input data-cy="modal-add-name-input"
                        name="title"
                        onChange={handleChange}
                        onBlur={handleChange}
                        placeholder="Tambahkan Nama Activity"
                        type="text"
                        className="border outline-none h-12 rounded-lg border-gray-300 px-3 popin focus:border-blue-500"
                      />
                    </div>
                    <div className="grid gap-1 pt-12 capitalize">
                      <label data-cy="modal-add-priority-title"
                        htmlFor=""
                        className="capitalize text-xl font-semibold  popin"
                      >
                        priority
                      </label>
                      <select data-cy="modal-add-priority-dropdown"
                        name="priority"
                        onChange={handleChange}
                        onBlur={handleChange}
                        className="outline-none border rounded-lg h-12 capitalize"
                      >
                        <option selected data-cy="modal-add-priority-item" value="very-high">very high</option>
                        <option data-cy="modal-add-priority-item" value="high">high</option>
                        <option data-cy="modal-add-priority-item" value="normal">medium</option>
                        <option data-cy="modal-add-priority-item" value="low">low</option>
                        <option data-cy="modal-add-priority-item" value="very-low">very low</option>
                      </select>
                    </div>
                    <div className="flex items-end justify-end py-10 px-10">
                      <button data-cy="modal-add-save-button"
                        onClick={() => {
                          props.setShowModal(false);
                          props.getItem()
                        }}
                        type="submit"
                        className={` text-white px-10 py-5 text-2xl popin font-semibold rounded-full ${
                          disableSubmit ? " bg-blue-400" : " bg-blue-500"
                        }`}
                      >
                        {loading ? "loading" : "sukses"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
}

export default Upload;
