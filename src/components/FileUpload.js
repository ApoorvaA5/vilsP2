// src/components/FileUpload.js
import React from 'react';

const FileUpload = ({ onFileLoaded }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/json') {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);
          onFileLoaded(data);
        } catch (err) {
          alert('Invalid JSON file');
        }
      };
      reader.readAsText(file);
    } else {
      alert('Please upload a valid JSON file');
    }
  };

  return (
    <input
      type="file"
      accept=".json"
      onChange={handleFileChange}
      style={{ margin: '20px 0' }}
    />
  );
};

export default FileUpload;
