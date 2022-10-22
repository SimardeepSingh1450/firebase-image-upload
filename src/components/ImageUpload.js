import React from 'react'
import { useState } from 'react';
import { storage } from './firebaseConfig';
//Importing {ref} -> REFERENCE from Firebase , we use reference to tell firebase the storage and folder name in Cloud where the Image should be stored:
import {ref} from 'firebase/storage';
//To Upload the image import "uploadBytes" from Firebase:
import { uploadBytes } from 'firebase/storage';
//Using uuid so that we ccan upload duplicate IMages as well
import {v4} from 'uuid';


const ImageUpload = () => {
    const [imageUpload,setImageUpload]=useState(null);

  const uploadImage=()=>{
  if(imageUpload==null) return;

  const imageRef=ref(storage,`images_folder/${imageUpload.name + v4()}`)
  uploadBytes(imageRef,imageUpload).then(()=>{
    alert("Image Uploaded");
  });

  }
  return (
    <div>
        <h1>Image Upload Firebase</h1>
      <div>
        <input type="file" onChange={(e)=>{setImageUpload(e.target.files[0])}}/>
        <button onClick={()=>{uploadImage()}}>Upload Image</button>
      </div>
    </div>
  )
}

export default ImageUpload