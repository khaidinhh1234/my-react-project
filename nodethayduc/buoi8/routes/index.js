import routeBlogs from "./blog.js";

export default function route(app) {
  app.use("/api/v1/blogs", routeBlogs);
}
