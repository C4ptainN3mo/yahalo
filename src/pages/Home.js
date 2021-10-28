import React from "react";
import gambar1 from "../images/gambar1.png";
import axios from "axios";
import Isi from "../component/Isi";
import Loading from "../component/loading";
import { useHistory } from "react-router";

function Home(props) {
  const history = useHistory();
  const [state, setState] = React.useState({});
  const [data, setdata] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const getData = async () => {
    const url =
      "https://todo.api.devcode.gethired.id/activity-groups?email=danendrapr55@gmail.com";
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
    return () => {
      setState({});
    };
  }, []);

  // Tambah

  const [upload, setUpload] = React.useState({
    title: "New Activity",
    email: "danendrapr55@gmail.com",
    _comment:
      "email digunakan untuk membedakan list data yang digunakan antar aplikasi",
  });
  const url = `https://todo.api.devcode.gethired.id/activity-groups`;

  const handleUpload = async (e) => {
    try {
      await axios.post(url, upload);
      getData();
      setIsLoading(false);
    } catch (err) {
      console.log("error");
    }
  };
  return (
    <div  className="activity-title bg-[#f4f4f4]">
      {/* empty */}
      {data == "" ? (
        <React.Fragment>
          <h2 data-cy="activity-title" className=" font-bold text-black text-2xl lg:text-4xl">
            Activity
          </h2>
          <div data-cy="activity-empty-state" className="absolute w-auto h-auto left-96 top-72 flex">
            <div>
              <img src={gambar1} alt="" />
            </div>
            <div>
              <div className="h-60 w-96 rounded-lg border-8 border-light-blue-500 border-opacity-100">
                <div>
                  <svg
                    onClick={() => {
                      handleUpload();
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-32 w-32 m-auto mt-11 text-blue-450"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className=" text-center pt-12 text-2xl text-gray-450">
                <h1 className="desc1">Buat activity pertamamu</h1>
              </div>
              <div className="flex gap-x-6 items-center justify-center mt-20">
                <div className="w-5 h-5 rounded-full bg-gray-350"></div>
                <div className="w-5 h-5 rounded-full bg-gray-350"></div>
                <div className="w-5 h-5 rounded-full bg-gray-350"></div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : (
        //  Empty
        <React.Fragment>
          <div>
            <div className="absolute w-3/4 h-14 top-36 left-48 flex justify-between">
              <div>
                <h2 data-cy="activity-title" className=" font-bold text-black text-2xl lg:text-4xl">
                  Activity
                </h2>
              </div>
              <div data-cy="activity-add-button" className="button">
                <button
                  onClick={() => {
                    handleUpload();
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

            <div className="absolute box-border h-auto left-60 top-72 grid grid-cols-1 gap-x-2 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {/* Items */}
              {isLoading ? (
                <React.Fragment>
                  <Loading></Loading>
                  <Loading></Loading>
                  <Loading></Loading>
                </React.Fragment>
              ) : (
                data.map((data, index) => (
                  <Isi
                    key={index}
                    id={data.id}
                    title={data.title}
                    created_at={data.created_at}
                  ></Isi>
                ))
              )}

              {/* Items */}
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default Home;
