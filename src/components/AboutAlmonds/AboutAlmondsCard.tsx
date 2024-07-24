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
      className={`bg-[#101010] p-4 rounded-lg basis-1/2 flex flex-col gap-4 `}
    >
      <div className="flex justify-between">
        <p className={`poppins font-semibold text-lg text-[${titleColor}] `}>
          {title}
        </p>
        <IconComponent strokeColor={titleColor} />
      </div>
      <p className={`selection:text-[${titleColor}] text-[#FBFBFB]`}>
        {description}
      </p>
    </div>
  );
};
