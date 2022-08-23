import React, { useEffect } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../constants/productAction';
import { listTopSellers } from '../actions/userAction';
// import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  // console.log(productList)
  const { loading, error, products } = productList;
  const userTopSellersList = useSelector((state) => state.userTopSellersList);
  const {
    loading: loadingSellers,
    error: errorSellers,
    users: sellers,
  } = userTopSellersList;


  useEffect(() => {
    dispatch(listProducts({}));
    dispatch(listTopSellers());
  }, [dispatch]);
  return (
    <div>
      <h2>Top Sellers</h2>
      {loadingSellers ? (
        <LoadingBox></LoadingBox>
      ) : errorSellers ? (
        <MessageBox variant="danger">{errorSellers}</MessageBox>
      ) : (
        <>
          {sellers.length === 0 && <MessageBox>No Seller Found</MessageBox>}

          {sellers.map((seller) => (
            <div key={seller._id}>
              <div className="carousel-item">
                <Carousel showArrows autoPlay showThumbs={true}>
                  {/* <Carousel showArrows active showThumbs={true}> */}
                  {/* <Link to={`/seller/${seller._id}`}> */}
                    <img className="d-block w-100" src="/image/p11.jpg" alt=""></img>
                    <img className="d-block w-100" src="/image/p46.jpg" alt=""></img>
                    <img className="d-block w-100" src="/image/p56.jpg" alt=""></img>
                  {/* </Link> */}
                </Carousel>
              </div>
            </div>
          ))}

        </>
      )
      }
      <h2>Featured Products</h2>
      {
        loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
            <div className="row center">
              {products.map((product) => (
                <Product key={product._id} product={product}></Product>
              ))}
            </div>
          </>
        )
      }
    </div >
  );
}
// import React, { useEffect } from 'react';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';
// import Product from '../components/Product';
// import LoadingBox from '../components/LoadingBox';
// import MessageBox from '../components/MessageBox';
// import { useDispatch, useSelector } from 'react-redux';
// import { listProducts } from '../constants/productAction';
// import { listTopSellers } from '../actions/userAction';
// export default function HomeScreen() {
//   const dispatch = useDispatch();
//   const productList = useSelector((state) => state.productList);
//   const { loading, error, products } = productList;
//   useEffect(() => {
//     dispatch(listTopSellers());
//     dispatch(listProducts({}));
//   }, [dispatch]);
//   return (
//     <div>
//       <h2>TopSeller</h2>
//       <div className="carousel-item">
//         <Carousel showArrows autoPlay showThumbs={true}>
//           {/* <img className="d-block w-100" src="/image/p11.jpg" alt=""></img> */}
//           {/* <img className="d-block w-100" src="/image/p11.jpg" alt="" height="30px"></img> */}
//           <img className="d-block w-100" src="/image/p11.jpg" alt=""></img>
//           <img className="d-block w-100" src="/image/p46.jpg" alt=""></img>
//           <img className="d-block w-100" src="/image/p56.jpg" alt=""></img>
//         </Carousel>
//       </div>
//       <h2>Featured Products</h2>
//       {loading ? (
//         <LoadingBox></LoadingBox>
//       ) : error ? (
//         <MessageBox variant="danger">{error}</MessageBox>
//       ) : (
//         <>
//           {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
//           <div className="row center">
//             {products.map((product) => (
//               <Product key={product._id} product={product}></Product>
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }