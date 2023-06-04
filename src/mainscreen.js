import React from "react";
import "./user.css";

function MainScreen({ data, onDelete, onAdd, onEdit }) {
  return (
    <div>
      <div
        className="d-flex justify-content-between"
        style={{ marginTop: "10%" }}
      >
        <div className="col-3">
          <h5>Main Screen</h5>
        </div>
        <div className="col-1 text-right mb-2">
          <button className="btn btn-primary" onClick={onAdd}>
            Add
          </button>
        </div>
      </div>
      <table className="data-table table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Married</th>
            <th>Photo</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.dateOfBirth}</td>
              <td>{item.married ? "Yes" : "No"}</td>
              <td>
                <img
                  src={item.photo}
                  alt={item.firstName}
                  style={{ width: "50px" }}
                />
              </td>
              <td>
                <button
                  className="btn btn-sm btn-primary "
                  onClick={() => onEdit(item.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  style={{ marginLeft: "10px" }}
                  onClick={() => onDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MainScreen;
