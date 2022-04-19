import React, { useState } from "react";

const ImageUpload = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(" ");

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
    console.log(file);
    setImage(file.secure_url);
    setLoading(false);
  };

  return (
    <div>
      <h1 className="upload">Upload image</h1>
      <input type="file" placeholder="Upload" onChange={uploadImage} />
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <img src={image} style={{ width: `300px` }} alt={`uploaded`} />
      )}
    </div>
  );
};

export default ImageUpload;
