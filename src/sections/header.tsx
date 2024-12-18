import { HiOutlineInformationCircle } from "react-icons/hi";

export const Header = () => {
  return (
    <section className="py-7">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex size-6 flex-col justify-around">
            <div className="h-0.5 w-5 bg-foreground/75"></div>
            <div className="h-0.5 w-5 bg-foreground/75"></div>
            <div className="h-0.5 w-5 bg-foreground/75"></div>
          </div>
          <h2 className="text-2xl font-bold tracking-tight">Create a Song</h2>
          <div className="flex size-10 items-center justify-center rounded-full border border-primary">
            <HiOutlineInformationCircle className="size-5" />
          </div>
        </div>
      </div>
    </section>
  );
};
