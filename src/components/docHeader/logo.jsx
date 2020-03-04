import React, { useRef } from "react";

const Logo = () => {
  const uploadedImg = useRef(null);
  const imgUploader = useRef(null);

  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImg;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
      let x = document.querySelector(".img-wrap");
      x.style.width = "min-content";
    }
  };

  return (
    <div className="logo-wrap">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={imgUploader}
        style={{
          display: "none"
        }}
      />
      <div
        className="img-wrap"
        placeholder="Click to upload Image (120x315)px"
        onClick={() => imgUploader.current.click()}
      >
        <img
          alt=""
          ref={uploadedImg}
          style={{
            height: "100%"
          }}
        />
      </div>
    </div>
  );
};

export { Logo };
