import React, { useState } from "react";
import styled from "styled-components";

const ImageUpload = ({ setFlag, flag, id }) => {
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState();
  const [image, setImage] = useState("");

  const handleNewMessage = (ev) => {
    setNewMessage(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const timeStamp = new Date();

    fetch("/new-messages", {
      method: "POST",
      body: JSON.stringify({ newMessage, image, timeStamp, id }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json)
      .then((data) => {
        console.log(data, "Pix");
        setNewMessage("");
        setImage("");
        setFlag(!flag);
      })
      .catch((err) => console.log(err));
  };

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append(`file`, files[0]);
    data.append(`upload_preset`, `BBLImages`);
    setLoading(true);

    const res = await fetch(
      "http://api.cloudinary.com/v1_1/compassiondaisy/image/upload",
      {
        method: `POST`,
        body: data,
      }
    );
    const file = await res.json();
    console.log(file.secure_url, "pic");
    setImage(file.secure_url);
    setLoading(false);
  };

  return (
    <div>
      <h1 className="upload">Upload image</h1>
      <form onSubmit={handleSubmit}>
        <TextArea
          placeholder="BucketLIST"
          onChange={(ev) => {
            handleNewMessage(ev);
          }}
          value={newMessage}
        ></TextArea>
        <Button> Post! </Button>
        <input type="file" placeholder="Upload" onChange={uploadImage} />
      </form>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <img src={image} style={{ width: `300px` }} alt={`uploaded`} />
      )}
    </div>
  );
};

const TextArea = styled.textarea`
  width: 600px;
  height: 150px;
  border: none;
  padding: 10px;
  resize: none;
  background-color: rebeccapurple;
  opacity: 0.8;
`;

const Button = styled.button`
  padding: 15px;
  text-align: center;
  display: flex;
  align-self: center;
`;
export default ImageUpload;
