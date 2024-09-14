import { motion } from "framer-motion";
import styled from "styled-components";
// import { GraphIcon } from "../../assets/Icons/graph-icon";
import { GitBranch } from "../../assets/Icons/git-branch";
import GraphIcon from "../../assets/Icons/graph-icon";
import Colaboration from "../../assets/Images/colab.png";
import { CardContainer } from "../../components/ui/3d-card";

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
            <h1 className="rubik text-3xl md:text-[3.25rem] font-bold lg:leading-[4rem] tracking-wide">
              Effortlessly handle Tasks and Teams{" "}
              <GradientText>with Almonds.</GradientText>
            </h1>
            <section className="my-4 md:leading-8 text-lg">
              <p className="text-primaryGray poppins text-justify pr-8">
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
            <div
              className={`bg-[#101010] p-4 rounded-lg basis-1/2 flex flex-col gap-4 `}
            >
              <div className="flex justify-between">
                <p className={`poppins font-semibold text-lg text-[#ffa595] `}>
                  Efficiency
                </p>
                <GraphIcon strokeColor={"#ffa595"} />
              </div>
              <p className={`selection:text-[#ffa595] text-primaryWhite`}>
                {
                  "Keep that organizational beat steady and keep an eagle eye on progress to make sure you hit those task goals on time and nail that awesome outcome!ess with ease, ensuring timely completion of tasks."
                }
              </p>
            </div>
            <div
              className={`bg-[#101010] p-4 rounded-lg basis-1/2 flex flex-col gap-4 `}
            >
              <div className="flex justify-between">
                <p className={`poppins font-semibold text-lg text-[#f3c259] `}>
                  Collaboration
                </p>
                <GitBranch strokeColor={"#f3c259"} />
              </div>
              <p className={`selection:text-[#f3c259] text-primaryWhite`}>
                Creating your dream team, passing out tasks, and chatting up a
                storm are key moves in hitting that sweet success spot as a
                team!
              </p>
            </div>
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
  background: linear-gradient(360deg, #0e2c5e 0%, #5d85a6 100%);
  -webkit-background-clip: text;
  background-clip: text;
  font-family: "Sintony", sans-serif;
  -webkit-text-fill-color: transparent;
  display: inline-block;
`;
