import React, { useEffect } from "react";
import styled from "styled-components";
import Layout from "../layouts/layout";
import { gift_list } from "../declarations/gift_list";
import { Checkbox, defaultTheme, Provider } from "@adobe/react-spectrum";

type GiftProps = {
  id: string;
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
      <p>It's time for some more dresses!</p>
      <Section>
        <GiftItem
          link="https://cuyana.com/products/silk-cami-v2?variant=44711426982203"
          linkText="Cuyana"
          image="https://cuyana.com/cdn/shop/files/PDP_1080x1350_ES23_SilkCami_BloodOrange_20255_5aa2359e-cb68-4e66-a3ef-c27c4083ef9c_1000x.jpg?v=1691188028"
          id="silk-cami"
          description="Size XL in Blood Orange"
          price={128}
          title="Cuyana Silk Cami"
          alt="silk-cami"
        />
        <GiftItem
          link="https://cuyana.com/products/silk-asymmetrical-skirt?variant=44393458696507"
          id="silk-skirt"
          description="Size XL in Black"
          price={178}
          title="Cuyana Silk Asymmetrical Skirt"
          alt="silk-skirt"
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
          link="https://www.quince.com/women/women-s-washable-silk-mini-slip-dress?color=black&gender=women&tracker=collection_page__women%2Fsilk__Dresses%20%26%20Skirts__6"
          linkText="Quince"
          image="https://images.quince.com/JJsqkXFlH3Wx8mS7cbJVB/d98d0c14f1498986570d8b3ce66f7a09/W-DRS-47-BLK_1335.jpg?w=1600&q=50&h=2000&fm=webp"
          id="quince-silk-dress"
          description="Size XL in Black"
          price={60}
          title="Quince Silk Mini Slip Dress"
          alt="quince-silk-dress"
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
          link="https://store.steampowered.com/app/865610/Tails_Noir/"
          linkText="Steam"
          image="https://rawfury.com/wp-content/uploads/2020/10/TailsNoir_RF_Web_BoxArt.png"
          id="tails-noir"
          description="Detective game for PC"
          price={5}
          title="Tails Noir"
          alt="tails-noir"
        />
        <GiftItem
          link="https://www.heathceramics.com/collections/mugs-cups/products/large-mug?variant=5421972946977"
          linkText="Heath Ceramics"
          image="https://www.heathceramics.com/cdn/shop/products/large-mug-slate-indigo-heath-ceramics_700-0294.jpg?v=1692032885"
          id="heath-mug"
          description="Large Mug in Slate / Indigo. Mine cracked 😢"
          price={45}
          title="Heath Ceramics Mug"
          alt="heath-mug"
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
