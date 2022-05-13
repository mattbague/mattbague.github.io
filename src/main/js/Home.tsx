import React from "react";
import Me from "me.png";
import useDocumentTitle from "UseDocumentTitle";

export default function Home() {
  useDocumentTitle("Home");

  const cellClass = "px-2 py-1";

  return <div className="text-lg md:w-2/5 w-full mx-auto flex flex-col gap-6">
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
            Job:
          </td>
          <td className={cellClass}>
            Sr. Software Engineer
          </td>
        </tr>
        <tr>
          <td className={cellClass}>
            Type:
          </td>
          <td className={cellClass}>
            Full Stack
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
            Languages:
          </td>
          <td className={cellClass}>
            Scala, TypeScript, SQL
          </td>
        </tr>
        <tr>
          <td className={cellClass}>
            Employer:
          </td>
          <td className={cellClass}>
            <a href="https://storygize.com" target="_blank" className="text-blue-400 hover:underline">Storygize</a>
          </td>
        </tr>
        </tbody>
      </table>
    </code>

    {/*<div className="text-center">*/}
    {/*  <div className="font-medium">Current Projects:</div>*/}
    {/*  <ul>*/}
    {/*    <li></li>*/}
    {/*  </ul>*/}
    {/*</div>*/}
  </div>;
}