import React, { useState } from "react";

const ImageUpload = () => {
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState (" ")

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append(`file`, files[0])
    data.append(`upload_preset`,`BBLImages`)
    setLoading(true)

    const res = await fetch("")

  };

  return (
    <div>
      <h1 className="upload">Upload image</h1>
      <input type="file" placeholder="Upload" onChange={uploadImage} />
    </div>
  );
};

export default ImageUpload;
