import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/Reducer/store";
import { Table, Button, Input, message } from "antd";
import { updateFormData } from "../store/Slice/FormSlice";

const { Search } = Input;

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.form.data);
  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [editedRow, setEditedRow] = useState<any>({});
  const [searchText, setSearchText] = useState<string>("");

  const isEditing = (record: any) => record.key === editingKey;

  const edit = (record: any) => {
    setEditingKey(record.key);
    setEditedRow({ ...record });
  };

  const save = () => {
    dispatch(updateFormData(editedRow));
    message.success("Updated")
    setEditingKey(null);
  };

  const cancel = () => {
    setEditingKey(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    setEditedRow({ ...editedRow, [field]: e.target.value });
  };

  const handleSearch = (value: string) => {
    setSearchText(value);
  };

  const filteredData = formData.filter((item) =>
    Object.values(item).some((val) =>
      val.toString().toLowerCase().includes(searchText.toLowerCase())
    )
  );

  const columns = [
    // {
    //   title: "ID",
    //   dataIndex: "id",
    //   key: "id",
    // },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
      editable: true,
      render: (_: any, record: any) => {
        return isEditing(record) ? (
          <Input
            value={editedRow.firstName}
            onChange={(e) => handleInputChange(e, "firstName")}
          />
        ) : (
          record.firstName
        );
      },
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
      editable: true,
      render: (_: any, record: any) => {
        return isEditing(record) ? (
          <Input
            value={editedRow.lastName}
            onChange={(e) => handleInputChange(e, "lastName")}
          />
        ) : (
          record.lastName
        );
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Company Name",
      dataIndex: "companyName",
      key: "companyName",
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
    },
    {
      title: "Message",
      dataIndex: "message",
      key: "message",
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Button onClick={save} type="primary" style={{ marginRight: 8 }}>
              Save
            </Button>
            <Button onClick={cancel}>Cancel</Button>
          </span>
        ) : (
          <Button disabled={editingKey !== null} onClick={() => edit(record)}>
            Edit
          </Button>
        );
      },
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Profile Data</h1>
      <Search
        placeholder="Search..."
        onSearch={handleSearch}
        style={{ marginBottom: 16, width: 300 }}
        allowClear
      />
      <Table
        columns={columns}
        dataSource={filteredData.map((item, index) => ({ ...item, key: index }))}
        rowKey="key"
        pagination={false}
      />
    </div>
  );
};

export default Profile;
