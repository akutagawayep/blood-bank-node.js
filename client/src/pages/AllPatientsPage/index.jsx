import React, { useState } from "react";
import Card from "../../components/card";
import Modal from "../../components/modal";
import PostService from "../../services/PostService";
import Button from "../../UI/Button";
import s from "./allPatientsPage.module.scss";
import { v4 as uuid } from 'uuid';

const AllPatientsPage = ({ role }) => {
  const [patients, setPatients] = useState([]);

  const [isVisible, setIsvisible] = useState(false);
  const [isId, setIsId] = useState(0);

  const getUsers = async () => {
    try {
      const res = await PostService.fetchposts();
      setPatients(res.data);
      console.log(patients);
      // !patients ?  toast.warning("еще нет пациентов"):"";
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className={s.root}>
      <Button title={`Все ${role}ы`} onclick={getUsers} />
      {patients.map((post) =>
        post.role === role ? (
          <>
            {/* {setIsId(post._id)} */}
            <Card
              email={post.email}
              name={post.name}
              number={post.number}
              role={post.role}
              type={post.type}
              iaActive={post.isActive}
              city={post.city}
              key={uuid()}
              onclick={() => setIsvisible(!isVisible)}
            />
          </>
        ) : (
          ""
        )
      )}
      <Modal setIsvisible={setIsvisible} state={isVisible} id={isId} />
    </div>
  );
};

export default AllPatientsPage;
