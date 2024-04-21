import { getStatsAction } from "@/utils/actions";

const StatsPage = async () => {
  const stats = await getStatsAction();
  console.log(stats);
  return <h1 className="text-4xl">StatsPage</h1>;
};

export default StatsPage;
