// import React from "react";
// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <div>
//       <div className="wrapper">
//         {/* Header section */}
//         <header className="header-wrapper header-wrapper--home">
//           <div className="container">
//             {/* Logo link*/}
//             <a href="index.php" className="logo">
//               <img alt="logo" src="imgavt/logo2.png" />
//             </a>
//             {/* Main website navigation*/}
//             <nav id="navigation-box">
//               {/* Toggle for mobile menu mode */}
//               <a href="#" id="navigation-toggle">
//                 <span className="menu-icon">
//                   <span
//                     className="icon-toggle"
//                     role="button"
//                     aria-label="Toggle Navigation"
//                   >
//                     <span className="lines" />
//                   </span>
//                 </span>
//               </a>
//               {/* Link navigation */}
//               <ul id="navigation">
//                 <li>
//                   <span className="sub-nav-toggle plus" />
//                   <a href="index.php">Trang chủ</a>
//                 </li>
//                 <li>
//                   <span className="sub-nav-toggle plus" />
//                   <a href="index.php?act=dsphim1&sotrang=1">Phim</a>
//                   <ul>
//                     <li className="menu__nav-item">
//                       <a href="index.php?act=phimdangchieu">Phim Đang Chiếu</a>
//                     </li>
//                     <li className="menu__nav-item">
//                       <a href="index.php?act=phimsapchieu">Phim Sắp Chiếu</a>
//                     </li>
//                   </ul>
//                 </li>
//                 <li>
//                   <span className="sub-nav-toggle plus" />
//                   <a href>Thể loại</a>
//                   <ul>
//                     <li className="menu__nav-item">
//                       <a href="index.php?act=theloai&id_loai=1">Kinh Dị</a>
//                     </li>
//                     <li className="menu__nav-item">
//                       <a href="index.php?act=theloai&id_loai=2">Ngôn Tình</a>
//                     </li>
//                     <li className="menu__nav-item">
//                       <a href="index.php?act=theloai&id_loai=3">Hài</a>
//                     </li>
//                     <li className="menu__nav-item">
//                       <a href="index.php?act=theloai&id_loai=5">Ca nhạc</a>
//                     </li>
//                     <li className="menu__nav-item">
//                       <a href="index.php?act=theloai&id_loai=8">Cổ Trang</a>
//                     </li>
//                     <li className="menu__nav-item">
//                       <a href="index.php?act=theloai&id_loai=9">Hoạt Hình</a>
//                     </li>
//                   </ul>
//                 </li>
//                 <li>
//                   <span className="sub-nav-toggle plus" />
//                   <a href="index.php?act=rapchieu">Rạp chiếu</a>
//                 </li>
//                 <li>
//                   <span className="sub-nav-toggle plus" />
//                   <a href="index.php?act=lienhe">Liên hệ</a>
//                 </li>
//                 <li>
//                   <span className="sub-nav-toggle plus" />
//                   <a href="index.php?act=tintuc">Tin tức</a>
//                 </li>
//               </ul>
//             </nav>
//             {/* Additional header buttons / Auth and direct link to booking*/}
//             <div className="control-panel">
//               {/*                <div class="auth auth--home">*/}
//               {/*                    <div class="auth__show">*/}
//               {/*                        <span class="auth__image">*/}
//               {/*                          <img alt="" src="../web_cine_pass/images/client-photo/auth.png">*/}
//               {/*                        </span>*/}
//               {/*                    </div>*/}
//               {/*                    <a href="#" class="btn btn--sign btn--singin">*/}
//               {/*                        me*/}
//               {/*                    </a>*/}
//               {/**/}
//               {/*                </div>*/}
//               <a
//                 href="index.php?act=dangnhap"
//                 className="btn btn-md btn--warning btn--book "
//               >
//                 Đăng nhập
//               </a>
//             </div>
//           </div>
//         </header>
//         {/* Slider */}
//         <div className="bannercontainer">
//           <div className="banner">
//             <ul>
//               <li data-transition="fade" data-slotamount={7} className="slide">
//                 <video
//                   className="media-element"
//                   autoPlay="autoplay"
//                   preload="none"
//                   loop="loop"
//                   muted
//                   src="video/vn.mp4"
//                   width="100%"
//                 ></video>
//               </li>
//             </ul>
//           </div>
//         </div>
//         {/*end slider */}
//         {/* Main content */}
//         <section className="container">
//           <div className="movie-best">
//             <div className="col-sm-10 col-sm-offset-1 movie-best__rating">
//               Phim hay nhất
//             </div>
//             <div className="col-sm-12 change--col">
//               <div className="movie-beta__item ">
//                 <img
//                   alt="lỗi cmmr"
//                   src="imgavt/wolfoo và hòn đảo kỳ bí.jpg"
//                   style={{ width: 190, height: 285 }}
//                 />
//                 <span className="best-rate">5.0</span>
//                 <ul className="movie-beta__info">
//                   <li>
//                     <span className="best-voted">Đã có 44 lượt xem</span>
//                   </li>
//                   <li>
//                     <p className="movie__time">85</p>
//                     <p>Hài</p>
//                   </li>
//                   <li className="last-block">
//                     <a
//                       href="index.php?act=ctphim&id=22"
//                       className="slide__link"
//                     >
//                       Chi tiết
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div className="movie-beta__item ">
//                 <img
//                   alt="lỗi cmmr"
//                   src="imgavt/Biệt đội Marvels.jpg"
//                   style={{ width: 190, height: 285 }}
//                 />
//                 <span className="best-rate">5.0</span>
//                 <ul className="movie-beta__info">
//                   <li>
//                     <span className="best-voted">Đã có 34 lượt xem</span>
//                   </li>
//                   <li>
//                     <p className="movie__time">233</p>
//                     <p>Ngôn Tình</p>
//                   </li>
//                   <li className="last-block">
//                     <a href="index.php?act=ctphim&id=8" className="slide__link">
//                       Chi tiết
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div className="movie-beta__item ">
//                 <img
//                   alt="lỗi cmmr"
//                   src="imgavt/vongau.jpg"
//                   style={{ width: 190, height: 285 }}
//                 />
//                 <span className="best-rate">5.0</span>
//                 <ul className="movie-beta__info">
//                   <li>
//                     <span className="best-voted">Đã có 32 lượt xem</span>
//                   </li>
//                   <li>
//                     <p className="movie__time">119</p>
//                     <p>Hài</p>
//                   </li>
//                   <li className="last-block">
//                     <a
//                       href="index.php?act=ctphim&id=25"
//                       className="slide__link"
//                     >
//                       Chi tiết
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div className="movie-beta__item ">
//                 <img
//                   alt="lỗi cmmr"
//                   src="imgavt/anhon.jpg"
//                   style={{ width: 190, height: 285 }}
//                 />
//                 <span className="best-rate">5.0</span>
//                 <ul className="movie-beta__info">
//                   <li>
//                     <span className="best-voted">Đã có 32 lượt xem</span>
//                   </li>
//                   <li>
//                     <p className="movie__time">135</p>
//                     <p>Kinh Dị</p>
//                   </li>
//                   <li className="last-block">
//                     <a
//                       href="index.php?act=ctphim&id=26"
//                       className="slide__link"
//                     >
//                       Chi tiết
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div className="movie-beta__item ">
//                 <img
//                   alt="lỗi cmmr"
//                   src="imgavt/Đất rừng phương nam.jpg"
//                   style={{ width: 190, height: 285 }}
//                 />
//                 <span className="best-rate">5.0</span>
//                 <ul className="movie-beta__info">
//                   <li>
//                     <span className="best-voted">Đã có 19 lượt xem</span>
//                   </li>
//                   <li>
//                     <p className="movie__time">123</p>
//                     <p>Ca nhạc</p>
//                   </li>
//                   <li className="last-block">
//                     <a href="index.php?act=ctphim&id=7" className="slide__link">
//                       Chi tiết
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div className="movie-beta__item ">
//                 <img
//                   alt="lỗi cmmr"
//                   src="imgavt/Năm đêm kinh hoàng.jpg"
//                   style={{ width: 190, height: 285 }}
//                 />
//                 <span className="best-rate">5.0</span>
//                 <ul className="movie-beta__info">
//                   <li>
//                     <span className="best-voted">Đã có 14 lượt xem</span>
//                   </li>
//                   <li>
//                     <p className="movie__time">2</p>
//                     <p>Kinh Dị</p>
//                   </li>
//                   <li className="last-block">
//                     <a href="index.php?act=ctphim&id=6" className="slide__link">
//                       Chi tiết
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="col-sm-10 col-sm-offset-1 movie-best__check">
//               KIỂM TRA TẤT CẢ CÁC PHIM ĐANG CHIẾU
//             </div>
//           </div>
//           <div className="clearfix" />
//           <h2 id="target" className="page-heading heading--outcontainer">
//             Phim mới nhất
//           </h2>
//           <div className="col-sm-12">
//             <div className="row">
//               <div className="col-sm-8 col-md-12">
//                 {/* Movie variant with time */}
//                 <div
//                   className="movie movie--test movie--test--dark movie--test--left"
//                   style={{ height: 350 }}
//                 >
//                   <div className="movie__images">
//                     <a
//                       href="index.php?act=ctphim&id=31"
//                       className="movie-beta__link"
//                     >
//                       <img
//                         alt="lỗi cmnr"
//                         src="imgavt/700x1000_22_.jpg"
//                         style={{ width: 300, height: 350 }}
//                       />
//                     </a>
//                   </div>
//                   <div className="movie__info">
//                     <a
//                       href="index.php?act=ctphim&id=31"
//                       className="movie__title"
//                       style={{ fontSize: "1.4vw" }}
//                     >
//                       WONKA
//                     </a>
//                     <p className="movie__time">Thời Lượng Phim : 116 phút</p>
//                     <p className="movie__option">
//                       <a href>Thể Loại : Hài</a>
//                     </p>
//                     <div className="movie__rate">
//                       <span className="movie__rating">5.0</span>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Movie variant with time */}
//                 {/* Movie variant with time */}
//                 <div
//                   className="movie movie--test movie--test--dark movie--test--left"
//                   style={{ height: 350 }}
//                 >
//                   <div className="movie__images">
//                     <a
//                       href="index.php?act=ctphim&id=30"
//                       className="movie-beta__link"
//                     >
//                       <img
//                         alt="lỗi cmnr"
//                         src="imgavt/700x1000_18_.jpg"
//                         style={{ width: 300, height: 350 }}
//                       />
//                     </a>
//                   </div>
//                   <div className="movie__info">
//                     <a
//                       href="index.php?act=ctphim&id=30"
//                       className="movie__title"
//                       style={{ fontSize: "1.4vw" }}
//                     >
//                       NHỮNG KỶ NGUYÊN CỦA TAYLOR SWIFT
//                     </a>
//                     <p className="movie__time">Thời Lượng Phim : 168 phút</p>
//                     <p className="movie__option">
//                       <a href>Thể Loại : Hoạt Hình</a>
//                     </p>
//                     <div className="movie__rate">
//                       <span className="movie__rating">5.0</span>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Movie variant with time */}
//                 {/* Movie variant with time */}
//                 <div
//                   className="movie movie--test movie--test--dark movie--test--left"
//                   style={{ height: 350 }}
//                 >
//                   <div className="movie__images">
//                     <a
//                       href="index.php?act=ctphim&id=29"
//                       className="movie-beta__link"
//                     >
//                       <img
//                         alt="lỗi cmnr"
//                         src="imgavt/poster.jpg"
//                         style={{ width: 300, height: 350 }}
//                       />
//                     </a>
//                   </div>
//                   <div className="movie__info">
//                     <a
//                       href="index.php?act=ctphim&id=29"
//                       className="movie__title"
//                       style={{ fontSize: "1.4vw" }}
//                     >
//                       Bảy Viên Ngọc Rồng Siêu Cấp: Siêu Anh Hùng
//                     </a>
//                     <p className="movie__time">Thời Lượng Phim : 128 phút</p>
//                     <p className="movie__option">
//                       <a href>Thể Loại : Cổ Trang</a>
//                     </p>
//                     <div className="movie__rate">
//                       <span className="movie__rating">5.0</span>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Movie variant with time */}
//                 {/* Movie variant with time */}
//                 <div
//                   className="movie movie--test movie--test--dark movie--test--left"
//                   style={{ height: 350 }}
//                 >
//                   <div className="movie__images">
//                     <a
//                       href="index.php?act=ctphim&id=28"
//                       className="movie-beta__link"
//                     >
//                       <img
//                         alt="lỗi cmnr"
//                         src="imgavt/vietnam_-_poster_-_15.12.2023_1_.jpg"
//                         style={{ width: 300, height: 350 }}
//                       />
//                     </a>
//                   </div>
//                   <div className="movie__info">
//                     <a
//                       href="index.php?act=ctphim&id=28"
//                       className="movie__title"
//                       style={{ fontSize: "1.4vw" }}
//                     >
//                       THIẾU NIÊN VÀ CHIM DIỆC
//                     </a>
//                     <p className="movie__time">Thời Lượng Phim : 124 phút</p>
//                     <p className="movie__option">
//                       <a href>Thể Loại : Ca nhạc</a>
//                     </p>
//                     <div className="movie__rate">
//                       <span className="movie__rating">5.0</span>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Movie variant with time */}
//                 {/* Movie variant with time */}
//                 <div
//                   className="movie movie--test movie--test--dark movie--test--left"
//                   style={{ height: 350 }}
//                 >
//                   <div className="movie__images">
//                     <a
//                       href="index.php?act=ctphim&id=27"
//                       className="movie-beta__link"
//                     >
//                       <img
//                         alt="lỗi cmnr"
//                         src="imgavt/nguoivo.jpg"
//                         style={{ width: 300, height: 350 }}
//                       />
//                     </a>
//                   </div>
//                   <div className="movie__info">
//                     <a
//                       href="index.php?act=ctphim&id=27"
//                       className="movie__title"
//                       style={{ fontSize: "1.4vw" }}
//                     >
//                       NGƯỜI VỢ CUỐI CÙNG
//                     </a>
//                     <p className="movie__time">Thời Lượng Phim : 132 phút</p>
//                     <p className="movie__option">
//                       <a href>Thể Loại : Ngôn Tình</a>
//                     </p>
//                     <div className="movie__rate">
//                       <span className="movie__rating">5.0</span>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Movie variant with time */}
//                 {/* Movie variant with time */}
//                 <div
//                   className="movie movie--test movie--test--dark movie--test--left"
//                   style={{ height: 350 }}
//                 >
//                   <div className="movie__images">
//                     <a
//                       href="index.php?act=ctphim&id=26"
//                       className="movie-beta__link"
//                     >
//                       <img
//                         alt="lỗi cmnr"
//                         src="imgavt/anhon.jpg"
//                         style={{ width: 300, height: 350 }}
//                       />
//                     </a>
//                   </div>
//                   <div className="movie__info">
//                     <a
//                       href="index.php?act=ctphim&id=26"
//                       className="movie__title"
//                       style={{ fontSize: "1.4vw" }}
//                     >
//                       KẺ ĂN HỒN
//                     </a>
//                     <p className="movie__time">Thời Lượng Phim : 135 phút</p>
//                     <p className="movie__option">
//                       <a href>Thể Loại : Kinh Dị</a>
//                     </p>
//                     <div className="movie__rate">
//                       <span className="movie__rating">5.0</span>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Movie variant with time */}
//                 {/* Movie variant with time */}
//                 <div
//                   className="movie movie--test movie--test--dark movie--test--left"
//                   style={{ height: 350 }}
//                 >
//                   <div className="movie__images">
//                     <a
//                       href="index.php?act=ctphim&id=25"
//                       className="movie-beta__link"
//                     >
//                       <img
//                         alt="lỗi cmnr"
//                         src="imgavt/vongau.jpg"
//                         style={{ width: 300, height: 350 }}
//                       />
//                     </a>
//                   </div>
//                   <div className="movie__info">
//                     <a
//                       href="index.php?act=ctphim&id=25"
//                       className="movie__title"
//                       style={{ fontSize: "1.4vw" }}
//                     >
//                       YÊU LẠI VỢ NGẦU
//                     </a>
//                     <p className="movie__time">Thời Lượng Phim : 119 phút</p>
//                     <p className="movie__option">
//                       <a href>Thể Loại : Hài</a>
//                     </p>
//                     <div className="movie__rate">
//                       <span className="movie__rating">5.0</span>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Movie variant with time */}
//                 {/* Movie variant with time */}
//                 <div
//                   className="movie movie--test movie--test--dark movie--test--left"
//                   style={{ height: 350 }}
//                 >
//                   <div className="movie__images">
//                     <a
//                       href="index.php?act=ctphim&id=24"
//                       className="movie-beta__link"
//                     >
//                       <img
//                         alt="lỗi cmnr"
//                         src="imgavt/la.jpg"
//                         style={{ width: 300, height: 350 }}
//                       />
//                     </a>
//                   </div>
//                   <div className="movie__info">
//                     <a
//                       href="index.php?act=ctphim&id=24"
//                       className="movie__title"
//                       style={{ fontSize: "1.4vw" }}
//                     >
//                       CHÚA TỂ CỦA NHỮNG CHIẾC NHẪN - SỰ TRỞ VỀ CỦA NHÀ VUA{" "}
//                     </a>
//                     <p className="movie__time">Thời Lượng Phim : 125 phút</p>
//                     <p className="movie__option">
//                       <a href>Thể Loại : Kinh Dị</a>
//                     </p>
//                     <div className="movie__rate">
//                       <span className="movie__rating">5.0</span>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Movie variant with time */}
//                 <div className="row">
//                   <div className="social-group">
//                     <div className="col-sm-6 col-md-4 col-sm-push-6 col-md-push-4">
//                       <div className="social-group__head">
//                         Tết Làng Địa Ngục <br />
//                         <p style={{ padding: 5, fontSize: "2vw" }}>Kẻ ăn hồn</p>
//                       </div>
//                       <div className="social-group__content">
//                         Giữa lúc series kinh dị Tết ở làng địa ngục gây sốt, bộ
//                         đôi đạo diễn Trần Hữu Tấn <br className="hidden-xs" />
//                         <br />
//                         nhà sản xuất Hoàng Quân tiếp tục quay trở lại với Kẻ Ăn
//                         Hồn, dự án kinh dị ma mị mang đậm chất Việt.
//                       </div>
//                     </div>
//                     <div className="col-sm-6 col-md-4 col-sm-pull-6 col-md-pull-4">
//                       <div className="facebook-group">
//                         <img src="imgavt/kẻ ăn hồn.jpg" alt height="400px" />
//                       </div>
//                     </div>
//                     <div className="clearfix visible-sm" />
//                     <div className="col-sm-6 col-md-4">
//                       <div className="twitter-group">
//                         <div>
//                           <p className="twitter__head"> </p>
//                           <div className="social-group__head">Phim Hot</div>
//                           <p />
//                           <iframe
//                             id="twitter-widget-0"
//                             scrolling="no"
//                             frameBorder={0}
//                             allowTransparency="true"
//                             allowFullScreen="true"
//                             className="twitter-follow-button twitter-follow-button-rendered"
//                             style={{
//                               position: "static",
//                               visibility: "visible",
//                               width: 76,
//                               height: 20,
//                             }}
//                             title="Twitter Follow Button"
//                             src="https://platform.twitter.com/widgets/follow_button.d37472b4a6622d0b1fff46ad904f6896.en.html#dnt=false&id=twitter-widget-0&lang=en&screen_name=OliaGozha&show_count=false&show_screen_name=false&size=m&time=1701421844081"
//                             data-screen-name="OliaGozha"
//                           />
//                           <div>
//                             <img
//                               src="imgavt/kẻ ăn hồn2.jpeg"
//                               width={300}
//                               height={250}
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-sm-12">
//             <h2 className="page-heading">Tin mới Nhất </h2>
//             <div className="col-sm-4 similar-wrap col--remove">
//               <div className="post post--preview post--preview--wide">
//                 <div className="post__image">
//                   <img alt src="imgavt/Yêu lại vợ ngầu.jpg" />
//                   <div className="social social--position social--hide">
//                     <span className="social__name">Share:</span>
//                     <a
//                       href="#"
//                       className="social__variant social--first fa fa-facebook"
//                     />
//                     <a
//                       href="#"
//                       className="social__variant social--second fa fa-twitter"
//                     />
//                     <a
//                       href="#"
//                       className="social__variant social--third fa fa-vk"
//                     />
//                   </div>
//                 </div>
//                 <p className="post__date">28 tháng 12 năm 2023</p>
//                 <a href="single-page-left.html" className="post__title">
//                   "Yêu lại vợ ngầy" - sắp ra mắt{" "}
//                 </a>
//                 <a
//                   href="single-page-left.html"
//                   className="btn read-more post--btn"
//                 >
//                   ĐỌC THÊM
//                 </a>
//               </div>
//             </div>
//             <div className="col-sm-4 similar-wrap col--remove">
//               <div className="post post--preview post--preview--wide">
//                 <div className="post__image">
//                   <img alt src="imgavt/Biệt đội Marvels.jpg" />
//                   <div className="social social--position social--hide">
//                     <span className="social__name">Share:</span>
//                     <a
//                       href="#"
//                       className="social__variant social--first fa fa-facebook"
//                     />
//                     <a
//                       href="#"
//                       className="social__variant social--second fa fa-twitter"
//                     />
//                     <a
//                       href="#"
//                       className="social__variant social--third fa fa-vk"
//                     />
//                   </div>
//                 </div>
//                 <p className="post__date">22 tháng 12 năm 2023 </p>
//                 <a href="single-page-left.html" className="post__title">
//                   Biệt đội Marvels
//                 </a>
//                 <a
//                   href="single-page-left.html"
//                   className="btn read-more post--btn"
//                 >
//                   ĐỌC THÊM
//                 </a>
//               </div>
//             </div>
//             <div className="col-sm-4 similar-wrap col--remove">
//               <div className="post post--preview post--preview--wide">
//                 <div className="post__image">
//                   <img alt src="imgavt/Cán hồn tử địa.jpg" />
//                   <div className="social social--position social--hide">
//                     <span className="social__name">Share:</span>
//                     <a
//                       href="#"
//                       className="social__variant social--first fa fa-facebook"
//                     />
//                     <a
//                       href="#"
//                       className="social__variant social--second fa fa-twitter"
//                     />
//                     <a
//                       href="#"
//                       className="social__variant social--third fa fa-vk"
//                     />
//                   </div>
//                 </div>
//                 <p className="post__date">2 tháng 1 năm 2024 </p>
//                 <a href="single-page-left.html" className="post__title">
//                   Cán hồn tử địa{" "}
//                 </a>
//                 <a
//                   href="single-page-left.html"
//                   className="btn read-more post--btn"
//                 >
//                   ĐỌC THÊM
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>
//         <div className="clearfix" />
//         <footer className="footer-wrapper">
//           <section className="container">
//             <div className="col-xs-4 col-md-2 footer-nav">
//               <ul className="nav-link">
//                 <li>
//                   <a href="#" className="nav-link__item">
//                     Cities
//                   </a>
//                 </li>
//                 <li>
//                   <a href="movie-list-left.html" className="nav-link__item">
//                     Movies
//                   </a>
//                 </li>
//                 <li>
//                   <a href="trailer.html" className="nav-link__item">
//                     Trailers
//                   </a>
//                 </li>
//                 <li>
//                   <a href="rates-left.html" className="nav-link__item">
//                     Rates
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div className="col-xs-4 col-md-2 footer-nav">
//               <ul className="nav-link">
//                 <li>
//                   <a href="coming-soon.html" className="nav-link__item">
//                     Coming soon
//                   </a>
//                 </li>
//                 <li>
//                   <a href="cinema-list.html" className="nav-link__item">
//                     Cinemas
//                   </a>
//                 </li>
//                 <li>
//                   <a href="offers.html" className="nav-link__item">
//                     Best offers
//                   </a>
//                 </li>
//                 <li>
//                   <a href="news-left.html" className="nav-link__item">
//                     News
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div className="col-xs-4 col-md-2 footer-nav">
//               <ul className="nav-link">
//                 <li>
//                   <a href="#" className="nav-link__item">
//                     Terms of use
//                   </a>
//                 </li>
//                 <li>
//                   <a href="gallery-four.html" className="nav-link__item">
//                     Gallery
//                   </a>
//                 </li>
//                 <li>
//                   <a href="contact.html" className="nav-link__item">
//                     Contacts
//                   </a>
//                 </li>
//                 <li>
//                   <a href="page-elements.html" className="nav-link__item">
//                     Shortcodes
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div className="col-xs-12 col-md-6">
//               <div className="footer-info">
//                 <p className="heading-special--small">
//                   CinePass
//                   <br />
//                   <span className="title-edition">in the social media</span>
//                 </p>
//                 <div className="social">
//                   <a href="#" className="social__variant fa fa-facebook" />
//                   <a href="#" className="social__variant fa fa-twitter" />
//                   <a href="#" className="social__variant fa fa-vk" />
//                   <a href="#" className="social__variant fa fa-instagram" />
//                   <a href="#" className="social__variant fa fa-tumblr" />
//                   <a href="#" className="social__variant fa fa-pinterest" />
//                 </div>
//                 <div className="clearfix" />
//                 <p className="copy">
//                   © CinePass,2023. All rights reserved. Done by TRUNG KIEN
//                 </p>
//               </div>
//             </div>
//           </section>
//         </footer>
//       </div>
//       {/* open/close */}
//       <div className="overlay overlay-hugeinc">
//         <section className="container">
//           <div className="col-sm-4 col-sm-offset-4">
//             <button type="button" className="overlay-close">
//               Close
//             </button>
//             <form id="login-form" className="login" method="get" noValidate>
//               <p className="login__title">
//                 sign in <br />
//                 <span className="login-edition">welcome to A.Movie</span>
//               </p>
//               <div className="social social--colored">
//                 <a href="#" className="social__variant fa fa-facebook" />
//                 <a href="#" className="social__variant fa fa-twitter" />
//                 <a href="#" className="social__variant fa fa-tumblr" />
//               </div>
//               <p className="login__tracker">or</p>
//               <div className="field-wrap">
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   name="user-email"
//                   className="login__input"
//                 />
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   name="user-password"
//                   className="login__input"
//                 />
//                 <input
//                   type="checkbox"
//                   id="#informed"
//                   className="login__check styled"
//                 />
//                 <label htmlFor="#informed" className="login__check-info">
//                   remember me
//                 </label>
//               </div>
//               <div className="login__control">
//                 <button
//                   type="submit"
//                   className="btn btn-md btn--warning btn--wider"
//                 >
//                   sign in
//                 </button>
//                 <a href="#" className="login__tracker form__tracker">
//                   Forgot password?
//                 </a>
//               </div>
//             </form>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Home;
