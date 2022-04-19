import React, { useState } from "react";
import styled from "styled-components";

const ImageUpload = () => {
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState();
  const [image, setImage] = useState("");

  const handleNewMessage = (ev) => {
    setNewMessage(ev.target.value);
    ev.preventDefault();
  };

  const postMessage = () => {
    fetch("/newmessages", {
      body: JSON.stringify({ status: newMessage }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json)
      .then((data) => {
        console.log(data);
        setNewMessage("");
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
    console.log(file.secure_url);
    setImage(file.secure_url);
    setLoading(false);
  };

  return (
    <div>
      <h1 className="upload">Upload image</h1>
      <form>
        <TextArea
          placeholder="BucketLIST"
          onChange={(ev) => {
            handleNewMessage(ev);
          }}
          value={newMessage}
        ></TextArea>
        <Button onClick={postMessage} />
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
`;

const Button = styled.button`
  width: 50px;
  padding: 15px;
`;
export default ImageUpload;
