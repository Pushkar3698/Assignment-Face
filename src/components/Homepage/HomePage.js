import React, { useEffect, useState, useRef } from "react";
import Card from "../card/Card";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import "./style.css";

const HomePage = ({ loginHandler }) => {
  const [users, setusers] = useState([]);
  const [page, setpage] = useState(1);
  const [loader, setloader] = useState(false);
  const [isIntersecting, setisIntersecting] = useState(false);

  const pageEnd = useRef();

  const getUsers = async (pageno) => {
    console.log(pageno);
    const url = `https://randomuser.me/api/?page=${pageno}&results=12`;

    setloader(true);

    const fetchData = await fetch(url);
    const res = await fetchData.json();

    setusers((prev) => {
      return [...prev, ...res.results];
    });

    setloader(false);
  };

  const handelScroll = () => {
    const intersectionObserver = new IntersectionObserver((entry) => {
      setisIntersecting(entry[0].isIntersecting);
    });

    intersectionObserver.observe(pageEnd.current);
  };

  useEffect(() => {
    if (isIntersecting) {
      setpage((prev) => prev + 1);
    }
  }, [isIntersecting]);

  useEffect(() => {
    getUsers(page);

    return () => {};
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handelScroll);

    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);

  // useEffect(() => {
  //   window.addEventListener("scroll", handelScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handelScroll);
  //   };
  // }, []);
  console.log(page);
  return (
    <>
      <Header loginHandler={loginHandler} />
      <div className="home-page-container">
        <div className="cards">
          {users.map((el, i) => (
            <Card
              key={i}
              name={el.name.title + " " + el.name.first + " " + el.name.last}
              image={el.picture.large}
            />
          ))}

          <div className="loading-box" ref={pageEnd}>
            {loader && (
              <div className="infinity-loader">
                <Loader color={true} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
