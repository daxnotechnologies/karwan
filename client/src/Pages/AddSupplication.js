import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import supplicationService from "../api/supplications";
import Card from "../Components/UI/Card";
import Input from "../Components/UI/Input";
import Button from "../Components/UI/Button";
import Backdrop from "../Components/UI/BackdropModal";

const AddSupplication = () => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const formik = useFormik({
    initialValues: {
      supplicationTitle: "",
      supplication: "",
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      console.log(values);
      if (values.supplication && values.supplicationTitle) {
        await supplicationService.addSupplication(values);
        navigate("/dashboard/duas");
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
          <h1 className="text-2xl">Add Dua</h1>
          <section className={`flex flex-col flex-wrap gap-6`}>
            <Input
              width="full"
              type="text"
              name="supplicationTitle"
              label="Title:"
              value={formik.values.supplicationTitle}
              onChange={formik.handleChange}
            />
            <Input
              width="full"
              type="text"
              name="supplication"
              label="Dua"
              onChange={formik.handleChange}
              value={formik.values.supplication}
            />
          </section>
          <div className="flex justify-end gap-8 mt-4">
            <Button
              type="button"
              onClick={() => {
                setShowModal(true);
              }}
            >
              <div className="text-base p-1">Add Dua</div>
            </Button>
          </div>
          <Backdrop
            title="Add"
            show={showModal}
            onClick={() => setShowModal(false)}
          >
            Are you sure you want to Add Dua?
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

export default AddSupplication;
