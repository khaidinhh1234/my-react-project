import express from "express"; //khởi tạo bằng express

const app = express();
app.get(`/api/products`, (req, res) => {
  //request.url , request.method , request.handle
  const data = [
    { id: 1, name: "khai", tuoi: 19 },
    { id: 2, name: "dai", tuoi: 49 },
    { id: 3, name: "nam", tuoi: 32 },
    { id: 4, name: "nam", tuoi: 32 },
  ];
  res.json(data);
});

export const viteNodeApp = app;
/* import thêm "type":module; vào file package.json*/
