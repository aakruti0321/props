import React from "react";
export function Tables({ data, handleDelete, hanEdit }) {
    console.log(data);
    return (
        <>
            <div >
                <table className="table table-hover table-striped  table-border">
                    <thead>
                        <th>fname</th>
                        <th>sname</th>
                        <th>email</th>
                        <th>password</th>
                        <th><button>Delete</button></th>
                        <th><button>Edit</button></th>
                    </thead>
                    <tbody>
                        {data.map((Item, index) =>
                        (
                            <tr>
                                <td>{Item.fname}</td>
                                <td>{Item.sname}</td>
                                <td>{Item.email}</td>
                                <td>{Item.password}</td>
                                <td><button type="button" onClick={() => handleDelete(index)}>delete</button></td>
                                <td><button type="button" onClick={() => hanEdit(index)}>Edit</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}