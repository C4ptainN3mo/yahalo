import React from "react";
import axios from "axios";
import { useParams } from "react-router";

function Check(props) {
  const [values, setValues] = React.useState({
    title: props.title,
    is_active: props.is_active,
    priority: props.priority,
    _comment: "list of priority is : very-high, high, normal, low, very-low",
  });

  const handleDone = async (e) => {
    await setValues((values) => {
      return {
        ...values,
        is_active: values.is_active === 1 ? 0 : 1,
      };
    });
    handleSubmit();
  };
  const handleSubmit = async (e) => {
    const url = `https://todo.api.devcode.gethired.id/todo-items/${props.id}`;

    try {
      let result = await axios.patch(url, values);
      props.getItem();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form data-cy="todo-item-checkbox" onClick={handleSubmit} onSubmit={handleSubmit}>
        <input
          data-cy="todo-item-checkbox"
          name="is_active"
          checked={values.is_active === 1 ? true : false}
          onChange={handleDone}
          value={values.is_active}
          type="checkbox"
          className="h-5 w-5"
        />
      </form>
    </div>
  );
}

export default Check;
