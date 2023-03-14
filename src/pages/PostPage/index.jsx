import React, { useState } from "react";
import Input from "../../UI/Input";
import s from "./donation.module.scss";
import { FiSmartphone } from "react-icons/fi";
import { AiFillMail, AiOutlineQq } from "react-icons/ai";
import donation from "../../UI/assets/img/donation.png";
import Button from "../../UI/Button";

const PostPage = (propsrole) => {
  const [post, setPost] = useState({
    email: "",
    name: "",
    type: "",
    number: "",
    key: Date.now(),
    role: { propsrole },
  });

  return (
    <div className={s.root}>
      <div className={s.main}>
        <div className={s.container}>
          <h1>
            {propsrole === "донор"
              ? "Сдать кровь"
              : propsrole === "пациент"
              ? "Получить кровь"
              : ""}
          </h1>
          <Input
            logo={<AiOutlineQq />}
            child={
              <input
                type="text"
                placeholder="Имя Фамилие"
                value={post.name}
                onChange={(e) =>
                  setPost({
                    email: post.email,
                    name: e.target.value,
                    type: post.type,
                    number: post.number,
                    key: post.key,
                    role: post.role,
                  })
                }
              />
            }
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
                    email: post.email,
                    name: post.name,
                    type: post.type,
                    number: e.target.value,
                    key: post.key,
                    role: post.role,
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
                onChange={(e) =>
                  setPost({
                    email: e.target.value,
                    name: post.name,
                    type: post.type,
                    number: post.number,
                    key: post.key,
                    role: post.role,
                  })
                }
              />
            }
          />
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
                    email: post.email,
                    name: post.name,
                    type: e.target.value,
                    number: post.number,
                    key: post.key,
                    role: post.role,
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
                    email: post.email,
                    name: post.name,
                    type: e.target.value,
                    number: post.number,
                    key: post.key,
                    role: post.role,
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
                    email: post.email,
                    name: post.name,
                    type: e.target.value,
                    number: post.number,
                    key: post.key,
                    role: post.role,
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
                    email: post.email,
                    name: post.name,
                    type: e.target.value,
                    number: post.number,
                    key: post.key,
                    role: post.role,
                  })
                }
              />
              <label htmlFor="4">AB</label>
            </label>
          </form>
          <Button title="сдать" />
        </div>
        <img src={donation} alt="к сожалению не удалось загрузить картинку" />
      </div>
    </div>
  );
};

export default PostPage;
