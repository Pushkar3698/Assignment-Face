import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import Loader from "../Loader/Loader";
import "./style.css";

const HomePage = () => {
  const [users, setusers] = useState([]);
  const [page, setpage] = useState(1);
  const [loader, setloader] = useState(false);

  const getUsers = async () => {
    const url = `https://randomuser.me/api/?page=${page}&results=9`;

    setloader(true);

    const fetchData = await fetch(url);
    const res = await fetchData.json();

    setusers((prev) => {
      return [...prev, ...res.results];
    });

    setloader(false);

    console.log(res.results[0]);
  };

  const handelScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 2 >=
      document.documentElement.scrollHeight
    ) {
      setpage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    getUsers();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handelScroll);

    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);

  console.log(users);

  return (
    <div className="home-page-container">
      <div className="cards">
        {users.map((el, i) => (
          <Card key={i} />
        ))}
      </div>

      {loader && (
        <div className="infinity-loader">
          <Loader color={true} />
        </div>
      )}
    </div>
  );
};

export default HomePage;
