// import { getDatabase, push, ref, set } from "firebase/database";
// import { useState } from "react";
// import { app } from "../firebaseConfig";

// const ImgInput = () => {
//   const allInputs = { imgUrl: "" };
//   const [imageAsFile, setImageAsFile] = useState("");
//   const [imageAsUrl, setImageAsUrl] = useState(allInputs);

//   console.log(imageAsFile);
//   const handleImageAsFile = (e) => {
//     const image = e.target.files[0];
//     setImageAsFile(image);
//   };
//   const handleFireBaseUpload = (e) => {
//     e.preventDefault();
//     console.log("start of upload");
//     if (imageAsFile === "") {
//       console.error(`not an image, the image file is a ${typeof imageAsFile}`);

//       const db = getDatabase(app);
//       const newDocRef = push(ref(db, "inventory/purchases/images"));
//       set(newDocRef, {
//         imageAsFile,
//       });
//     }
//   };

//   return (
//     <div className="App">
//       <form onSubmit={handleFireBaseUpload}>
//         <input type="file" onChange={handleImageAsFile} />
//         <button>upload to firebase</button>
//       </form>
//     </div>
//   );
// };

// export default ImgInput;
