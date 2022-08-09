import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section-center section">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            esse. Reiciendis ratione reprehenderit suscipit. Inventore ullam,
            iure assumenda quod, voluptate harum, consequatur molestias cum
            voluptatem atque eius porro numquam sed tempore enim odio nihil
            aliquid minima laudantium vero doloremque adipisci eum. Est quidem
            alias dignissimos! Sed temporibus neque impedit aliquam nulla
            molestiae, assumenda praesentium aut a corrupti architecto ab sunt
            consectetur, minus quasi odit eius corporis maxime commodi dolore
            ullam.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
