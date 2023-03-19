import React, { useState } from "react";
import { AiFillAlert, AiFillCodepenSquare } from "react-icons/ai";
import { toast } from "react-toastify";
import Card from "../../components/card";
import Modal from "../../components/modal";
import PostService from "../../services/PostService";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import s from "./allPatientsPage.module.scss";
const AllPatientsPage = ({ role }) => {
  const [patients, setPatients] = useState([]);

  const [isVisible, setIsvisible] = useState(false);
  const [type, setType] = useState("");
  const [isId, setIsId] = useState(0);
  const [search, setSearch] = useState("");

  const getUsers = async () => {
    try {
      const res = await PostService.fetchposts();
      setPatients(res.data);
    } catch (e) {
      toast.warn(e.data?.message);
    }
  };
  const find = (e ) => {
    setSearch(e.target.value);
    setPatients(patients.filter((e) => e.name.contains(search)));
  };
  return (
    <div className={s.root}>
      <Button title={`Все ${role}ы`} onclick={getUsers} />
      <Input
        logo={<AiFillCodepenSquare />}
        child={ 
          <>
            <input
              value={search}
              onChange={(e) => {
                find(e);
              }}
              placeholder="Поисковик по имени"
            />{" "}
            <button type="button" title={<AiFillAlert />} />{" "}
          </>
        }
      />
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
                  iaActive={post.isActive}
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
                  iaActive={post.isActive}
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
        patients={patients}
        setPatients={setPatients}
      />
    </div>
  );
};

export default AllPatientsPage;
