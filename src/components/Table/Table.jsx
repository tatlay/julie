import React from "react";
import TableRow from "../TableRow";

const Table = ({ sets, targetReps, Workout }) => {
    return (
        <table>
            <thead>
                <tr className="table__inputwidth">
                    <td></td>
                    <td>Sets</td>
                    <td>Target</td>
                    <td className="table__red">Reps</td>
                    <td className="table__red">kg</td>
                    <td className="table__red">Done</td>
                </tr>
                   </thead>
            <tbody>
                <TableRow />
            </tbody>
        </table>
    );
};

export default Table;
