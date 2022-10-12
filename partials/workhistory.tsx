import Card from "components/cards";

const history = [
  {
    company: "Rural Sourcing Inc.",
    position: "Senior I",
    date: "Current",
    desc: `During my time at RSI, I have lead teams in replatforming as-well-as refactoring / re-arcitecting efforts, helping clients to realize, reach & even surpass their performance & cost goals. \n \n As a senior team member I also participate in & lead many of our Agile ceremonies. As a mentor I help junior team members with career growth objectives while ensuring they can meet client needs.`,
  },
  {
    company: "FluentStream",
    position: "Developer II",
    date: "2021 - 2021",
    desc: `While at FluentStream my primary focus was to reduce technical debt by migrating legacy systems using TypeScript onto AWS as a replatforming effort in order to pave the way for an entire application & infrastructure overhaul.`,
  },
  {
    company: "ICSolutions",
    position: "Software Engineer",
    date: "2015 - 2021",
    desc: `At ICSolutions I maintained & improved upon the "Enforcer" ICSolutions' cheif telecom IP, as well as created the ERTS devtools used by engineering & helpdesk alike.`,
  },
];
const WorkHistory = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 lg:px-8 text-neutral-300 mb-24">
      <h2 id="experience" className="text-3xl font-bold mb-4">
        <span className="text-white">Work </span>
        <span className="text-transparent bg-gradient-to-r from-emerald-400 to-emerald-700 bg-clip-text">
          Experience
        </span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {history.map((employer, index) => (
          <Card key={index} className={index <= 0 ? "md:col-span-2" : ""}>
            <h3 className="text-2xl font-bold text-white">
              {employer.company}
            </h3>
            <h4 className="font-bold text-transparent bg-gradient-to-r from-emerald-400 to-emerald-700 bg-clip-text mb-2">
              {employer.position}{" "}
              <small className="text-white">{employer.date}</small>
            </h4>
            {employer.desc.split("\n").map((str, index) => (
              <p key={str} className={index >= 1 ? "mt-3" : ""}>
                {str}
              </p>
            ))}
          </Card>
        ))}
      </div>
    </section>
  );
};

export default WorkHistory;
