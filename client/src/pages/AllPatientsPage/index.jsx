import React, {  useState } from "react";
import Card from "../../components/card";
import PostService from "../../services/PostService";
import Button from "../../UI/Button";
import s from "./allPatientsPage.module.scss";

const AllPatientsPage = ({role}) => {
  const [posts, setPost] = useState([]);

  const getUsers = async () => {
    try {
      const res = await PostService.fetchposts();
      setPost(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className={s.root}>
      <Button title={`Все ${role}ы`} onclick={getUsers} />
      {posts.map((post) =>
        post.role === role ? (
          <Card
            email={post.email}
            name={post.name}
            number={post.number}
            role={post.role}
            type={post.type}
            iaActive={post.isActive}
            city={post.city}
            key={post.number}
          />
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default AllPatientsPage;
