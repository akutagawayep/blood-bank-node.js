import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../..";
import Card from "../../components/card";
import PostService from "../../services/PostService";
import Button from "../../UI/Button";
import s from "./allPatientsPage.module.scss";

const AllPatientsPage = ({ role }) => {
  const { store } = useContext(Context);

  const getUsers = async () => {
    try {
      const res = await PostService.fetchposts();
      console.log(res.data);
      store.setPosts(res.data);
      console.log(store.posts);

      return store.posts?.map((post) =>
        post.role === role ? (
          <Card
            email={post.email}
            name={post.name}
            number={post.number}
            role={post.role}
            type={post.type}
            iaActive={post.isActive}
            city={post.city}
          />
        ) : (
          toast.warning("еще нет пациентов")
        )
      );
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className={s.root}>
      <Button title={`Все ${role}ы`} onclick={getUsers} />
    </div>
  );
};

export default AllPatientsPage;
