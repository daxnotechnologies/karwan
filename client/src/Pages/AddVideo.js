import { useFormik } from "formik";
import React, { useState } from "react";
import Card from "../Components/UI/Card";
import Input from "../Components/UI/Input";
import TextArea from "../Components/UI/TextArea";
import Backdrop from "../Components/UI/BackdropModal";
import Button from "../Components/UI/Button";
import { useNavigate } from "react-router-dom";
import useCategory from "../hooks/useCategory";

const AddVideo = () => {
  const navigate = useNavigate();
  const { addCategory } = useCategory();
  const [showModal, setShowModal] = useState(false);

  const formik = useFormik({
    initialValues: {
      link: "",
      description: "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      setShowModal(true);
    },
  });
  return (
    <>
      <Card>
        <div className="w-[90%] max-w-5xl h-full mx-auto">
          <h1 className="text-4xl">Add Video</h1>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col flex-wrap gap-4 pt-6 md:px-14 md:gap-6"
          >
            <Input
              width="full"
              type="text"
              name="name"
              label="Video Link"
              onChange={formik.handleChange}
              value={formik.values.link}
            />
            {/* <TextArea
              type="text"
              rows={5}
              placeholder="Description"
              name="description"
              onChange={formik.handleChange}
              value={formik.values.requirment}
            />
            <input type="file" name="" id="" /> */}
            <div>
              <button
                type="submit"
                className="flex bg-primary hover:bg-primaryL text-white rounded-lg mx-auto  px-8 py-3 md:px-10 md:py-3 md:ml-auto md:mx-0"
              >
                Add Video
              </button>
            </div>
          </form>
        </div>
      </Card>
      <Backdrop
        title="Add Video"
        show={showModal}
        onClick={() => setShowModal(false)}
      >
        Do you want to add this Video ?
        <div className="self-end">
          <Button
            type={"button"}
            onClick={() => {
              addCategory(formik.values);
              setShowModal(false);
              navigate("/dashboard");
            }}
          >
            Yes
          </Button>
        </div>
      </Backdrop>
    </>
  );
};

export default AddVideo;
