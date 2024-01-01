import Item from "antd/es/list/Item";
import React from "react";
export function Tables({ data }) {
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
                    </thead>
                    <tbody>
                        {data.map((Item) =>
                        (
                            <tr>
                                <td>{Item.fname}</td>
                                <td>{Item.sname}</td>
                                <td>{Item.email}</td>
                                <td>{Item.password}</td>
                                <td><button type="button" onClick={() => buttonDelete(index)}>delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}