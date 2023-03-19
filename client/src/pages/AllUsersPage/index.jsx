import React, { useState } from "react";
import { toast } from "react-toastify";
import Card from "../../components/card";
import UserService from "../../services/UserService";
import Button from "../../UI/Button";
import s from "./allUsersPage.module.scss";

const AllUsersPage = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const res = await UserService.fetchusers();
     
      setUsers(res.data)
    } catch (e) {
      toast(e);
    }
  };
  return (
    <div className={s.root}>
      <Button title="все пользователи" onclick={getUsers} />
      {users.map((user)=><Card email={user.email} key={user.email}/>)}
    </div>
  );
};

export default AllUsersPage;
