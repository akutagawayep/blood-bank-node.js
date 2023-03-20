import React, { useContext, useState } from "react";
import { AiFillAlert, AiFillCodepenSquare } from "react-icons/ai";
import { toast } from "react-toastify";
import { Context } from "../..";
import Card from "../../components/card";
import Modal from "../../components/modal";
import PostService from "../../services/PostService";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import s from "./allPatientsPage.module.scss";
const AllPatientsPage = ({ role }) => {
  const [patients, setPatients] = useState([]);
  const [active, setActive] = useState(false);
  const [isVisible, setIsvisible] = useState(false);
  const [type, setType] = useState("");
  const [isId, setIsId] = useState(0);
  const { store } = useContext(Context);

  const getUsers = async () => {
    try {
      store.setLoading(true);
      const res = await PostService.fetchposts();
      setPatients(res.data);
    } catch (e) {
      toast.warn(e.data?.message);
    } finally {
      store.setLoading(false);
    }
  };  
  // };
  return (
    <div className={s.root}>
      <Button title={`Все ${role}ы`} onclick={getUsers} />
     
      <Button
        title={`Все ${role}ы  группы крови О`}
        onclick={() => setType("O")}
      />
      <Button
        title={`Все ${role}ы  группы крови А`}
        onclick={() => setType("A")}
      />
      <Button
        title={`Все ${role}ы  группы крови В`}
        onclick={() => setType("B")}
      />
      <Button
        title={`Все ${role}ы  группы крови АВ`}
        onclick={() => setType("AB")}
      />

      {type !== ""
        ? patients.map((post) =>
            post.role === role && post.type === type ? (
              <>
                <Card
                  email={post.email}
                  name={post.name}
                  number={post.number}
                  role={post.role}
                  type={post.type}
                  isActive={post.isActive}
                  setActive={setActive}
                  city={post.city}
                  id={post.uid}
                  setIsVisible={setIsvisible}
                  setId={setIsId}
                  key={post.uid}
                />
              </>
            ) : (
              ""
            )
          )
        : patients.map((post) =>
            post.role === role ? (
              <>
                {/* {setIsId(post._id)} */}
                <Card
                  email={post.email}
                  name={post.name}
                  number={post.number}
                  role={post.role}
                  type={post.type}
                  isActive={post.isActive}
                  setActive={setActive}
                  city={post.city}
                  id={post.uid}
                  setIsVisible={setIsvisible}
                  setId={setIsId}
                  key={post.uid}
                />
              </>
            ) : (
              ""
            )
          )}

      <Modal
        state={isVisible}
        id={isId}
        setIsvisible={setIsvisible}
        active={active}
        setActive={setActive}
        patients={patients}
        setPatients={setPatients}
        title={"Удалить этот пост?"}
      />
    </div>
  );
};

export default AllPatientsPage;
