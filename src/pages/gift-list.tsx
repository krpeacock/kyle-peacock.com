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
      <Section>
        <GiftItem
          link="https://www.curatorsf.com/collections/bottoms/products/jessie-skirt-oat-black-stripe?variant=41396930379835"
          linkText="Curator"
          image="https://www.curatorsf.com/cdn/shop/files/jessie_skirt_oat_leo_pointelle_fog_cassia_1_web_1195x1792.jpg?v=1691036968"
          id="jessie-skirt"
          description="Size 2XL in Oat + Black Stripe"
          price={168}
          title="Curator Jessie Skirt"
          alt="jessie-skirt"
        />
        <GiftItem
          link="https://cuyana.com/products/silk-asymmetrical-skirt?variant=44393458696507"
          linkText="Cuyana"
          image="https://cuyana.com/cdn/shop/products/sp19_silkasymmetricalskirt_black_0041-hero_900x900.jpg?v=1687317337"
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
          link="https://cuyana.com/products/convertible-puffer-jacket?variant=44838255722811"
          linkText="Cuyana"
          image="https://cuyana.com/cdn/shop/files/PDP_Hero_1080x1350_FA23_ConvertiblePufferJacket_Black_2367_1000x.jpg?v=1695320246"
          id="puffer"
          description="Size XL in Black"
          price={398}
          title="Cuyana Puffer Jacket"
          alt="puffer"
        />
      </Section>
      <h2>Games & Stuff</h2>
      <Section>
        <GiftItem
          link="https://www.amazon.com/NUC11PAHi7-Computer-i7-1165G7-Processor-Thunderbolt/dp/B09WRH6C1S/ref=sr_1_9?keywords=intel%2Bnuc%2Bi7&qid=1701013138&sr=8-9&th=1"
          linkText="Amazon"
          image="https://m.media-amazon.com/images/I/610nMq+4uEL._AC_SX679_.jpg"
          id="nuc"
          description="Micro PC for Media Console"
          price={549}
          title="Intel NUC 11 Performance Kit"
          alt="nuc"
        />
        <GiftItem
          link="https://www.nintendo.com/us/store/products/super-mario-rpg-118738/"
          linkText="Nintendo"
          image="https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/My%20Nintendo%20Store/EN-US/Nintendo%20Switch%20Software/super-mario-rpg-118738/118738-switch-super-mario-rpg-1200x675"
          id="super-mario-rpg"
          description="Super Mario RPG for Nintendo Switch (physical preferred)"
          price={60}
          title="Super Mario RPG"
          alt="super-mario-rpg"
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
