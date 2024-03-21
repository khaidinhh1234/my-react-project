import routeBlogs from "./blog";

export default function route(app) {
  app.use("/api/v1/blogs", routeBlogs);
}
