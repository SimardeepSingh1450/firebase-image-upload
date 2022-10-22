import React, { useEffect,useState } from 'react'
//Import ListAll from FireBase Sotrage to View ALl Images :
//IMP -> Use getDownloadURL from firebase/storage to get Images URL :
import {listAll, ref,getDownloadURL} from 'firebase/storage'
import { storage } from './firebaseConfig';

const ViewUploadedImage = () => {
    const [imageList,setImageList]=useState([]);

    //Making a reference for ImageList :
    const imageListRef=ref(storage,"images_folder/")

    useEffect(()=>{
        listAll(imageListRef).then((response)=>{
            // console.log(response);
            response.items.forEach((item)=>{
                getDownloadURL(item).then((url)=>{
                    setImageList((prev)=>[...prev,url]);
                })
            })
        });
    },[])

  return (
    <div>
        <h1>View Uploaded Images</h1>
        {imageList.map((url)=>(
            <img src={url}/>
        ))}
    </div>
  )
}

export default ViewUploadedImage