import "./CircularButton.css";

export const CircularButton = ({ label }: { label: string }) => {
  return (
    <div id="container">
      <button className="learn-more">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text text-neutral-200 button-content tracking-wide font-normal ">
          {label}
        </span>
      </button>
    </div>
  );
};
