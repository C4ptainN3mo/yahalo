import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import png from "../images/to-do.png";
import axios from "axios";
import { useParams } from "react-router";
import { useState, useRef } from "react";
import Upload from "../component/Upload";
import Title from "../component/Title";
import ListItem from "../component/ListItem";
import SortList from "../component/SortList";

function NewActivity(props) {
  const [showModal, setShowModal] = React.useState(false);
  let { id } = useParams();
  const [state, setState] = useState({});
  const [list, setList] = React.useState([]);
  const getData = async () => {
    const url = `https://todo.api.devcode.gethired.id/activity-groups/${id}`;
    try {
      let respond = await axios.get(url);
      return setList(respond.data);
    } catch (err) {
      console.log(err, "error");
    }
  };
  React.useEffect(() => {
    getData();
    return () => {
      setState({});
    };
  }, []);

  // item
  const [item, setItem] = React.useState([]);
  const getItem = async () => {
    const url = `https://todo.api.devcode.gethired.id/todo-items?activity_group_id=${id}`;
    try {
      let responds = await axios.get(url);
      setItem(responds.data.data);
    } catch (err) {
      console.log(err, "error");
    }
  };
  React.useEffect(() => {
    getItem();
    return () => {
      setState({});
    };
  }, []);

  const [title, setTitle] = React.useState(false);
  const [showButton, setShowButton] = useState(true);
  const ref = useRef();
  React.useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (title && ref.current && !ref.current.contains(e.target)) {
        setTitle(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [title]);

  //sort

  const [modal, setModal] = useState(true);
  const [sort, setSort] = React.useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (sort && ref.current && !ref.current.contains(e.target)) {
        setSort(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [sort]);

  const ascend = () => {
    
    let sorted = item.sort((a, b) =>
      a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
    );
    setState({
      item: sorted,
    });
  };
  const descend = () => {
    let desorted = item.sort((a, b) =>
      a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1
    );
    setState({
      item: desorted,
    });
  };
 
  const newest = () => {
    let sortir = item.sort((a, b) =>
      a.id > b.id ? -1 : 1
    );
    setState({
      item: sortir,
    });
  }
  const longest = () => {
    let desortir = item.sort((a, b) =>
      a.id > b.id ? 1 : -1
    );
    setState({
      item: desortir,
    });
  }

  const havent = () => {
    let haventer = item.sort((a, b) =>
      a.is_active > b.is_active ? -1 : 1
    );
    setState({
      item: haventer,
    });
  }
  
  

  return (
    <div>
      <React.Fragment>
        <div className="bg-[#f4f4f4]">
          <div className="absolute w-3/4 h-14 top-36 left-48 items-center font-bold  text-black text-2xl inline-flex justify-between">
            <div className="flex gap-x-6 w-full">
              <Link to="/home">
                <svg data-cy="todo-back-button"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 mt-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              {showButton && (
                <h2 data-cy="todo-title"
                  onClick={() => {
                    setTitle(true);
                  }}
                  className="text-3xl lg:text-4xl"
                >
                  {list.title}
                </h2>
              )}
              <div ref={ref}>
                <Title
                  getData={getData}
                  id={id}
                  title={title}
                  setTitle={setTitle}
                  setShowButton={setShowButton}
                  showButton={showButton}
                />
              </div>
              {showButton && (
                <button data-cy="todo-title-edit-button"
                  type="submit"
                  onClick={() => {
                    setTitle(true);
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
              )}
            </div>

            <div>
              <div data-cy="activity-add-button" className="button flex">
                <div className="relative">
                  <div className="relative">
                    <div>
                      <div>
                        <button data-cy="todo-sort-button"
                          onClick={() => {
                            setSort(true);
                          }}
                          className="border-2 font-light rounded-full mr-5 mt-2 h-12 w-12"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-gray-350 inline-block align-middle"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
                          </svg>
                        </button>
                        <div>
                          <SortList
                          item={item}
                          ref={ref}
                          havent={havent}
                            ascend={ascend}
                            descend={descend}
                            newest={newest}
                            longest={longest}
                            setModal={setModal}
                            modal={modal}
                            sort={sort}
                            setSort={setSort}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button data-cy="todo-add-button"
                    onClick={() => {
                      setShowModal(true);
                    }}
                    className="px-6 py-3 gap-x-2 text-white  bg-blue-450 flex rounded-3xl"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 my-auto "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Tambah
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {item === "" ? (
          <React.Fragment>
            <div data-cy="todo-empty-state" className="absolute w-auto h-auto left-96 top-72 flex">
              {showButton && (
                <img
                  onClick={() => {
                    setShowModal(true);
                  }}
                  className="align-middle pl-52"
                  src={png}
                />
              )}
            </div>
          </React.Fragment>
        ) : (
          <div>
            <div className="z-10">
              <div className=" p-2 w-full h-auto justify-center items-center grid grid-cols-1">
                {item.map((data, index) => (
                  <ListItem
                  getItem={getItem}
                    id={data.id}
                    key={index}
                    title={data.title}
                    activity_group_id={data.activity_group_id}
                    is_active={data.is_active}
                    priority={data.priority}
                  ></ListItem>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Upload */}
        <Upload
          getItem={getItem}
          showModal={showModal}
          setShowModal={setShowModal}
        />
        {/* Upload */}
      </React.Fragment>
    </div>
  );
}

export default NewActivity;
