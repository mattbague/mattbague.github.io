import React from "react";
import {GitHub, Linkedin, Mail} from "react-feather";

export default function Contact() {
  return <div className="flex flex-col gap-2">
    <IconLink icon={<GitHub className="inline-block"/>} url={"https://github.com/mattbague"} label={"GitHub"}/>
    <IconLink icon={<Linkedin className="inline-block"/>} url={"https://www.linkedin.com/in/matthewbague/"} label={"LinkedIn"}/>
    <IconLink icon={<Mail className="inline-block"/>} url={"mailto:mattbague@gmail.com"} label={"mattbague@gmail.com"}/>
  </div>
}

function IconLink(props: { icon: JSX.Element; url: string; label: String }) {
  return <div className="text-center">
    <a href={props.url} target="_blank" className="hover:text-blue-400">
      <div className="inline-flex items-center gap-1.5 text-xl">
        {props.icon} {props.label}
      </div>
    </a>
  </div>
}