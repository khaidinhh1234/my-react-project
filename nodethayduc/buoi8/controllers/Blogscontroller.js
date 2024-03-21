import Blogs from "../module/blogs.js";

class Blogscontroller {
  async index (req, res) {
  try {
    // await client.connect();
    const data = await Blogs.find(req.query);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

async show (req, res)  {
  try {
    const result = await Blogs.findById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

 async add (req, res) {
  try {
    // await client.connect();
    const data = await Blogs.create(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
 async update (req, res)  {
  try {
    const result = await Blogs.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

 async delete (req, res)  {
  try {
    const result = await Blogs.findByIdAndDelete(req.params.id);
    res.status(204).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

}


export default Blogscontroller
// export const getBlogs = async (req, res) => {
//   try {
//     // await client.connect();
//     const data = await Blogs.find(req.query);
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// export const getBlogById = async (req, res) => {
//   try {
//     const result = await Blogs.findById(req.params.id);
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// export const addBlog = async (req, res) => {
//   try {
//     // await client.connect();
//     const data = await Blogs.create(req.body);
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };
// export const updateBlogs = async (req, res) => {
//   try {
//     const result = await Blogs.findByIdAndUpdate(req.params.id, req.body);
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// export const deleteBlogs = async (req, res) => {
//   try {
//     const result = await Blogs.findByIdAndDelete(req.params.id);
//     res.status(204).json(result);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };
