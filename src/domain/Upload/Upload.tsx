import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
interface IUpload {}

interface IForm {
  selectedFile: any;
  name?: any;
}
const Upload: React.FunctionComponent<IUpload> = (props) => {
  const [selected, setUpload] = useState<IForm>({
    selectedFile: null,
  });
  const [file, setFile] = useState<File>({} as File);

  let image_name = '';

  const onFileChange = (e: any) => {
    const files = e.target.files;
    if (files[0] !== undefined) {
      image_name = files[0].name;
      if (image_name.lastIndexOf('.') <= 0) {
        return;
      }
      const fr = new FileReader();
      fr.readAsDataURL(files[0]);
      fr.addEventListener('load', () => {
        setFile(files[0]);
      });
    }
  };
  const onFileUpload = async (e: any) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('https://api.thecatapi.com/v1/images', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'x-api-key': `${process.env.API}`,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then(() => {
        <Redirect to='/' />;
      });
  };
  return (
    <>
      <div className='flex justify-center  items-center  h-screen'>
        <div className=''>
          <input type='file' onChange={onFileChange} />
          <button onClick={onFileUpload}>Upload!</button>{' '}
        </div>
      </div>
    </>
  );
};

export default Upload;
