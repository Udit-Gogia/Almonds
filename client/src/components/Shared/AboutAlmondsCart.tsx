import { Card, CardTitle } from "../ui/card";

export const AboutAlmondsCard = ({
  title,
  imgLocation,
}: {
  title: string;
  imgLocation: string;
}) => {
  return (
    <Card
      className="bg-black p-4 h-full "
      style={{
        borderStyle: "dotted",
        borderWidth: 2,
        borderColor: "rgb(47 48 55)",
      }}
    >
      <img src={imgLocation} alt="card-image" className="rounded-lg " />
      <CardTitle className="text-white leading-8">{title}</CardTitle>
    </Card>
  );
};
