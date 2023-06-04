import React, { useState } from "react";
import MainScreen from "./mainscreen";
import EditScreen from "./EditScreen";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      firstName: "Sagar",
      lastName: "Gite",
      dateOfBirth: "1994-05-04",
      married: false,
      photo:
        "https://img.uxwing.com/wp-content/themes/uxwing/download/peoples-avatars-thoughts/corporate-user-icon.svg",
    },
  ]);

  const [editData, setEditData] = useState(null);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleAdd = () => {
    setEditData({});
  };

  const handleEdit = (id) => {
    const item = data.find((item) => item.id === id);
    setEditData(item);
  };

  const handleSave = (newData) => {
    console.log(newData);
    if (newData.id) {
      // Update existing item
      setData(data.map((item) => (item.id === newData.id ? newData : item)));
    } else {
      // Add new item
      const newId =
        data.reduce((maxId, item) => Math.max(maxId, item.id), 0) + 1;
      const newItem = { ...newData, id: newId };
      setData([...data, newItem]);
    }
    setEditData(null);
  };

  const handleCancel = () => {
    setEditData(null);
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="col-8">
        <MainScreen
          data={data}
          onDelete={handleDelete}
          onAdd={handleAdd}
          onEdit={handleEdit}
        />
        {editData && (
          <EditScreen
            data={editData}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        )}
      </div>
    </div>
  );
}

export default App;
