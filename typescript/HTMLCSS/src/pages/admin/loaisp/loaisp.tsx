import { Link } from "react-router-dom";

const LoaiSanpham = ({ loaisps, Xoalsp }: any) => {
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Danh Sách Thể Loại </h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <Link
            to="/admin/loaisps/add"
            type="button"
            className="btn btn-primary   tw-mr-20"
          >
            <svg className="bi">
              <use xlinkHref="#calendar3" />
            </svg>
            Thêm Thể Loại
          </Link>
        </div>
      </div>
      <div className="table-responsive small">
        <table className="table table-striped table-sm tw-text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Thể Loại </th>

              <th scope="col">Quản lý </th>
            </tr>
          </thead>
          <tbody>
            {loaisps.map((lsp: any, i: number) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{lsp.name}</td>

                <td>
                  <button
                    className="btn btn-danger "
                    onClick={() => Xoalsp(lsp.id)}
                  >
                    Xóa
                  </button>
                  <Link
                    to={`/admin/loaisps/edit/${lsp.id}`}
                    className="btn btn-primary tw-ml-1"
                  >
                    Cập Nhật{" "}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoaiSanpham;
