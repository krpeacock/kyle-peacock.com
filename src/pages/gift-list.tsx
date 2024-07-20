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
      <h1>Kai's Gift List</h1>

      <h2>Clothing</h2>
      <Section>
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
      </Section>

      <h2>Home</h2>
      <Section>
        <GiftItem
          link="https://www.amazon.com/dp/B088DNK94C"
          linkText="Amazon"
          image="https://m.media-amazon.com/images/I/51TNjnnt1cL._AC_SL1077_.jpg"
          id="icecream"
          description="Insulated Ice Cream Bowls"
          price={26}
          title="Insulated Ice Cream Bowls"
          alt="icecream"
        />
      </Section>

      <h2>Games</h2>
      <Section>
        <GiftItem
          link="https://store.steampowered.com/app/2457220/Avowed/"
          image="https://www.digitaltrends.com/wp-content/uploads/2024/01/Avowed-key-art-1.jpg?fit=1920%2C1080&p=1"
          id="avowed"
          description="New Obsidian games RPG"
          title="Avowed"
          alt="avowed"
        />
      </Section>

      <h2>Sizing Guide</h2>
      <p>General sizing: XL Women's, L Men's</p>
      <dl>
        <dt>Chest</dt>
        <dd>41</dd>
        <dt>Bust</dt>
        <dd>43</dd>
        <dt>Waist</dt>
        <dd>40</dd>
        <dt>Hips</dt>
        <dd>42</dd>
        <dt>Inseam</dt>
        <dd>32</dd>
      </dl>
    </Layout>
  );
};

export default GiftList;
