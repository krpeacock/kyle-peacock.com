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
          <picture
            style={{
              display: "flex",
              aspectRatio: "1",
              width: "100%",

              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <img
              src={image}
              alt={alt}
              style={{
                background: "white",
                backgroundBlendMode: "normal",
                aspectRatio: "1",
                objectFit: "contain",
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
            Reserved
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
          id="boot"
          image="https://www.allenedmonds.com/blob/product-images/39099/ec/40/22671/ec4022671_single_large.jpg"
          alt="Discovery Chelsea Boot"
          title="Allen Edmonds Chelsea Boot"
          description="Size 11.5, in Black"
          price={300}
          link="https://www.allenedmonds.com/product/mens-discovery-chelsea-boot-3023493/black-ec4022671"
          linkText="Allen Edmonds"
        />
        {/* <GiftItem
          id="coat"
          image="https://cdn.shopify.com/s/files/1/0313/7821/products/NMET003183_LUXE_DEADSTOCK_CASHMERE_TAILORED_COAT_BLACK_4597_1440x.jpg?v=1669134749"
          alt="Black Cashmere Coat"
          title="Tailored coat by Naadam"
          description="Size Large, in Black"
          price={695}
          note="Shoot for the moon, right?"
          link="https://naadam.co/products/tailored-coat?variant=39521291272288"
          linkText="Naadam"
        /> */}
      </Section>
      <h2>Electronics / Games</h2>
      <Section>
        <GiftItem
          link="https://www.bestbuy.com/site/microsoft-xbox-wireless-controller-for-xbox-series-x-xbox-series-s-xbox-one-windows-devices-carbon-black/6430655.p?skuId=6430655&ref=212&loc=1&ref=212&loc=1&gclsrc=ds"
          id="controller"
          title="Xbox Controller"
          image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6430/6430655_sd.jpg;maxHeight=640;maxWidth=550"
          linkText="Best Buy"
          description="Controller for PC Gaming - currently $20 off!"
          price={30}
          alt="xbox controller"
        />
        <GiftItem
          id="rocksmith"
          title="RockSmith+ for PC"
          image="https://image.api.playstation.com/cdn/UP0001/CUSA00692_00/VTNj338PhnTylYEQHEImizJpXZTlaldG.png"
          link="https://www.walmart.com/ip/Ubisoft-Rocksmith-Real-Tone-USB-11-25ft-Audio-Cable-PS3-PS4-Xbox-PC-Mac/17753709?athcpid=17753709&athpgid=AthenaItempage&athcgid=null&athznid=PWSMT&athieid=v0&athstid=CS020&athguid=WaTZWJqHE86C7SNScbwD7zze_nWz_OAGwA5Y&athancid=null&athena=true"
          description="Requires both the cable and the game"
          linkText="Walmart"
          price={65}
          alt="rocksmith game"
        />
        <GiftItem
          link="https://store.steampowered.com/app/1817190/Marvels_SpiderMan_Miles_Morales/"
          linkText="Steam"
          image="https://vignette.wikia.nocookie.net/spidermanps4/images/9/93/Miles_Morales_front_cover_(US).png/revision/latest?cb=20200709212103"
          id="spider-man"
          description="Spider-Man game for PC"
          price={50}
          title="Spider-Man Miles Morales"
          alt="spider-man"
        />
        <GiftItem
          id="color-lights"
          title="Hue Color Lights"
          alt="light bulb"
          description="4x A60 - E27 smart bulb - 1100"
          price={152}
          link="https://www.amazon.com/Philips-Hue-Bluetooth-Compatible-Assistant/dp/B09W64MC6K/ref=sr_1_3?keywords=philips+hue+e27&qid=1669656890&sr=8-3&ufe=app_do%3Aamzn1.fos.08f69ac3-fd3d-4b88-bca2-8997e41410bb"
          linkText="Philips Hue"
          note="Four of these for the TV's entertainment zone"
          image="https://www.assets.signify.com/is/image/PhilipsLighting/09779d369c29481ab9daac2f00bb7f39?wid=1500&hei=1125&qlt=82"
        />
        <GiftItem
          id="white-lights"
          title="Hue White Lights"
          alt="light bulb"
          price={20 * 8}
          description="8x A60 - E27 White Ambiance"
          link="https://www.amazon.com/Philips-Hue-Ambiance-Equivalent-Assistant/dp/B01F6T4R0S/ref=sr_1_5?crid=7G8RFV04CX1U&keywords=philips%2Bhue%2Bwhite%2Bambiance%2Be27&qid=1669657019&sprefix=philips%2Bhue%2Be27%2Caps%2C141&sr=8-5&th=1"
          linkText="Philips Hue"
          note="8 for the kitchen"
          image="https://www.assets.signify.com/is/image/PhilipsLighting/01a9625d384441d9abfba9b9009c11e2?wid=1500&hei=1125&qlt=82"
        />
        {/* <GiftItem
          id="motion-lights"
          image="https://m.media-amazon.com/images/I/51ep1HsEzfL._AC_SL1500_.jpg"
          alt="light"
          link="https://www.amazon.com/TOOWELL-Motion-Operated-Bathroom-Photocell/dp/B07VCS93T5/ref=sr_1_12?crid=3UMAPINY5ULZH&keywords=motion+light+hallway&qid=1669594433&sprefix=motion+light+hallway%2Caps%2C267&sr=8-12"
          title="Hallway Lights"
          description="I'd like 2 of these for the stairs"
        /> */}
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
