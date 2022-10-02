const CardWindow = ({ children }: Props): JSX.Element => {
  return (
    <div className="flex h-[320px] w-[560px] flex-col items-center justify-center rounded-2xl bg-hsl-yellow shadow-inner-md">
      {children}
    </div>
  );
};

interface Props {
  children: JSX.Element | JSX.Element[] | undefined;
}

export default CardWindow;
