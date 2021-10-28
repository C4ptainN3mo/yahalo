import React from "react";
import axios from "axios";
import "animate.css";
import { useHistory } from "react-router-dom";
import DeleteItem from "./DeleteItem";

function Isi(props) {
  let history = useHistory();

  const [showDelete, setShowDelete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [showButton, setShowButton] = React.useState(true);

  const [data, setdata] = React.useState([]);
  const getData = async (id) => {
    const url = `https://todo.api.devcode.gethired.id/activity-groups/${props.id}`;
    try {
      let respond = await axios.get(url);
      setdata(respond.data.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err, "error");
      setIsLoading(false);
    }
  };
  React.useEffect(() => {
    getData();
  }, []);

  const date = new Date(props.created_at);
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var monthName = months[date.getMonth()];
  return (
    <div>
      <div className="mr-12 w-3/4 mb-9">
        <div
          data-cy="activity-item"
          className="activity-card flex border-4 border-white bg-white justify-between w-full max-w-xl p-12 rounded-lg"
        >
          <div className="flex flex-col py-6 ">
            <div
              className="cursor-pointer"
              onClick={() => {
                history.push(`/NewActivity/${props.id}`);
              }}
            >
              <div data-cy="activity-item-title" className="h-40">
                <h2 className=" text-xl -mt-11 -ml-4 text-left  font-bold">
                  {props.title}
                </h2>
              </div>
            </div>
            <div
              data-cy="activity-item-date"
              className="card-footer flex flex-row space-x-5 justify-between order-2 w-48"
            >
              <div className="text-left">
                <p className="">
                  {date.getDate()} {monthName} {date.getFullYear()}
                </p>
              </div>
              <div className="text-righ mr-3">
                <button
                  onClick={() => {
                    setShowDelete(true);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <DeleteItem
          title={props.title}
          getData={props.getData}
          id={props.id}
          setShowButton={setShowButton}
          showButton={showButton}
          showDelete={showDelete}
          setShowDelete={setShowDelete}
        />
      </div>
    </div>
  );
}

export default Isi;
