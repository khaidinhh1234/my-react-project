import React from 'react'
import { Link } from 'react-router-dom'

const SanPhamList = ({sanphams,deleteSP}) => {
  return (
    <div >  
       <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 className="h2">Danh Sách Phim </h1>
    <div className="btn-toolbar mb-2 mb-md-0">

      <Link to="/admin/sanphams/add" type="button" className="btn btn-primary   tw-mr-20">
        <svg className="bi"><use xlinkHref="#calendar3" /></svg>
        Thêm Phim
      </Link>
    </div>
  </div>
    <div className="table-responsive small">
      <table className="table table-striped table-sm tw-text-center">
        <thead>
          <tr>
            <th scope="col">#</th>
            
            <th scope="col">Tên Phim</th>
            <th scope="col">Ảnh </th>
            <th scope="col">Thời gian chiếu</th>
            <th scope="col">Ngày Chiếu </th>
       
            <th scope="col">Quản lý  </th>
          </tr>
        </thead>
        <tbody>
      {sanphams.map((sp,i)=>(
          <tr key={i}>
            <td>{i+1}</td><td><h6>{sp.name}</h6></td>
            <td><img src={sp.image} alt={sp.name} width={100}/></td>
            
            <td><span>{sp.tl}</span></td>
            <td><span>{sp.dateph}</span></td>


   
            <td>
              <button className="btn btn-danger " onClick={()=>deleteSP(sp.id)}>Xóa</button>
              <Link to={`/admin/sanphams/edit/${sp.id}`} className="btn btn-primary tw-ml-1">Cập Nhật </Link>
            </td>
          </tr>
            ))}
        </tbody>
      </table>
    </div></div>
  )
}

export default SanPhamList