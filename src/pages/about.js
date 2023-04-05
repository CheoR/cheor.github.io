import React from "react";
import { SEO } from "../components/SEO/SEO";

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <section>
        <p>
          <b>Hi</b> My name is Cheo. I'm a Nashville-based developer.
        </p>
        <p>
          I have been programming as a hobby on/off for years. I started with
          C++ in highschool and dabbled with a bit of other languages since
          then. In college, I used Prolog for a computational linguistics course
          where we{" "}
          <a
            href="https://news.ucsc.edu/2008/06/2278.html"
            aria-label="University of California - Santa Cruz Computational Linguistics Speech-Operated Roboic Cars"
          >
            drove robotic cars using our voice.
          </a>
        </p>
        <p>
          Due to health reasons after graduating, I could no longer do Peace
          Corp on medical grounds, so I continued learning at a local community
          college and state school. Doing so taught me to plan, build, and
          automate tools which eased my workload in the
          transportation/logistics/freight shipping industries.
        </p>
        <p>
          When I was laid off in December 2020, I decided to enrolled at the{" "}
          <a
            href="https://nashvillesoftwareschool.com/"
            aria-label="Nashville Software School"
          >
            Nashville Software School
          </a>
          . NSS reinforced my skillset and taught me to use the latest
          technologies.
        </p>
        <p>
          In my free time I like to catch up on (computational) linguistics,
          explore, and volunteer.
        </p>
        <p>I look forward to collaborating with you on future endeavors.</p>
      </section>
    </Layout>
  );
};

export default AboutPage;

// eslint-disable-next-line
export const Head = () => <SEO title="About" description="About Page" />;
