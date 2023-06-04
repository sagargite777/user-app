import React, { useState } from "react";

function EditScreen({ data, onSave, onCancel }) {
  const [firstName, setFirstName] = useState(data ? data.firstName : "");
  const [lastName, setLastName] = useState(data ? data.lastName : "");
  const [dateOfBirth, setDateOfBirth] = useState(data ? data.dateOfBirth : "");
  const [married, setMarried] = useState(data ? data.married : false);
  const [photo, setPhoto] = useState(data ? data.photo : "");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSave = () => {
    if (firstName && lastName && dateOfBirth) {
      const newData = {
        id: data ? data.id : null,
        firstName,
        lastName,
        dateOfBirth,
        married,
        photo,
      };

      onSave(newData);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="col-12 card p-3">
      <h5>{data ? "Edit" : "Add New"}</h5>

      <div className="d-flex">
        <div className="col-6">
          <div className="d-flex">
            <div className="col-4">
              <label>First Name:</label>
            </div>
            <div className="col-6">
              <input
                placeholder="First name"
                className="form-control"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex">
            <div className="col-4">
              <label>Last Name:</label>
            </div>
            <div className="col-6">
              <input
                placeholder="Last name"
                className="form-control"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex mt-3">
        <div className="col-6">
          <div className="d-flex">
            <div className="col-4">
              <label>Date of Birth:</label>
            </div>
            <div className="col-6">
              <input
                className="form-control"
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex">
            <div className="col-4">
              <label>Photo:</label>
            </div>
            <div className="col-6">
              <input
                className="form-control"
                type="file"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex mt-3">
        <div className="col-6">
          <div className="form-check mt-3 mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              checked={married}
              onChange={(e) => setMarried(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              :Married
            </label>
          </div>
          <button className="btn btn-primary" onClick={handleSave}>
            Save
          </button>
          <button
            className="btn btn-secondary"
            style={{ marginLeft: "10px" }}
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
        <div className="col-6">
          {selectedFile && <img src={photo} alt="Selected" width="100px" />}
        </div>
      </div>
    </div>
  );
}

export default EditScreen;
