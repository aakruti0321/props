
import React, { useState } from "react";
import { Tables } from "./tableprops";
export function Hello() {

    const [inputData, setInputData] = useState({
        fname: "",
        sname: "",
        email: "",
        password: "",
    });

    const [records, setRecords] = useState(JSON.parse(localStorage.getItem("deta")) || []);
    const handleOnChange = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value })
    }
    console.log(inputData);

    const [isEdit, setisEdit] = useState(-1)

    const handleSubmit = () => {
        if (isEdit !== -1) {
            const update = records.map((idx, index) => {
                if (index === isEdit) {
                    return inputData;
                }
                return idx;
            })
            setRecords(update)
            localStorage.setItem("deta", JSON.stringify(update))
        }
        else {
            localStorage.setItem("deta", JSON.stringify([...records, inputData]))
            setRecords([...records, inputData])
        }
    }
    const handleEdit = (index) => {
        setisEdit(index)
        const editdata = records.find((item, index1) => { return index1 === index })
        setInputData(editdata)
    }

    console.log(records);

    const buttonDelete = (index) => {
        const deletedata = records.filter((item, idx) => idx !== index)
        setRecords(deletedata)

    }

    return (
        <>
            <div style={{ padding: "3%", backgroundColor: "lightpink" }}>
                <div>
                    <label>fname :-</label>
                    <input type="text" id="fname" name="fname" value={inputData.fname} onChange={(e) => handleOnChange(e)}></input>

                </div><br></br>
                <div>
                    <label>sname :-</label>
                    <input type="text" id="sname" name="sname" value={inputData.sname} onChange={(e) => handleOnChange(e)}></input>
                </div><br></br>
                <div>
                    <label>email :-</label>
                    <input type="email" id="email" name="email" value={inputData.email} onChange={(e) => handleOnChange(e)}></input>
                </div><br></br>

                <div>
                    <label>password :-</label>
                    <input type="password" id="pass" name="password" value={inputData.password} onChange={(e) => handleOnChange(e)}></input>
                </div><br></br>
                <div>
                    <button type="button" onClick={handleSubmit}>clicked</button>
                </div><br></br>
                <Tables data={records} handleDelete={buttonDelete} hanEdit={handleEdit} />
            </div>
        </>

    )

}