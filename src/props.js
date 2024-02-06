
import React, { useState } from "react";
import { Tables } from "./tableprops";
export function Hello() {

    const [inputData, setInputData] = useState({
        fname: "",
        sname: "",
        email: "",
        password: "",
    });

    const [records, setRecords] = useState([]);
    const handleOnChange = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value })
    }
    console.log(inputData);

    const handleSubmit = () => {
        setRecords([...records, inputData])
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
                <Tables data={records} />
            </div>


        </>

    )

}
