import { Link } from "react-router-dom";

const ManagePost = () => {
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
      <div className="text-center mb-5"></div>
      <div className="overflow-x-auto border border-[#e4e4e4] rounded-lg">
        <table className="table">
          <thead className="text-sm text-gray-500">
            <tr className="border-[#e4e4e4]">
              <th>Image</th>
              <th>Item Name</th>
              <th>User Email</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="font-semibold border-[#e4e4e4]">
              <td>
                <img className="w-16 h-12 object-cover rounded-md ml-2" />
              </td>
              <td>item.itemNam</td>
              <td>item.email</td>
              <td>item.category</td>
              <td>item.price</td>
              <td>
                <Link className="col-span-1">
                  <button className="bg-primary px-3 py-2 border rounded-lg border-primary hover:border-primary  hover:text-primary text-white uppercase transition-all hover:bg-white duration-300 hover:scale-105">
                    details
                  </button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagePost;
