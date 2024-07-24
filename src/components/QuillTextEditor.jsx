import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const QuillTextEditor = ({ onChange, value }) => {
  const toolbarOptions = [
    ["bold", "italic", "underline", ], 
    [{ list: "ordered" }],
  ];

  const module = {
    toolbar: toolbarOptions,
  };
  return (
    <>
      <ReactQuill modules={module} placeholder="Type something" onChange={onChange} value={value} theme="snow" className="w-full h-fit font-[400] text-[14px] text-[#000000ce]"/>
    </>
  );
};

export default QuillTextEditor;
