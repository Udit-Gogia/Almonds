import { motion } from "framer-motion";
import styled from "styled-components";
// import { GraphIcon } from "../../assets/Icons/graph-icon";
import { GitBranch } from "../../assets/Icons/git-branch";
import GraphIcon from "../../assets/Icons/graph-icon";
import Colaboration from "../../assets/Images/colab.png";
import { CardContainer } from "../../components/ui/3d-card";

export const AboutAlmonds = () => {
  return (
    <main className="min-h-screen bg-black pt-28 text-[#FBFBFB]">
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
          >
            <h1 className="rubik text-3xl md:text-[3.25rem] font-bold lg:leading-[4rem] tracking-wide">
              Effortlessly handle Tasks and Teams{" "}
              <GradientText>with Almonds.</GradientText>
            </h1>
            <section className="my-4 md:leading-8">
              <p className="text-[#86868b] poppins text-justify pr-8">
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
            <AlmondFeatureCard
              title="Efficiency"
              IconComponent={GraphIcon}
              titleColor="#ffa595"
              description="Keep that organizational beat steady and keep an eagle eye on progress to make sure you hit those task goals on time and nail that awesome outcome!ess with ease, ensuring timely completion of tasks."
            />
            <AlmondFeatureCard
              title="Collaboration"
              IconComponent={GitBranch}
              titleColor="#f3c259"
              description="Creating your dream team, passing out tasks, and chatting up a storm are key moves in hitting that sweet success spot as a team!"
            />
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
          className="basis-1/2"
        >
          <CardContainer>
            <img src={Colaboration} alt="img-colab" className="rounded-lg" />
          </CardContainer>
        </motion.div>
      </div>
    </main>
  );
};

export const AlmondFeatureCard = ({
  title,
  description,
  titleColor,
  IconComponent,
}: {
  title: string;
  description: string;
  titleColor: string;
  IconComponent: ({ strokeColor }: { strokeColor: string }) => JSX.Element;
}) => {
  return (
    <div
      key={title}
      className="bg-[#101010] p-4 rounded-lg basis-1/2 flex flex-col gap-4"
    >
      <div className="flex justify-between">
        <p className={`poppins font-semibold text-lg text-[${titleColor}] `}>
          {title}
        </p>
        <IconComponent strokeColor={titleColor} />
      </div>
      <p className={`selection:text-[${titleColor}]`}>{description}</p>
    </div>
  );
};

const GradientText = styled.span`
  background: linear-gradient(220.55deg, #5d85a6 0%, #0e2c5e 100%);
  -webkit-background-clip: text;
  background-clip: text;
  font-family: "Sintony", sans-serif;
  -webkit-text-fill-color: transparent;
  display: inline-block; /* Ensures gradient applies properly */
`;
