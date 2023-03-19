import React, { useContext, useState } from "react";
import Input from "../../UI/Input";
import s from "./donation.module.scss";
import { FiSmartphone } from "react-icons/fi";
import { AiFillMail, AiOutlineQq } from "react-icons/ai";
import donation from "../../UI/assets/img/donation.png";
import Button from "../../UI/Button";
import Form from "react-bootstrap/Form";
import { Context } from "../..";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { MAIN_ROUTE } from "../../routes/routesData";
import ShortUniqueId from "short-unique-id"
// import {v4 as uuid} from "uuid"

const PostPage = ({ role }) => {
  const uuid = new ShortUniqueId({length:7,dictionary:['0','1','2','3','4','5','6','7','8','9']})
  const { store } = useContext(Context);
  const [post, setPost] = useState({
    email: store.user?.email ? store.user?.email : "",
    name: "Akhmedova Jasmina",
    type: "",
    number: "",
    role: role,
    isActive: false,
    city: "",
    date: `${new Date(Date.now()).toLocaleDateString()}`,
    uid: uuid(),
  });
  const navigate = useNavigate();

  return (
    <div className={s.root}>
      <div className={s.main}>
        <div className={s.container}>
          <h1>
            {role === "донор"
              ? "Сдать кровь"
              : role === "пациент"
              ? "Получить кровь"
              : ""}
          </h1>
          <Input
            logo={<AiOutlineQq />}
            child={
              <input
                type="text"
                placeholder="Имя Фамилия"
                value={post.name}
                onChange={(e) => setPost({ ...post, name: e.target.value })}
              />
            }
          />
          <Input
            logo={<AiOutlineQq />}
            child={<input type="text" value={post.date} disabled />}
          />
          <Input
            logo={<FiSmartphone />}
            child={
              <input
                type="text"
                placeholder="Номер телефона"
                value={post.number}
                onChange={(e) =>
                  setPost({
                    ...post,
                    number: e.target.value,
                  })
                }
              />
            }
          />
          <Input
            logo={<AiFillMail />}
            child={
              <input
                type="text"
                placeholder="email"
                value={post.email}
                onChange={(e) => setPost({ ...post, email: e.target.value })}
                onInput={() => setPost({ ...post })}
              />
            }
          />
          <Form.Select
            onChange={(e) => setPost({ ...post, city: e.target.value })}
            className={s.select}
            aria-label="Default select example"
          >
            <option className={s.selectitem} value={null}>
              Выберите клинику
            </option>
            <option
              className={s.selectitem}
              value="улица Тошкент халка автомобил йули (ТКАД), Юнусабадский район, Ташкент"
            >
              улица Тошкент халка автомобил йули (ТКАД), Юнусабадский район
            </option>
            <option
              className={s.selectitem}
              value="ул. Гулимамур, 5/14, Юнусабадский район, Ташкент"
            >
              ул. Гулимамур, 5/14, Юнусабадский район
            </option>
          </Form.Select>
          <form>
            <label>
              <input
                type="radio"
                name="type"
                id="1"
                value="O"
                checked={post.type === "O"}
                onChange={(e) =>
                  setPost({
                    ...post,
                    type: e.target.value,
                  })
                }
              />
              <label htmlFor="1">O</label>
            </label>
            <label>
              <input
                type="radio"
                name="type"
                id="2"
                value="A"
                checked={post.type === "A"}
                onChange={(e) =>
                  setPost({
                    ...post,
                    type: e.target.value,
                  })
                }
              />
              <label htmlFor="2">A</label>
            </label>
            <label>
              <input
                type="radio"
                name="type"
                id="3"
                value="B"
                checked={post.type === "B"}
                onChange={(e) =>
                  setPost({
                    ...post,
                    type: e.target.value,
                  })
                }
              />
              <label htmlFor="3">B</label>
            </label>
            <label>
              <input
                type="radio"
                name="type"
                id="4"
                value="AB"
                checked={post.type === "AB"}
                onChange={(e) =>
                  setPost({
                    ...post,
                    type: e.target.value,
                  })
                }
              />
              <label htmlFor="4">AB</label>
            </label>
          </form>

          <Button
            title="сдать"
            onclick={() =>
              post.number.length === 13 && post.city ? (
                <>
                  {store.post({
                    email: post.email,
                    name: post.name,
                    type: post.type,
                    number: post.number,
                    role: post.role,
                    isActive: post.isActive,
                    city: post.city,
                    date: post.date,
                    uid: post.uid,
                  })}
                  {navigate(MAIN_ROUTE)}
                </>
              ) : post.number.length !== 13 ? (
                toast.warn("Заполните поле для номера")
              ) : (
                toast.warn("непредвиденная ошибка")
              )
            }
          />
        </div>
        <img src={donation} alt="к сожалению не удалось загрузить картинку" />
      </div>
    </div>
  );
};

export default PostPage;
