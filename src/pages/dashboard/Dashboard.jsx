import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Popup from "../../components/pop-up/Popup";
import Header from "../../components/header/Header";
import Sidemenu from "../../components/sidemenu/Sidemenu";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

import "./Dashboard.css";

const Dashboard = () => {
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [list, setList] = useState([
    { name: "Talaura", email: "talaura@gmail.com", access: "Admin" },
  ]);

  const [value, setValue] = useState({
    name: "",
    email: "",
  });

  const { name, email } = value;

  const handleInputs = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleAddNewItem = () => {
    if (name && email) {
      setList([...list, { name: name, email: email, access: "Admin" }]);
      setShowAddPopup(false);
      setValue({
        name: "",
        email: "",
      });
    }
  };

  const handleEditItem = (idx) => {
    const updatedList = list.map((ele, index) =>
      index === idx
        ? {
            ...ele,
            name: name === "" ? ele?.name : name,
            email: email === "" ? ele?.email : email,
          }
        : ele
    );
    setList(updatedList);
    setCurrentIndex(null);
    setShowEditPopup(false);
    setValue({
      name: "",
      email: "",
    });
  };

  return (
    <div className="dashboard">
      {/* Top Header */}
      <Header setShowLogoutPopup={setShowLogoutPopup} />

      {/* Sidebar Navigation */}
      <Sidemenu />

      {/* Main Content */}
      <main className="dashboard-content">
        <div className="table-container">
          <div className="flex justify-end">
            <Button title={"Add"} onClick={() => setShowAddPopup(true)} />
          </div>
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>S.no</th>
                <th>Name</th>
                <th>Email</th>
                <th>Access</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {list &&
                list.map((ele, idx) => {
                  return (
                    <tr key={idx}>
                      <td>{idx + 1}</td>
                      <td>{ele?.name}</td>
                      <td>{ele?.email}</td>
                      <td>{ele?.access}</td>
                      <td>
                        <div className="flex justify-center space-x-4">
                          <FaEdit
                            className="cursor-pointer"
                            onClick={() => {
                              setShowEditPopup(true);
                              setCurrentIndex(idx);
                            }}
                          />
                          <MdDelete
                            className="cursor-pointer"
                            onClick={() => setShowDeletePopup(true)}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        {showEditPopup && (
          <Popup className="flex flex-col gap-5 bg-gray-200">
            <p className="text-4xl">Edit your details</p>
            <Input
              placeholder={"Name"}
              name={"name"}
              value={name}
              onChange={handleInputs}
            />
            <Input
              placeholder={"Email"}
              type={"email"}
              value={email}
              name={"email"}
              onChange={handleInputs}
            />
            <div className="flex justify-end items-center">
              <Button
                title={"Cancel"}
                onClick={() => setShowEditPopup(false)}
              />
              <Button
                title={"Confirm"}
                onClick={() => handleEditItem(currentIndex)}
              />
            </div>
          </Popup>
        )}
        {showLogoutPopup && (
          <Popup className="flex flex-col gap-5 bg-gray-200">
            <p className="text-4xl">Are you sure want to logout?</p>
            <div className="flex justify-end items-center">
              <Button
                title={"Cancel"}
                onClick={() => setShowLogoutPopup(false)}
              />
              <Button title={"Confirm"} />
            </div>
          </Popup>
        )}
        {showDeletePopup && (
          <Popup className="flex flex-col gap-5 bg-gray-200">
            <p className="text-4xl">Are you sure want to delete?</p>
            <div className="flex justify-end items-center">
              <Button
                title={"Cancel"}
                onClick={() => setShowDeletePopup(false)}
              />
              <Button title={"Yes"} />
            </div>
          </Popup>
        )}
        {showAddPopup && (
          <Popup className="flex flex-col gap-5 bg-gray-200">
            <p className="text-4xl">Add New Details</p>
            <Input
              placeholder={"Name"}
              name={"name"}
              value={name}
              onChange={handleInputs}
            />
            <Input
              placeholder={"Email"}
              type={"email"}
              value={email}
              name={"email"}
              onChange={handleInputs}
            />
            <div className="flex justify-end items-center">
              <Button
                title={"Cancel"}
                onClick={() => {
                  setShowAddPopup(false);
                  setValue((prev) => (prev !== "" ? "" : ""));
                }}
              />
              <Button title={"Confirm"} onClick={handleAddNewItem} />
            </div>
          </Popup>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
