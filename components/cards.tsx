// @ts-nocheck
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Card = ({ children, ...props }) => {
  return (
    <>
      <div
        className={
          "relative bg-neutral-800 rounded-2xl" + " " + props.className
        }
      >
        <div className="inset-x-[-50vw] -top-32 -bottom-48 [mask-image:linear-gradient(transparent,white,transparent)] lg:left-[calc(50%+14rem)] lg:right-0 lg:-top-32 lg:-bottom-32 lg:[mask-image:linear-gradient(white,white,transparent)]"></div>
        <div className="absolute -top-64 -right-64"></div>
        <div className="absolute -bottom-40 -right-44"></div>
        <div className="relative rounded-2xl bg-neutral-900/60 ring-1 ring-emerald/10 backdrop-blur h-full">
          <div className="absolute -top-px left-20 right-11 h-px bg-gradient-to-r from-emerald-300/10 via-emerald-300/70 to-emerald-300/10" />
          <div className="absolute -bottom-px left-11 right-20 h-px bg-gradient-to-r from-emerald-400/10 via-emerald-400 to-emerald-400/10" />
          <div className="p-4">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
