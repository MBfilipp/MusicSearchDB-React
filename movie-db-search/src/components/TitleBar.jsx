import React from 'react';

export default function TitleBar(props) {
    return (
        <table className="TitleBar">
            <tbody>
                <tr>
                    <td>
                        <img src="icon.svg" width="124" alt="ICON" />
                    </td>
                    <td>
                        <h1>{props.title}</h1>
                    </td>
                </tr>
            </tbody>
      </table>
    )
}