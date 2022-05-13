(()=>{"use strict";var e,t={414:(e,t,a)=>{var l=a(526),n=a(902),r=a(81);const i=a.p+"883511d15e818500716e.png";function c(e){(0,l.useEffect)((()=>{window.document.title=e?`${e} - mattbague`:"mattbague"}),[e])}var s=a(994),m=a(279),o=a(410),u=a(842),d=a(354);const p={width:"8.5in",height:"11in",padding:".5in"};function E(e){return l.createElement("div",{className:"mb-2"},l.createElement("div",{className:"font-thin mb-1",style:{fontSize:"1.5rem"}},e.title.toUpperCase()),e.children)}const b=e=>l.createElement("div",{className:"mb-1"},l.createElement("div",{className:"font-bold"},e.title,l.createElement("span",{className:"float-right font-medium"},e.date)),l.createElement("div",{className:"font-medium"},e.subtitle,l.createElement("span",{className:"float-right"},e.location)),l.createElement("div",null,e.description));function g(e){return l.createElement("div",{className:"text-center"},l.createElement("a",{href:e.url,target:"_blank",className:"hover:text-blue-400"},l.createElement("div",{className:"inline-flex items-center gap-1.5 text-xl"},e.icon," ",e.label)))}const f=[{title:"Home",path:"/",component:function(){c("Home");const e="px-2 py-1";return l.createElement("div",{className:"text-lg md:w-2/5 w-full mx-auto flex flex-col gap-6"},l.createElement("img",{src:i,className:"mx-auto",alt:"Me"}),l.createElement("code",null,l.createElement("table",{className:"mx-auto border-double border-4 border-gray-400"},l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",{className:e},"Name:"),l.createElement("td",{className:e},"Matt Bague")),l.createElement("tr",null,l.createElement("td",{className:e},"Job:"),l.createElement("td",{className:e},"Sr. Software Engineer")),l.createElement("tr",null,l.createElement("td",{className:e},"Type:"),l.createElement("td",{className:e},"Full Stack")),l.createElement("tr",null,l.createElement("td",{className:e},"Experience:"),l.createElement("td",{className:e},(new Date).getFullYear()-2014," years")),l.createElement("tr",null,l.createElement("td",{className:e},"Languages:"),l.createElement("td",{className:e},"Scala, TypeScript, SQL")),l.createElement("tr",null,l.createElement("td",{className:e},"Employer:"),l.createElement("td",{className:e},l.createElement("a",{href:"https://storygize.com",target:"_blank",className:"text-blue-400 hover:underline"},"Storygize")))))))}},{title:"Resume",path:"/resume",component:function(){c("Resume");const e=l.createElement("div",{style:{width:p.width},className:"mx-auto flex justify-end mb-1"},l.createElement("a",{href:"/matt_bague_resume.pdf",className:"text-blue-500 hover:text-blue-400",download:!0},l.createElement("div",{className:"flex items-center"},l.createElement(s.Z,{className:"inline-block",size:"1rem"}),l.createElement("span",{className:"ml-1"},"Download as PDF"))));return l.createElement("div",null,e,l.createElement("div",{style:p,className:"mx-auto border-solid border border-gray-600 bg-white"},l.createElement("div",null,l.createElement("div",{className:"flex items-center"},l.createElement("div",{className:"font-bold",style:{width:"40%",fontSize:"3rem"}},"Matt Bague"),l.createElement("div",{className:"text-center",style:{width:"60%"}},l.createElement("div",{className:"mb-1"},l.createElement("span",null,l.createElement(m.Z,{className:"inline-block",size:"1rem"})," ",l.createElement("a",{href:"https://mattbague.com",target:"_blank"},"mattbague.com")),l.createElement("span",{className:"ml-8"},l.createElement(o.Z,{className:"inline-block",size:"1rem"})," ",l.createElement("a",{href:"https://www.linkedin.com/in/matthewbague",target:"_blank"},"linkedin.com/in/matthewbague"))),l.createElement("div",null,l.createElement("span",null,l.createElement(u.Z,{className:"inline-block",size:"1rem"})," ",l.createElement("a",{href:"mailto:mattbague@gmail.com",target:"_blank"},"mattbague@gmail.com")),l.createElement("span",{className:"ml-8"},l.createElement(d.Z,{className:"inline-block",size:"1rem"})," ",l.createElement("a",{href:"https://github.com/mattbague",target:"_blank"},"github.com/mattbague"))))),l.createElement("div",{className:"flex"},l.createElement("div",{style:{width:"30%"}},l.createElement(E,{title:"Education"},l.createElement(b,{title:"California Polytechnic State University: San Luis Obispo",subtitle:"College of Engineering",description:l.createElement("div",null,"BS in Computer Science",l.createElement("br",null),"Class of 2014")})),l.createElement(E,{title:"Skills"},l.createElement(b,{subtitle:"Languages:",description:"Scala, JavaScript, TypeScript, SQL"}),l.createElement(b,{subtitle:"Frameworks/Libraries:",description:"Spark, React, Kafka, ReactiveX, Avro, AWS Services (Kinesis, S3, etc.)"}),l.createElement(b,{subtitle:"Databases:",description:"Postgres, MemSQL, Scylla/Cassandra, DynamoDB"}),l.createElement(b,{subtitle:"Dev Tools:",description:"Git, IntelliJ, Vim"}),l.createElement(b,{subtitle:"Build Tools:",description:"Docker, Jenkins, Maven, Webpack"}),l.createElement(b,{subtitle:"Environments",description:"Linux, macOS"})),l.createElement(E,{title:"About Me"},l.createElement("p",null,"I've been a full stack engineer since I graduated college back in 2014. Love being able to design and develop a system from the ground up. Always up for learning something new, whether it's new tech or design patterns."))),l.createElement("div",{style:{width:"70%"},className:"pl-6"},l.createElement(E,{title:"Experience"},l.createElement(b,{title:"Storygize (Native Advertising)",subtitle:"Fullstack Software Engineer",date:"Apr 2016 – present",location:"Newbury Park, CA",description:l.createElement("ul",{className:"list-disc pl-6"},l.createElement("li",null,"A native advertising demand-side platform startup. Worked with advertisers to serve ads that blend in with the look and feel of publisher sites and track performance."),l.createElement("li",null,"Worked in all areas of the codebase: web app UI, realtime-bidding for ad inventory, tracking servers, reporting/campaign management API, realtime/historical data processing, and build/deployment tooling."))}),l.createElement(b,{title:"CJ Affiliate (Affiliate Marketing)",subtitle:"Fullstack Software Engineer",date:"Jun 2014 – Apr 2016",location:"Westlake Village, CA",description:l.createElement("ul",{className:"list-disc pl-6"},l.createElement("li",null,"Data warehouse: Migrated existing lambda architecture from Flink and Hadoop to Kafka and Spark respectively. Decreased historical job run times by 50% and our realtime data throughput significantly."),l.createElement("li",null,"DevOps: Developed a new automated deployment system which relied on ansible playbooks and ran via a Scala app. Reduced deployment from 1-2 hours (after work) to 15 minutes (during work). No longer required anyone with special knowledge to be able to deploy our apps. Ease of use allowed us to deploy multiple times a week instead of just once."))})),l.createElement(E,{title:"Projects"},l.createElement(b,{title:"CloudBurst",subtitle:l.createElement("a",{href:"https://github.com/mattbague/CloudBurst",target:"_blank"},"github.com/mattbague/CloudBurst"),description:l.createElement("p",null,"A downloader tool for ",l.createElement("a",{href:"https://soundcloud.com",target:"_blank"},"soundcloud.com")," built in Scala. Downloads songs with ID3 tag filled in and album artwork. Reverse engineered their public API since they do not give out personal API keys anymore.")}),l.createElement(b,{title:"AssetRemix (Unmaintained)",subtitle:l.createElement("a",{href:"https://assetremix.herokuapp.com/",target:"_blank"},"assetremix.herokuapp.com"),description:l.createElement("p",null,"A web app focused on providing financial tools and investing guidance. Tools include calculators for tax-efficient investing, three-fund portfolio allocations, and more.")})))))))}},{title:"Contact",path:"/contact",component:function(){return c("Contact"),l.createElement("div",{className:"flex flex-col gap-2"},l.createElement(g,{icon:l.createElement(d.Z,{className:"inline-block"}),url:"https://github.com/mattbague",label:"GitHub"}),l.createElement(g,{icon:l.createElement(o.Z,{className:"inline-block"}),url:"https://www.linkedin.com/in/matthewbague/",label:"LinkedIn"}),l.createElement(g,{icon:l.createElement(u.Z,{className:"inline-block"}),url:"mailto:mattbague@gmail.com",label:"mattbague@gmail.com"}))}}],h=f.map((e=>l.createElement(r.AW,{key:e.title,path:e.path,element:l.createElement(e.component,null)}))),v=f.map((e=>l.createElement(n.OL,{key:e.title,className:e=>"px-1 "+(e.isActive?"border-b border-indigo-400 text-indigo-500":"hover:border-b hover:border-black"),to:e.path},e.title)));function k(){return l.createElement("div",{className:"flex flex-row justify-center gap-2 text-xl mb-8"},v)}function N(){return l.createElement(n.UT,null,l.createElement(y,null),l.createElement("div",{className:"p-2"},l.createElement(k,null),l.createElement(r.Z5,null,h,l.createElement(r.AW,{path:"/not-found",element:w}),l.createElement(r.AW,{path:"/*",element:l.createElement(r.Fg,{to:"/not-found"})}))))}const w=l.createElement("div",null,"Not Found");function y(){const{pathname:e}=(0,r.TH)();return(0,l.useEffect)((()=>{window.scrollTo(0,0)}),[e]),null}var x=a(470);const S=document.getElementById("primordial");(0,x.s)(S).render(l.createElement(N,null))}},a={};function l(e){var n=a[e];if(void 0!==n)return n.exports;var r=a[e]={exports:{}};return t[e](r,r.exports,l),r.exports}l.m=t,e=[],l.O=(t,a,n,r)=>{if(!a){var i=1/0;for(o=0;o<e.length;o++){for(var[a,n,r]=e[o],c=!0,s=0;s<a.length;s++)(!1&r||i>=r)&&Object.keys(l.O).every((e=>l.O[e](a[s])))?a.splice(s--,1):(c=!1,r<i&&(i=r));if(c){e.splice(o--,1);var m=n();void 0!==m&&(t=m)}}return t}r=r||0;for(var o=e.length;o>0&&e[o-1][2]>r;o--)e[o]=e[o-1];e[o]=[a,n,r]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.p="/",(()=>{var e={179:0};l.O.j=t=>0===e[t];var t=(t,a)=>{var n,r,[i,c,s]=a,m=0;if(i.some((t=>0!==e[t]))){for(n in c)l.o(c,n)&&(l.m[n]=c[n]);if(s)var o=s(l)}for(t&&t(a);m<i.length;m++)r=i[m],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(o)},a=self.webpackChunkmattbague_github_io=self.webpackChunkmattbague_github_io||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var n=l.O(void 0,[965],(()=>l(414)));n=l.O(n)})();