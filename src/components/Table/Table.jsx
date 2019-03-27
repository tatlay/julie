import React from "react";
import TableRow from "../TableRow";

const Table = ({ sets, targetReps, Workout }) => {
    return (
        <table>
            <thead>
                <tr>
                    <td>Exercise</td>
                    <td>Sets</td>
                    <td>Target Reps</td>
                    <td>Completed Reps</td>
                    <td>Weight</td>
                    <td> </td>
                </tr>
            </thead>
            <tbody>
                <TableRow />
            </tbody>
        </table>
    );
};

export default Table;
