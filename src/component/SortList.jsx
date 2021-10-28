import React from "react";
import { CSSTransition } from "react-transition-group";
export default function SortList(props) {
  return (
    <div ref={props.ref}>
      <div>
        <CSSTransition
          in={props.sort}
          timeout={300}
          unmountOnExit
          classNames="alert"
        >
          <div
            className="modal-backdrop"
            className="absolute rounded-lg border w-64 bg-white shadow-md"
          >
            <button
              data-cy="sort-selection"
              onClick={() => {
                props.newest();
                props.setSort(false);
              }}
              variant="primary"
              type="button"
              className="border-b w-full hover:bg-gray-100 cursor-pointer px-5 flex space-x-4 py-3"
            >
              <svg
                data-cy="sort-selection-icon"
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
                  d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
                />
              </svg>
              <p data-cy="sort-selection-title" className="capitalize text-xl">
                terbaru
              </p>
              {props.newest == -1 ? (
                <div className="ml-10">
                  <svg
                    data-cy="sort-selection-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400 inline-flex m-auto"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              ) : (
                <div></div>
              )}
            </button>
            <button
              data-cy="sort-selection"
              onClick={() => {
                props.longest();
                props.setSort(false);
              }}
              type="button"
              className="border-b w-full hover:bg-gray-100 cursor-pointer px-5 flex space-x-4 py-3"
            >
              <svg
                data-cy="sort-selection-icon"
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
                  d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                />
              </svg>
              <p data-cy="sort-selection-title" className="capitalize text-xl">
                terlama
              </p>
              {props.longest == -1 ? (
                <div className="ml-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400 inline-flex m-auto"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              ) : (
                <div></div>
              )}
            </button>
            <button
              data-cy="sort-selection"
              onClick={() => {
                props.ascend();
                props.setSort(false);
              }}
              type="button"
              className="border-b w-full hover:bg-gray-100 cursor-pointer px-5 flex space-x-4 py-3"
            >
              <svg
                data-cy="sort-selection-icon"
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
                  d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
                />
              </svg>
              <p data-cy="sort-selection-title" className="capitalize text-xl">
                A-Z
              </p>
              {props.ascend == -1 ? (
                <div className="ml-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400 inline-flex m-auto"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              ) : (
                <div></div>
              )}
            </button>
            <button
              data-cy="sort-selection"
              onClick={() => {
                props.descend();
                props.setSort(false);
              }}
              type="button"
              className="border-b w-full hover:bg-gray-100 cursor-pointer px-5 flex space-x-4 py-3"
            >
              <svg
                data-cy="sort-selection-icon"
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
                  d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
                />
              </svg>
              <p data-cy="sort-selection-title" className="capitalize text-xl">
                Z-A
              </p>
              {props.descend == -1 ? (
                <div className="ml-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400 inline-flex m-auto"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              ) : (
                <div></div>
              )}
            </button>
            <button
              data-cy="sort-selection"
              onClick={() => {
                props.setSort(false);
                props.havent();
              }}
              type="button"
              className="border-b w-full hover:bg-gray-100 cursor-pointer px-5 flex space-x-4 py-3"
            >
              <svg
                data-cy="sort-selection-icon"
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
                  d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                />
              </svg>
              <p data-cy="sort-selection-title" className="capitalize text-xl">
                belum selesai
              </p>
              {props.havent == true ? (
                <div className="ml-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400 inline-flex m-auto"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              ) : (
                <div></div>
              )}
            </button>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
}
