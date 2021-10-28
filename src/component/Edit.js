import React from "react";

import axios from "axios";
import { useParams } from "react-router";

import { useState } from "react";
import { CSSTransition } from "react-transition-group";

function Edit(props) {
  const [loading, setLoading] = useState(false);
  let { id } = useParams();
  const getDetail = async () => {
    const url = `https://todo.api.devcode.gethired.id/todo-items/${props.id}`;
    try {
      let respond = await axios.get(url);
      setValues((values) => ({
        ...values,
        title: respond.data?.title,
        isActive: respond.data?.isActive,
        priority: respond.data?.priority,
        isActive: respond.data?.isActive,
        activity_group_id: respond.data?.activity_group_id,
        id: respond?.id,
      }));
    } catch {}
  };
  React.useEffect(() => {
    getDetail();
  }, []);
  const [values, setValues] = React.useState({
    title: "",
    isActive: 1,
    priority: "",
    activity_group_id: { id },
  });

  const handleChange = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    setValues((values) => ({
      ...values,
      [key]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `https://todo.api.devcode.gethired.id/todo-items/${props.id}`;

    try {
      let result = await axios.patch(url, values);
      props.getItem()
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <CSSTransition
        in={props.showModal}
        timeout={300}
        unmountOnExit
        classNames="warning"
      >
        <div data-cy="modal-add"
          variant="primary"
          className="bg-black bg-opacity-50 z-20 modal absolute inset-0 flex justify-center items-center"
        >
          <div className="bg-white rounded-lg">
            <div className="px-10">
              <div className="flex items-center pt-10 pb-4 space-x-96 justify-between">
                <h1 data-cy="modal-add-title" className="text-3xl popin font-semibold capitalize">
                  Edit item
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
                      value={values.title}
                      id="title"
                      placeholder="Tambahkan nama activity"
                      type="text"
                      className="border outline-none h-12 rounded-lg border-gray-300 px-3 popin focus:border-blue-500"
                    />
                  </div>
                  <div className="grid gap-1 pt-12">
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
                      id="priority"
                      className="outline-none border rounded-lg h-12"
                    >
                      <option data-cy="modal-add-priority-item" value="very-high">very high</option>
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
                      className="bg-blue-500 text-white px-10 py-5 text-2xl popin font-semibold rounded-full"
                    >
                      {loading ? "loading" : "sukses"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}

export default Edit;
