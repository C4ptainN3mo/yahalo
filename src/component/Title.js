import React from "react";
import { CSSTransition } from "react-transition-group";
import axios from "axios";

function Title(props) {
  const getDetail = async () => {
    const url = `https://todo.api.devcode.gethired.id/activity-groups/${props.id}`;

    try {
      let respond = await axios.get(url);
      setValues((values) => ({
        ...values,
        title: respond.data?.title,
        id: respond.data?.id,
      }));
    } catch {}
  };
  React.useEffect(() => {
    getDetail();
  }, []);
  const [values, setValues] = React.useState({
    title: "",
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
    const url = `https://todo.api.devcode.gethired.id/activity-groups/${props.id}`;
    try {
      let result = await axios.patch(url, values);
      props.getData();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div ref={props.ref}>
      <CSSTransition
        in={props.title}
        timeout={300}
        unmountOnExit
        classNames="alert"
        onEnter={() => props.setShowButton(false)}
        onExited={() => props.setShowButton(true)}
      >
        <form action="submit" onSubmit={handleSubmit} className="flex">
          <input
            className="text-4xl font-bold text-bold pb-2 border-b-2 border-solid outline-none"
            type="text"
            value={values.title}
            onChange={handleChange}
            onBlur={handleChange}
            id="title"
          />
          <button
            type="submit"
            onClick={() => {
              props.setTitle(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400 mt-1"
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
        </form>
      </CSSTransition>
    </div>
  );
}

export default Title;
