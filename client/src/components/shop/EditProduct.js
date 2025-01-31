import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useApiFetch, apiEdit } from "../../contexts/ApiConnect";
import ProductForm from "./ProductForm";

export default function EditProductModal({ initialData }) {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});
  const [category, setCategory] = useState([]);
  // const [apiStatus, setApiStatus] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const url = "http://localhost:3001/api/categories";
  useApiFetch(url, setCategory);
  let singleCategory = category.filter(
    (c) => c._id === initialData.category_id
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(false);
    //  apiEdit(e, url, data, id, setStatus);
  };

  return (
    <>
      <button onClick={handleShow}>Edit</button>

      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="border-0"></Modal.Header>
        <Modal.Body>
          <h5 style={{ fontWeight: 600 }} className="mb-3 text-center">
            Edit Product Info
          </h5>
          <ProductForm
            category={category}
            category_name={
              singleCategory.length > 0 ? singleCategory[0].name : null
            }
            handleSubmit={handleSubmit}
            data={initialData}
            setData={setData}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}
