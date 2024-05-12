const UpdatePost = () => {
  return (
    <div className="mb-5 mt-10 max-w-7xl w-[95%] md:w-[93%] mx-auto">
      {/* <Helmet>
        <title>Update | ArtFusion</title>
      </Helmet> */}
      <div className="mb-10 md:mb-14">
        <h3 className="text-2xl text-center md:text-4xl font-bold mb-8">
          <span className="text-[#E56997]">Update</span> Craft Item
        </h3>
        <form
          // onSubmit={handleSubmit(handleUpdate)}
          className="card-body p-5 md:px-14 md:py-8 w-full border rounded-xl"
        >
          <div className="grid grid-cols-2 gap-10">
            <div className="form-control ">
              <label className="label">
                <span className="label-text font-semibold text-base">
                  Item Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Item Name"
                // defaultValue={itemName}
                className="input focus:outline-none focus:border bg-[#EEEDEE]"
                required
                // {...register("itemName")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base">
                  Stock Status
                </span>
              </label>
              <select
                required
                // {...register("stockStatus")}
                // defaultValue={stockStatus}
                className="select font-medium text-base *:font-medium focus:outline-none focus:border bg-[#EEEDEE]"
              >
                <option>In Stock</option>
                <option>Made to Order</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div className="form-control ">
              <label className="label">
                <span className="label-text font-semibold text-base">
                  Category
                </span>
              </label>
              <select
                // {...register("category")}
                required
                // defaultValue={category}
                className="select font-medium text-base *:font-medium focus:outline-none focus:border bg-[#EEEDEE]"
              >
                <option>Landscape Painting</option>
                <option>Portrait Drawing</option>
                <option>Watercolour Painting</option>
                <option>Oil Painting</option>
                <option>Charcoal Sketching</option>
                <option>Cartoon Drawing</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base">
                  Price
                </span>
              </label>
              <input
                type="number"
                // {...register("price")}
                placeholder="Price"
                // defaultValue={price}
                required
                className="input focus:outline-none focus:border bg-[#EEEDEE]"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div className="form-control ">
              <label className="label">
                <span className="label-text font-semibold text-base">
                  Image URL
                </span>
              </label>
              <input
                type="text"
                placeholder="Image URL"
                // defaultValue={photoURL}
                // {...register("photoURL")}
                className="input focus:outline-none focus:border bg-[#EEEDEE]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base">
                  Rating
                </span>
              </label>
              <input
                type="number"
                // {...register("rating")}
                // defaultValue={rating}
                placeholder="Rating"
                className="input focus:outline-none focus:border bg-[#EEEDEE]"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div className="form-control ">
              <label className="label">
                <span className="label-text font-semibold text-base">
                  Processing Time
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Processing Time"
                // {...register("processing_time")}
                // defaultValue={processing_time}
                className="input focus:outline-none focus:border bg-[#EEEDEE]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base">
                  Customization
                </span>
              </label>
              <select
                // {...register("customization")}
                // defaultValue={customization}
                className="select font-medium text-base *:font-medium focus:outline-none focus:border bg-[#EEEDEE]"
              >
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base">
                Description
              </span>
            </label>
            <textarea
              rows="3"
              // {...register("description")}
              // defaultValue={description}
              placeholder="Write a Description..."
              required
              className="textarea focus:outline-none focus:border bg-[#EEEDEE] text-base"
            ></textarea>
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-[#E56997] border-[#E56997] hover:border-[#28282B] hover:text-[#28282B] text-white uppercase transition-all hover:bg-white duration-300 hover:scale-105">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePost;
