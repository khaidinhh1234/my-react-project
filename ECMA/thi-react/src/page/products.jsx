import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products, onXoa }) => {
  return (
    <div className="container">
      <h1> Danh sách sản phẩm</h1>
      <Link to="/admin/products/add" className="btn btn-info">
        {" "}
        Thêm
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>Tên</th>
            <th>Ảnh</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Mô tả</th>
            <th>admin</th>
          </tr>
        </thead>
        <tbody>
          {products.map((pro, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>
                <h5>{pro.name}</h5>
              </td>

              <td>
                <img src={pro.image} alt={pro.name} width="150" />
              </td>

              <td>
                <span>{pro.price}</span>
              </td>
              <td>
                <span>{pro.quality}</span>
              </td>
              <td>
                <span>{pro.description}</span>
              </td>

              <td>
                <button
                  className="btn btn-danger "
                  onClick={() => onXoa(pro.id)}
                >
                  Xóa
                </button>
                <Link
                  to={`/admin/products/${pro.id}/edit`}
                  className="btn btn-primary m-lg-1"
                >
                  Cập nhật
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
