import { motion } from "framer-motion";
import styled from "styled-components";
// import { GraphIcon } from "../../assets/Icons/graph-icon";
import GraphIcon from "../../assets/Icons/graph-icon";
import Colaboration from "../../assets/Images/colab.png";
import { CardContainer } from "../../components/ui/3d-card";
import { ABOUT_ALMONDS_FEATURE_LIST } from "../../constants/almonds-content";
import { IAboutAlmondsFeature } from "../../interfaces/user.interface";

export const AboutAlmonds = () => {
  return (
    <main className="min-h-screen bg-black pt-28 text-primaryWhite">
      <div className="flex flex-col md:flex-row sm:gap-2 lg:gap-8 mx-8">
        <div className="md:basis-1/2 flex flex-col justify-evenly">
          <motion.div
            initial={{ translateY: "25px", opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.25,
            }}
            style={{
              transition:
                "transform 500ms cubic-bezier(0,0,0.5,1), opacity 500ms cubic-bezier(0,0,0.5,1), visibility 500ms cubic-bezier(0,0,0.5,1)",
            }}
            // className="sm:mb-2 lg:mb-0"
          >
            <h1 className="sub-heading text-3xl md:text-[3.25rem] lg:leading-[4rem] tracking-wide selection:text-primaryYellow">
              Effortlessly handle Tasks and Teams{" "}
              <GradientText>with Almonds.</GradientText>
            </h1>
            <section className="my-4 mt-8 md:leading-8 text-lg">
              <p className="text-primaryGray text-content text-justify pr-8 selection:text-primaryBlue">
                Almonds aren't just for munching! This powerhouse web tool is
                like a superhero for teamwork, juggling tasks and projects like
                a pro. Its user-friendly design is the secret sauce to turning
                productivity dreams into reality!
              </p>
            </section>
          </motion.div>

          <motion.div
            initial={{ translateY: "25px", opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.75,
            }}
            style={{
              transition:
                "transform 500ms cubic-bezier(0,0,0.5,1), opacity 500ms cubic-bezier(0,0,0.5,1), visibility 500ms cubic-bezier(0,0,0.5,1)",
            }}
            className="flex flex-col md:flex-row gap-4"
          >
            {ABOUT_ALMONDS_FEATURE_LIST.map((feature, index) => (
              <AboutAlmondsFeature feature={feature} index={index} />
            ))}
          </motion.div>
        </div>
        <motion.div
          initial={{ translateY: "25px", opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          style={{
            transition:
              "transform 500ms cubic-bezier(0,0,0.5,1), opacity 500ms cubic-bezier(0,0,0.5,1), visibility 500ms cubic-bezier(0,0,0.5,1)",
          }}
          className="basis-1/2 h-full"
        >
          <CardContainer>
            <img src={Colaboration} alt="img-colab" className="rounded-lg" />
          </CardContainer>
        </motion.div>
      </div>
    </main>
  );
};

export const GradientText = styled.span`
  background: linear-gradient(90deg, #f3c259 0%, #ffa595 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
`;

const AboutAlmondsFeature = ({feature,index}: { feature: IAboutAlmondsFeature, index : number }) => {
  return (
    <div
      key={index}
      className={`bg-[#101010] p-4 rounded-lg basis-1/2 flex flex-col gap-4 `}
    >
      <div className="flex justify-between">
        <p
          className={`sub-heading tracking-wider  text-lg ${feature.fontColor} selection:text-secondaryBlack selection:bg-[${feature.fontSelectionColor}] `}
        >
          {feature.title}
        </p>
        <GraphIcon strokeColor={feature.iconStrokeColor} />
      </div>
      <p
        className={`${feature.fontSelectionColor} text-primaryWhite button-content`}
      >
        {feature.body}
      </p>
    </div>
  );
};