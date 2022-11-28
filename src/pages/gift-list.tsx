import React, { useEffect } from "react";
import styled from "styled-components";
import Layout from "../layouts/layout";
import { gift_list } from "../declarations/gift_list";
import { Checkbox, defaultTheme, Provider } from "@adobe/react-spectrum";

type GiftProps = {
  id: typeof gifts[number];
  title: string;
  image: string;
  alt: string;
  description: string;
  link: string;
  linkText?: string;
  note?: string;
  audio?: string;
  price?: number;
};

export const gifts = [
  "coat",
  "sweater",
  "joggers",
  "wallet",
  "color-lights",
  "white-lights",
  "motion-lights",
  "bell",
];

const GiftItem = (props: GiftProps) => {
  const [status, setStatus] = React.useState<"bought" | "unbought">();
  const {
    link,
    alt,
    image,
    title,
    note,
    description,
    price,
    audio,
    id,
    linkText = "Link",
  } = props;

  useEffect(() => {
    if (window && typeof window !== "undefined") {
      gift_list.getGift(id).then((gift) => {
        if (!gift.length) {
          console.error(`gift ${id} not found`);
          return;
        }
        if ("bought" in gift[0].status) {
          setStatus("bought");
        } else {
          setStatus("unbought");
        }
      });
    }
  }, []);

  const handleToggle = () => {
    gift_list
      .updateGift(
        id,
        status == "bought" ? { unbought: null } : { bought: null }
      )

      .catch((err) => console.error(err));
    setStatus(status == "bought" ? "unbought" : "bought");
  };

  return (
    <Provider theme={defaultTheme}>
      <div
        style={{
          width: "calc(300px + 2rem)",
          display: "flex",
          border: "1px solid #acac",
          padding: "1.5rem 1rem",
          flexDirection: "column",
          alignContent: "space-evenly",
          marginBottom: "1rem",
        }}
      >
        <a href={link} style={{ textDecoration: "none", borderBottom: "none" }}>
          <picture style={{ display: "flex", aspectRatio: "1", width: "100%" }}>
            <img
              src={image}
              alt={alt}
              style={{
                aspectRatio: "1",
                objectFit: "cover",
                marginBottom: "0",
              }}
            />
          </picture>
          <h3>{title}</h3>
        </a>
        <p>
          {description}
          {price ? ` - $${price}` : null}
        </p>
        {audio ? (
          <audio controls style={{ marginBottom: "1rem", colorScheme: "dark" }}>
            <source src={audio} type="" />
          </audio>
        ) : null}
        {note ? <blockquote>{note}</blockquote> : null}
        <a href={link} style={{ marginTop: "auto", marginBottom: "1.5rem" }}>
          {linkText}
        </a>
        {status ? (
          <Checkbox onChange={handleToggle} isSelected={status == "bought"}>
            Bought
          </Checkbox>
        ) : null}
      </div>
    </Provider>
  );
};

const Section = styled.section`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  align-content: space-evenly;
  justify-content: start;
  width: 100%;
  margin-bottom: 2rem;
`;

const GiftList = ({ location }) => {
  return (
    <Layout
      pageContext={{ frontmatter: { capitalize: false } }}
      location={location}
    >
      <h1>Kyle's Gift List</h1>

      <h2>Clothing</h2>
      <Section>
        <GiftItem
          id="coat"
          image="https://cdn.shopify.com/s/files/1/0313/7821/products/NMET003183_LUXE_DEADSTOCK_CASHMERE_TAILORED_COAT_BLACK_4597_1440x.jpg?v=1669134749"
          alt="Black Cashmere Coat"
          title="Tailored coat by Naadam"
          description="Size Large, in Black"
          price={695}
          note="Shoot for the moon, right?"
          link="https://naadam.co/products/tailored-coat?variant=39521291272288"
          linkText="Naadam"
        />
        <GiftItem
          id="sweater"
          image="https://cdn.shopify.com/s/files/1/0313/7821/products/ME02122_THE_ESSENTIAL__75_CASHMERE_SWEATER_MEN_S_OATMEAL_003_1440x.jpg?v=1644292342"
          alt="White Cashmere Sweater"
          title="Essential Sweater by Naadam"
          description="Size Large, in Oatmeal or Saffron"
          price={75}
          note="I own one of these and it's incredibly cozy and soft"
          link="https://naadam.co/products/the-essential-75-cashmere-sweater-mens?variant=32474760544352"
          linkText="Naadam"
        />
        <GiftItem
          id="joggers"
          alt="White Joggers"
          image="https://vuori.imgix.net/s/files/1/0022/4008/6074/products/V438HPT_39adbf89-df71-43f6-9876-8e7ddc65fd19_1200x_crop_center.jpg.webp?ixlib=js-3.7.0&w=800&auto=format&dpr=2&q=50&s=5317922157c6af70c1bd2684542736e0"
          title="Ponto Performance Jogger by Vuori"
          link="https://vuoriclothing.com/products/ponto-performance-jogger-platinum-heather?queryId=82cf838c43762192ab3f59b79ca1baff&index=us_products&objectId=6633979904103"
          description="Size Large, in Platinum Heather"
          price={98}
          linkText="Vuori"
        />
        <GiftItem
          id="wallet"
          alt="Leather Wallet"
          title="Wallet"
          link="https://www.leatherology.com/thin-bifold-wallet?color=black-oil"
          description="Black Oil"
          price={100}
          linkText="Leatherology"
          image="https://www.leatherology.com/media/webImg/Thin-Bifold-Wallet-Black-115-515_fullsize.jpg?width=1100"
        />
      </Section>
      <h2>Electronics</h2>
      <Section>
        <GiftItem
          id="color-lights"
          title="Hue Color Lights"
          alt="light bulb"
          description="4x A60 - E27 smart bulb - 1100"
          link="https://www.philips-hue.com/en-in/p/hue-white-and-color-ambiance-a60---e27-smart-bulb---1100/8719514457812"
          linkText="Philips Hue"
          note="Four of these for the TV's entertainment zone"
          image="https://www.assets.signify.com/is/image/PhilipsLighting/09779d369c29481ab9daac2f00bb7f39?wid=1500&hei=1125&qlt=82"
        />
        <GiftItem
          id="white-lights"
          title="Hue White Lights"
          alt="light bulb"
          description="8x A60 - E27 White Ambiance"
          link="https://www.philips-hue.com/en-in/p/hue-white-ambiance-single-bulb-e27/8718696670361"
          linkText="Philips Hue"
          note="8 for the kitchen"
          image="https://www.assets.signify.com/is/image/PhilipsLighting/01a9625d384441d9abfba9b9009c11e2?wid=1500&hei=1125&qlt=82"
        />
        <GiftItem
          id="motion-lights"
          image="https://m.media-amazon.com/images/I/51ep1HsEzfL._AC_SL1500_.jpg"
          alt="light"
          link="https://www.amazon.com/TOOWELL-Motion-Operated-Bathroom-Photocell/dp/B07VCS93T5/ref=sr_1_12?crid=3UMAPINY5ULZH&keywords=motion+light+hallway&qid=1669594433&sprefix=motion+light+hallway%2Caps%2C267&sr=8-12"
          title="Hallway Lights"
          description="I'd like 2 of these for the stairs"
        />
      </Section>
      <h2>Misc</h2>
      <Section>
        <GiftItem
          id="bell"
          title="Bike Bell"
          description="Check out the ring!"
          audio="https://www.lionbellworks.co.uk/img/bellsound07.mp3"
          image="https://i.etsystatic.com/7176195/r/il/5b3acb/681761657/il_1588xN.681761657_ploj.jpg"
          link="https://www.etsy.com/uk/listing/106431038/retro-brass-bicycle-bell-classic-style?utm_source=affiliate_window&utm_medium=affiliate&utm_campaign=uk_location_buyer&utm_content=489797&awc=6091_1669593342_bd047207cb07734fe35beebfe0e34fc2&variation0=744229794"
          alt="bike bell"
        />
      </Section>
    </Layout>
  );
};

export default GiftList;
