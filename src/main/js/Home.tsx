import React from "react";
import Me from "../img/me.png";

export function HomeView() {

  const cellClass = "px-2 py-1"

  return <div className="text-lg w-2/5 mx-auto flex flex-col gap-6">
    <img src={Me} className="mx-auto" alt="Me"/>
    <code>
      <table className="mx-auto border-double border-4 border-gray-400">
        <tbody>
        <tr>
          <td className={cellClass}>
            Name:
          </td>
          <td className={cellClass}>
            Matt Bague
          </td>
        </tr>
        <tr>
          <td className={cellClass}>
            Profession:
          </td>
          <td className={cellClass}>
            Software Engineer
          </td>
        </tr>
        <tr>
          <td className={cellClass}>
            Experience:
          </td>
          <td className={cellClass}>
            {new Date().getFullYear() - 2014} years
          </td>
        </tr>
        <tr>
          <td className={cellClass}>
            Likes:
          </td>
          <td className={cellClass}>
            Scala, TypeScript, SQL
          </td>
        </tr>
        <tr>
          <td className={cellClass}>
            Dislikes:
          </td>
          <td className={cellClass}>
            Long Meetings
          </td>
        </tr>
        </tbody>
      </table>
    </code>
  </div>;
}