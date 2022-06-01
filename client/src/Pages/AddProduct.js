import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import Card from "../Components/UI/Card";
import productService from "../api/productService";
import InputFile from "../Components/UI/InputFile";
import Input from "../Components/UI/Input";
import TextArea from "../Components/UI/TextArea";
import Button from "../Components/UI/Button";
import Backdrop from "../Components/UI/BackdropModal";

const AddProduct = () => {
  const navigate = useNavigate();

  const [profilePic, setProfilePic] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: "",
      price: 0,
      description: "",
      rating: 0,
      productImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp1T0X2j9sywG32yT3SwJprHdnYvbXfXIq2g&usqp=CAU",
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      console.log(values);
      if (
        values.title &&
        values.price &&
        values.description &&
        values.rating &&
        values.productImage
      ) {
        await productService.addProduct(values);
        navigate("/dashboard/products");
      }
    },
  });

  return (
    <>
      <Card>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col flex-wrap gap-6 px-6 lg:px-14"
        >
          <h1 className="text-2xl">Edit User</h1>
          <section className={`flex flex-col flex-wrap gap-6 `}>
            <div className="flex items-center gap-6 mr-4">
              {formik.values.profilePic ? (
                <img
                  src={formik.values.profilePic}
                  alt=""
                  className="object-cover h-14 w-14 rounded-full"
                />
              ) : (
                <div className="h-14 w-14 bg-slate-300 rounded-full" />
              )}
              <InputFile
                name="imagePath"
                imageName={profilePic?.name}
                onChange={(e) => {
                  setProfilePic(e.target.files[0]);
                }}
                onUpload={() => {
                  // uploadUserImage(profilePic, productId);
                }}
              >
                Upload
              </InputFile>
            </div>
            <Input
              width="full"
              type="text"
              label="Title:"
              name="title"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
            <Input
              width="full"
              type="number"
              label="Price:"
              name="price"
              onChange={formik.handleChange}
              value={formik.values.price}
            />
            <Input
              width="full"
              type="number"
              label="Rating:"
              name="rating"
              onChange={formik.handleChange}
              value={formik.values.rating}
            />
            <TextArea
              rows={4}
              type="text"
              label="Description:"
              name="description"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
          </section>

          <div className="flex justify-end gap-8 mt-4">
            <Button
              type="button"
              onClick={() => {
                setShowModal(true);
              }}
            >
              <div className="text-base p-1">Add Product</div>
            </Button>
          </div>
          <Backdrop
            title="Add"
            show={showModal}
            onClick={() => setShowModal(false)}
          >
            Are you sure you want to add this product?
            <div className="self-end">
              <Button type={"submit"} onClick={() => setShowModal(false)}>
                OK
              </Button>
            </div>
          </Backdrop>
        </form>
      </Card>
    </>
  );
};

export default AddProduct;
