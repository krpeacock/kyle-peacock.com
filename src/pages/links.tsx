import React from "react";
import Layout from "../layouts/layout";
import { Button, View } from "@adobe/react-spectrum";

interface Props {
  location: URL;
}

function Links(props: Props) {
  const { location } = props;
  return (
    <Layout
      pageContext={{
        disableTitleAndDate: true,
        frontmatter: {
          title: "Kyle Peacock",
        },
      }}
      location={location}
    >
      <h1>It's me, Kyle</h1>
      <img
        src="/images/profile.jpg"
        alt="artistic profile"
        style={{ maxWidth: "400px" }}
      />
      <View>
        <p>
          Enjoying ETHDenver? I'll be available at the{" "}
          <a href="#buidl-hub">BUIDLHub</a> with Dfinity this year!
        </p>
        <p>
          If you're free on Monday the 27th, come check out my workshop on how
          to build a decentralized application with Dfinity's Internet Computer.
          I'll give out free cycles, and everyone will get a chance to deploy
          their own decentralized website or smart contract! Limited to 75
          people, but you can always ask me questions at the coworking space.
        </p>
        <Button
          variant="cta"
          UNSAFE_style={{ marginRight: "1rem" }}
          onPress={() =>
            //   scroll to the workshop section
            document.getElementById("workshop")?.scrollIntoView()
          }
        >
          Workshop Info
        </Button>
        <a href={`/kyle-peacock.vcf`} download="kyle-peacock.vcf">
          Download My Contact
        </a>
      </View>
      <hr />

      <p>Here's some links to my stuff:</p>
      <ul>
        <li>
          <a href="/blog">My Blog</a>
        </li>
        <li>
          <a href="https://github.com/krpeacock">My Github</a>
        </li>
        <li>
          <a href="https://twitter.com/kylpeacock">My Twitter</a>
        </li>
        <li>
          <a href="https://linkedin.com/in/krpeacock">My LinkedIn</a>
        </li>
        <li>
          <a href="https://discord.com/users/Kyle#8394">Discord</a>
        </li>
      </ul>

      <section id="workshop">
        <a href="https://events.ethdenver.com/event-hosts/attendease/networking/experience/3cf0f6c1-0247-4e8a-96f9-4740d28b969d/9911a8a4-fdbd-46f7-9946-ef47e0904c07">
          <h2>Deploying Dapps on the Internet Computer: A Hands-On Workshop</h2>
        </a>
        <p>Will be in the Vib Hotel Ballroom at 9:00am on on Monday the 27th</p>
        <p>
          Event Link:{" "}
          <a href="https://events.ethdenver.com/event-hosts/attendease/networking/experience/3cf0f6c1-0247-4e8a-96f9-4740d28b969d/9911a8a4-fdbd-46f7-9946-ef47e0904c07">
            events.ethdenver.com
          </a>
        </p>
        <p>Calendar Link: </p>
        <a
          href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20230227T160000Z%2F20230227T173000Z&details=Join%20us%20for%20an%20exciting%20hands-on%20workshop%20where%20you%20will%20learn%20about%20the%20cutting-edge%20technology%20behind%20the%20Internet%20Computer%2C%20and%20have%20the%20opportunity%20to%20launch%20your%20very%20own%20smart%20contract%20on%20this%20revolutionary%20platform.%20Bring%20your%20laptop%20and%20come%20prepared%20to%20dive%20into%20the%20world%20of%20decentralized%20web%20development.%0A%0AOur%20expert%20instructor%2C%20Kyle%2C%20will%20guide%20you%20through%20the%20process%20of%20setting%20up%20a%20development%20environment%2C%20selecting%20a%20dapp%20template%2C%20and%20deploying%20it%20to%20production.%20You%27ll%20have%20access%20to%20templates%20for%20full%20website%20hosting%2C%20NFTs%2C%20managing%20ICP%20and%20BTC%2C%20DAOs%20and%20more%21%0AWhether%20you%27re%20an%20experienced%20developer%20or%20new%20to%20the%20field%2C%20this%20workshop%20is%20suitable%20for%20blockchain%20and%20web%20engineers.%0A%0ALanguages%20used%20in%20this%20workshop%20are%20JavaScript%2FTypeScript%2C%20Rust%2C%20and%20Motoko.%20Prior%20language%20experience%20is%20not%20required.&location=https%3A%2F%2Fgoo.gl%2Fmaps%2Fv5D7NrmAwTfEzhBb9&text=Deploying%20Dapps%20on%20the%20Internet%20Computer"
          title="Save Event in my Calendar"
        >
          Add to Calendar
        </a>
        <p>
          <a href="/ics/ethdenver-workshop.ics" download={true}>
            Download ICS
          </a>
        </p>
        <p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.6049563012307!2d-104.97981888411924!3d39.77097720258119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7904e81aaaab%3A0x2f9de3fabf39cd49!2sV%C4%ABb%20Hotel%20By%20Best%20Western%20Denver%20Rino!5e0!3m2!1sen!2sus!4v1676594388688!5m2!1sen!2sus"
            width="350"
            height="250"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </p>
      </section>
    </Layout>
  );
}

export default Links;
