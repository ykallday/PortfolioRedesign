import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.div`
  color: black;
  line-height: 2em;
  padding: 20px;
  height: 90vh;
  overflow: scroll;
`;

const Under = styled.span`
  text-decoration: underline;
  background-color: rgba(188, 234, 247, 0.5);
  color: black;
`;
const About = () => {
  return (
    <Section>
      <h1>It's nice to meet you.</h1>
      <p>
        My name is Yael, and I'm located in Los Angeles. I’m a{" "}
        <Under>digital marketer</Under> and{" "}
        <Under>full-stack software engineer</Under> focusing on front-end
        development and web design.{" "}
      </p>
      <h4>Software Development</h4>
      <p>
        I specialize in JavaScript, HTML/CSS and React, which, paired with my
        detail oriented approach to the creative process and my ability to learn
        quickly, make me an asset to any team. My incessant curiosity and
        appreciation for a problem that stumps me continually push me to work
        toward a world of efficient, beautiful websites and apps people enjoy
        using. My previous experience working in digital marketing provided me
        with a versatile skillset, including but not limited to: positive, clear
        communication, the ability to handle multiple deadlines simultaneously,
        time management and organizational skills, and a love for team
        collaboration. I cannot wait to implement this know-how as I make the
        move into the software engineering space. Want to learn more? Check out
        the{" "}
        <Under>
          <Link to="/software_development">Software Development Section</Link>
        </Under>
      </p>
      <h4>Digital Marketing</h4>
      <p>
        I specialize in content design and development, and love to create. In
        my past 8 years of digital marketing experience, I've created / managed
        multiple social accounts and copious product release campaigns. I
        designed and developed quarterly digital, interactive catalogs, and
        managed (designed, developed, coded, and distributed via Campaign
        Monitor) the email marketing program for both consumer and customer
        audiences. Want to learn more? Check out the{" "}
        <Under>
          <Link to="/digital_marketing">Digital Marketing Section</Link>
        </Under>
      </p>
      <h4>What Else?</h4>
      <p>
        In my spare time, I like to exercise my creative mind with music -
        whether that be writing it, performing it, recording it, or listening to
        it. I also love any craft that utilizes my hands - from sculpting to
        knitting! (Interested? Check out my knitting{" "}
        <Under>
          <a href="http://instagram.com/brbihavetotakeaknit" target="_blank">
            Instagram
          </a>{" "}
        </Under>
        or{" "}
        <Under>
          <a
            href="https://open.spotify.com/artist/0WLB0TJ83tuaDm9jonj1A1"
            target="_blank"
          >
            Spotify page
          </a>
        </Under>
        )
      </p>
    </Section>
  );
};

export default About;
