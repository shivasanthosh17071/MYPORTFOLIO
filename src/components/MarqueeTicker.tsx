const items =
  "MONGODB · EXPRESS · REACT · NODE.JS  · TYPESCRIPT · REST API · GRAPHQL · FREELANCE AVAILABLE · ";

const MarqueeTicker = () => {
  const repeated = items.repeat(4);

  return (
    <div className="w-full overflow-hidden border-y border-border py-4 bg-background">
      <div className="animate-marquee whitespace-nowrap flex">
        <span className="font-mono text-sm md:text-base text-primary tracking-[0.2em] uppercase">
          {repeated}
        </span>
        <span className="font-mono text-sm md:text-base text-primary tracking-[0.2em] uppercase">
          {repeated}
        </span>
      </div>
    </div>
  );
};

export default MarqueeTicker;
