import { FaRegPenToSquare } from "react-icons/fa6";
import { ImCancelCircle } from "react-icons/im";
import { LuTrash2 } from "react-icons/lu";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import { Bars } from "react-loader-spinner";

const ManagePost = () => {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_URL}/post/${user.email}`
      );
      setPosts(data);
    };
    getData();
    setLoading(false);
  }, [user, refresh]);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_URL}/post/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            setRefresh(!refresh);
          });
      }
    });
  };

  if (loading) {
    return (
      <div className="flex h-full w-full justify-center items-center pt-20">
        <Bars
          height="80"
          width="80"
          color="#E9424F"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  return (
    <div className="my-5 max-w-7xl w-[95%] md:w-[93%] mx-auto mt-10 md:mt-14">
      {/* <Helmet>
        <title>All Crafts | ArtFusion</title>
      </Helmet> */}
      <div className="text-center mb-10 md:mb-14">
        <h3 className="text-2xl md:text-4xl font-bold mb-3">
          <span className="text-primary">Manage</span> My Posts
        </h3>
      </div>
      <div className="">
        <Tabs>
          <div className="font-semibold">
            <TabList>
              <Tab>Need Volunteer Posts</Tab>
              <Tab>Volunteer Request Post</Tab>
            </TabList>
          </div>

          <TabPanel>
            <div className="overflow-x-auto mt-7 border border-[#e4e4e4] dark:border-gray-500 rounded-lg">
              <table className="table">
                <thead className="text-sm text-gray-500 dark:text-gray-400">
                  <tr className="border-[#e4e4e4] dark:border-gray-500">
                    <th>Post Title</th>
                    <th>Category</th>
                    <th>Deadline</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {posts.map((post) => (
                    <tr
                      key={post._id}
                      className="font-semibold border-[#e4e4e4] dark:border-gray-500"
                    >
                      <td>{post.post_title}</td>
                      <td>{post.category}</td>
                      <td>{new Date(post.deadline).toLocaleDateString()}</td>
                      <td className="flex items-center justify-center gap-4">
                        <Link to={"/posts/update"} className="col-span-1 ">
                          <FaRegPenToSquare
                            title="Edit"
                            className="text-[#30A458] hover:scale-[1.15] duration-300"
                            size={19}
                          />
                        </Link>
                        <button
                          onClick={() => handleDelete(post._id)}
                          className="col-span-1 "
                        >
                          <LuTrash2
                            title="Delete"
                            className="text-[#E7404C] hover:scale-[1.15] duration-300"
                            size={21}
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="overflow-x-auto mt-5 border border-[#e4e4e4] dark:border-gray-500 rounded-lg">
              <table className="table">
                <thead className="text-sm text-gray-500 dark:text-gray-400">
                  <tr className="border-[#e4e4e4] dark:border-gray-500">
                    <th>Post Title</th>
                    <th>Category</th>
                    <th>Deadline</th>
                    <th>Status</th>

                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="font-semibold border-[#e4e4e4] dark:border-gray-500">
                    <td>item.itemNam</td>
                    <td>item.category</td>
                    <td>item.category</td>
                    <td>item.price</td>
                    <td className="flex items-center justify-center">
                      <ImCancelCircle
                        title="Cancel Request"
                        className="cursor-pointer text-primary hover:scale-[1.15] duration-300"
                        size={21}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ManagePost;
