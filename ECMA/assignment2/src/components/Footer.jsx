import React from 'react'

const Footer = () => {
  return (
    <div>

  
  <div className="container">
    <footer className="py-5">
      <div className="row">
        <div className="col-6 col-md-2 mb-2">
          <h5>Hỗ trợ thanh toán:</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Giới thiệu về công ty</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Chính sách bảo mật</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Quy chế hoạt động</a></li>
          
          </ul>
        </div>
        <div className="col-6 col-md-2 mb-3">
          <h5>Tư vấn mua hàng (Miễn phí)</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Kiểm tra hóa đơn điện tử</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Tin tuyển dụng</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Hướng dẫn mua online</a></li>
          
          </ul>
        </div>
        <div className="col-6 col-md-2 mb-3">
          <h5>Hỗ trợ kỹ thuật</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Hướng dẫn mua trả góp</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Chính sách trả góp</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Chính sách thu thập và
xử lý dữ liệu cá nhân</a></li>
           
          </ul>
        </div>
        <div className="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Theo dõi bản tin của chúng tôi</h5>
            <p>Thông báo hàng tháng về những gì mới và thú vị từ chúng tôi.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">Địa Chỉ Email </label>
              <input id="newsletter1" type="text" className="form-control" placeholder="Địa Chỉ Email " />
              <button className="btn btn-primary" type="button">Đặt Mua</button>
            </div>
          </form>
        </div>
      </div>
      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"/></svg>
      </a>
      <span class="mb-3 mb-md-0 text-body-secondary">&copy; 2024 Company, Inc</span>
    </div>
      </div>
    </footer>
  </div>
</div>

  )
}

export default Footer