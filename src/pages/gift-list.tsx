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

  const formatPrice = (price: number) => {
    // Don't show cents if it's a whole dollar amount
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: price % 1 === 0 ? 0 : 2,
    });
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
          {price ? ` - ${formatPrice(price)}` : null}
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
          link="https://cuyana.com/products/silk-slip-dress-v2?variant=44388536189243"
          linkText="Cuyana"
          image="https://cuyana.com/cdn/shop/products/PDP_White_Hero_900x900_SP22_SilkSlipDress_Rust_9199_1000x.jpg?v=1687317176"
          id="silk-slip-dress"
          description="Size XL in Rust or Black"
          price={228}
          title="Cuyana Silk Slip Dress"
          alt="silk-slip-dress"
        />
        <GiftItem
          link="https://www.threadandsprout.com/made-to-order"
          linkText="Thread & Sprout"
          image="https://images.squarespace-cdn.com/content/v1/5c54e85b809d8e2901b05b83/1675795581299-F3PKOKSJKWDLKJ15JQH3/Blundstone+Photos-6.jpg?format=750w"
          id="thread-and-sprout"
          description="Made to order dress (may not be available before birthday / christmas)"
          price={340}
          title="Thread & Sprout Dress"
          alt="thread-and-sprout"
        />
        <GiftItem
          link="https://cuyana.com/products/silk-cami-v2?variant=44392025522491"
          linkText="Cuyana"
          image="https://cuyana.com/cdn/shop/products/PDP_1080x1350_160516_POW_Summer_0385_R_1000x.jpg?v=1687317244"
          id="silk-cami"
          description="Size XL in Black"
          price={128}
          title="Cuyana Silk Cami"
          alt="silk-cami"
        />
        <GiftItem
          link="https://www.cos.com/en_usd/women/womenswear/dresses/product.corduroy-midi-shirt-dress-green.1168573001.html"
          linkText="COS"
          image="http://lp.cosstores.com/app001prod%3Fset=source[/85/c8/85c876e2e010378d71f45cf47b244f42aa807504.jpg],origin[dam],type[LOOKBOOK],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main]"
          id="corduroy-dress"
          description="Size 14 in Green"
          price={135}
          title="COS Corduroy Midi Shirt Dress"
          alt="corduroy-dress"
        />
      </Section>
      <h2>Games & Stuff</h2>
      <Section>
        <GiftItem
          link="https://gocycle.com/us/webstore/accessories/gocycle-cateye-reflex-auto-light/"
          linkText="GoCycle"
          image="https://gocycle.com/us/wp-content/uploads/sites/3/2021/11/Cateye_OnBike_DSC5071_Webstore.jpg"
          id="gocycle-lights"
          description="My rear light got damaged, and this would be a great replacement"
          price={56}
          title="GoCycle Cateye Reflex Auto Light"
          alt="gocycle-lights"
        />
        <GiftItem
          link="https://store.steampowered.com/app/1888160/ARMORED_CORE_VI_FIRES_OF_RUBICON/"
          linkText="Steam"
          image="https://upload.wikimedia.org/wikipedia/en/8/89/Armored_Core_VI_Fires_of_Rubicon_cover_art.jpg"
          id="armored-core"
          description="Armored Core for PC"
          price={60}
          title="Armored Core IV: Fires of Rubicon"
          alt="armored-core"
        />
        <GiftItem
          link="https://www.amazon.com/dp/B08JYKN185/?coliid=I2ZFKXM02D4SZV&colid=2Z8K6CQUF82ZY&ref_=list_c_wl_lv_ov_lig_dp_it&th=1"
          linkText="Amazon"
          image="https://m.media-amazon.com/images/I/71yz51mniRL._AC_SL1500_.jpg"
          id="sharpener"
          description="Fancy Knife Sharpener"
          price={189}
          title="HORL 2 Knife Sharpener"
          alt="sharpener"
        />
        <GiftItem
          link="https://www.colevalleyqueenanne.com/"
          linkText="Cole Valley Queen Anne"
          image="https://cdn.openhomesphotography.com/uploads/737-cole-street.1ee1b517-c40b-681a-9608-02216b1db4f5/batchUploads/ptw.5b6a5eaa-26bb-11ee-a11b-02216b1db4f5/processed/pictures/web/737-cole-street.65883.ptw.003.web.jpg"
          id="real-estate"
          description="Might as well ask, right?"
          title="Real Estate"
          alt="cole-valley-queen-anne"
          price={4_500_000}
        />
      </Section>

      <h2>Sizing Guide</h2>
      <p>General sizing: XL Women's, L Men's</p>
      <dl>
        <dt>Chest</dt>
        <dd>40</dd>
        <dt>Waist</dt>
        <dd>38</dd>
        <dt>Hips</dt>
        <dd>40</dd>
        <dt>Length</dt>
        <dd>32</dd>
      </dl>
    </Layout>
  );
};

export default GiftList;
