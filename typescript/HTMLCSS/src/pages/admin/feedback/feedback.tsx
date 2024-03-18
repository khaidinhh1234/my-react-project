const FeedBackList = ({ feedbacks, Xoafb }: any) => {
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Danh Sách Feedback </h1>
        <div className="btn-toolbar mb-2 mb-md-0"></div>
      </div>
      <div className="table-responsive small">
        <table className="table table-striped table-sm tw-text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tài Khoản </th>
              <th scope="col">Nội Đung </th>
              <th scope="col">Quản lý </th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((fb: any, i: number) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{fb.username}</td>
                <td>{fb.noidung}</td>

                <td>
                  <button
                    className="btn btn-danger "
                    onClick={() => Xoafb(fb.id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeedBackList;
