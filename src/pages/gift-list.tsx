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
        <GiftItem
          link="https://www.fluevog.com/shop/5281-gladstone-black?item=9&of=32&anchor=true"
          linkText="Fluevog"
          image="https://www.fluevog.com/images/gladstone-black-mid-calf-lace-up-boot-profile-outside-colour_image-0000029889-retina_detail.webp"
          id="gladstone-boots"
          description="Size 11 mens / 13 womens in Black"
          price={399}
          title="Fluevog East End Gladstone Mid-calf lace-up boot"
          alt="gladstone-boots"
        />
        <GiftItem
          link="https://www.etsy.com/listing/772955961/genuine-leather-black-holster-with?click_key=1ab311bd2eb799929bb95ee219ec553b3d65ede8%3A772955961&click_sum=806db059&ref=shop_home_active_1&pro=1&frs=1"
          linkText="Etsy"
          image="https://i.etsystatic.com/6109266/r/il/3f3678/2604264544/il_1588xN.2604264544_3aek.jpg"
          id="leather-holster"
          description="holster in black"
          price={260}
          title="Leather Holster"
          alt="leather-holster"
        />
        <GiftItem
          link="https://shop.spookyhaus.com/products/trans-symbol-earrings"
          linkText="Spooky Haus"
          image="https://shop.spookyhaus.com/cdn/shop/files/Brightness_Contrast1.png?v=1714455332"
          id="trans-earrings"
          description="Earrings from my friends at Spooky Haus"
          price={28}
          title="Glitzy Trans Symbol Earrings"
          alt="trans earrings"
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
        <GiftItem
          link="https://yetch.store/products/small-coat-hinger-bracket-kit-pre-order"
          linkText="Yetch"
          image="https://imgproxy.fourthwall.com/Ea-Z8ga5kjvCmdWlPYUG90MMOVz9fI8hr4mzMQaaS1s/sm:1/enc/ZWVlMGFlOGE5ODk3/ODQ0ODWLM3OwT6iV/ZH6UeHSku1ukWmPA/09f_rAAKlM5CnqcC/e1EihE2gGHmdBGs7/NV7BRMF2dtmp9FxL/Eq_KoE9EdSJvc--F/z287Yre8FMsZ4m1M/6KbB0xRJcqrLgAfb/99OUlTvUIYSUCA4-/wp29LmCgh2EuRZS5/dSDWbtsRjQxUinfs/znde6LTjuFRTUGgY/IxQX-Q.webp"
          id="coat-hanger"
          description="Neat little space-saving coat hanger from Simone Giertz"
          price={150}
          title="Yetch Coat Hinger"
          alt="coat-hanger"
        />
        <GiftItem
          link="https://www.amazon.com/dp/B08G8RG8Q8/ref=emc_bcc_2_i?th=1"
          linkText="Amazon"
          image="https://m.media-amazon.com/images/I/71JHo8dEyYL._AC_SX679_.jpg"
          id="ladder"
          description="gotta get up high"
          price={113}
          title="Boweiti Telescoping Ladder"
          alt="ladder"
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
