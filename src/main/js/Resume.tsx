import * as React from "react";
import {Download, GitHub, Globe, Linkedin, Mail} from "react-feather";
import useDocumentTitle from "UseDocumentTitle";

const style = {
  width: "8.5in",
  height: "11in",
  padding: ".5in"
}

export default function Resume() {
  useDocumentTitle("Resume");

  const borderClass = "border-solid border border-gray-600 bg-white";
  const downloadLink = <div style={{width: style.width}} className="mx-auto flex justify-end mb-1">
      <a href={"/matt_bague_resume.pdf"} className="text-blue-500 hover:text-blue-400" download>
        <div className="flex items-center">
          <Download className="inline-block" size="1rem"/><span className="ml-1">Download as PDF</span>
        </div>
      </a>
  </div>;

  return <div>
    {downloadLink}
    <div style={style} className={`mx-auto ${borderClass}`}>
      <div>
        <div className="flex items-center">
          <div className="font-bold" style={{width: "40%", fontSize: "3rem"}}>
            Matt Bague
          </div>
          <div className="text-center" style={{width: "60%"}}>
            <div className="mb-1">
              <span><Globe className="inline-block" size="1rem"/> <a href="https://mattbague.com" target="_blank">mattbague.com</a></span>
              <span className="ml-8"><Linkedin className="inline-block" size="1rem"/> <a href="https://www.linkedin.com/in/matthewbague"
                                                                                         target="_blank">linkedin.com/in/matthewbague</a></span>
            </div>
            <div>
              <span><Mail className="inline-block" size="1rem"/> <a href="mailto:mattbague@gmail.com" target="_blank">mattbague@gmail.com</a></span>
              <span className="ml-8"><GitHub className="inline-block" size="1rem"/> <a href="https://github.com/mattbague"
                                                                                       target="_blank">github.com/mattbague</a></span>
            </div>
          </div>
        </div>
        <div className="flex">
          <div style={{width: "30%"}}>
            <Section title={"Education"}>
              <SectionEntry
                title="California Polytechnic State University: San Luis Obispo"
                subtitle="College of Engineering"
                description={
                  <div>
                    BS in Computer Science
                    <br/>
                    Class of 2014
                  </div>
                }
              />
            </Section>
            <Section title={"Skills"}>
              <SectionEntry
                subtitle="Languages:"
                description="Scala, JavaScript, TypeScript, SQL"
              />
              <SectionEntry
                subtitle="Frameworks/Libraries:"
                description="Spark, React, Kafka, ReactiveX, Avro, AWS Services (Kinesis, S3, etc.)"
              />
              <SectionEntry
                subtitle="Databases:"
                description="Postgres, MemSQL, Scylla/Cassandra, DynamoDB"
              />
              <SectionEntry
                subtitle="Dev Tools:"
                description="Git, IntelliJ, Vim"
              />
              <SectionEntry
                subtitle="Build Tools:"
                description="Docker, Jenkins, Maven, Webpack"
              />
              <SectionEntry
                subtitle="Environments"
                description="Linux, macOS"
              />
            </Section>
            <Section title={"About Me"}>
              <p>
                I've been a full-stack engineer since I graduated college back in 2014. Love being able to design and develop a system from the
                ground up. Always up for learning something new, whether it's new tech or design patterns.
              </p>
            </Section>
          </div>
          <div style={{width: "70%"}} className="pl-6">
            <Section title={"Experience"}>
              <SectionEntry
                title="Storygize (Native Advertising)"
                subtitle="Principal Software Engineer"
                date={"Apr 2016 \u2013 present"}
                location="Newbury Park, CA"
                description={
                  <ul className="list-disc pl-6">
                    <li>
                      A native advertising demand-side platform startup. Worked with advertisers to serve ads that blend in with the look and feel
                      of publisher sites and track performance.
                    </li>
                    <li>
                      Worked in all areas of the codebase: web app UI, realtime-bidding for ad inventory, tracking servers, reporting/campaign
                      management API, realtime/historical data processing, and build/deployment tooling.
                    </li>
                  </ul>
                }
              />
              <SectionEntry
                title="CJ Affiliate (Affiliate Marketing)"
                subtitle="Fullstack Software Engineer"
                date={"Jun 2014 \u2013 Apr 2016"}
                location="Westlake Village, CA"
                description={
                  <ul className="list-disc pl-6">
                    <li>
                      Data warehouse: Migrated existing lambda architecture from Flink and Hadoop to Kafka and Spark respectively. Decreased
                      historical job run times by 50% and our realtime data throughput significantly.
                    </li>
                    <li>
                      DevOps: Developed a new automated deployment system which relied on ansible playbooks and ran via a Scala app. Reduced
                      deployment from 1-2 hours (after work) to 15 minutes (during work). No longer required anyone with special knowledge to
                      be able to deploy our apps. Ease of use allowed us to deploy multiple times a week instead of just once.
                    </li>
                  </ul>
                }
              />
            </Section>
            <Section title={"Projects"}>
              <SectionEntry
                title="CloudBurst"
                subtitle={<a href="https://github.com/mattbague/CloudBurst" target="_blank">github.com/mattbague/CloudBurst</a>}
                description={
                  <p>
                    A downloader tool for <a href="https://soundcloud.com" target="_blank">soundcloud.com</a> built in Scala. Downloads songs with
                    ID3 tag filled in and album artwork. Reverse engineered their public API since they do not give out personal API keys anymore.
                  </p>
                }/>
              <SectionEntry
                title="AssetRemix (Unmaintained)"
                subtitle={<a href="https://assetremix.herokuapp.com/" target="_blank">assetremix.herokuapp.com</a>}
                description={
                  <p>
                    A web app focused on providing financial tools and investing guidance. Tools include calculators for tax-efficient
                    investing, three-fund portfolio allocations, and more.
                  </p>
                }/>
            </Section>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

function Section(props: { title: string, children?: any }) {
  return <div className="mb-2">
    <div className="font-thin mb-1" style={{fontSize: "1.5rem"}}>
      {props.title.toUpperCase()}
    </div>
    {props.children}
  </div>
}

type SectionEntryProps = {
  title?: string,
  subtitle?: string | JSX.Element,
  description?: string | JSX.Element,
  date?: string
  location?: string
}


const SectionEntry = (props: SectionEntryProps) => {
  return <div className="mb-1">
    <div className="font-bold">
      {props.title}<span className="float-right font-medium">{props.date}</span>
    </div>
    <div className="font-medium">
      {props.subtitle}<span className="float-right">{props.location}</span>
    </div>
    <div>
      {props.description}
    </div>
  </div>
}