import PieChartDemo from "@/components/chart-demo/PieChartDemo";
import LineChartDemo from "@/components/line-chart-demo/LineChartDemo";

export default function Home() {
  return (
    <main className="px-6 py-4">
      <div className="flex flex-col gap-8 md:gap-0 md:flex-row justify-between items-center">
        <PieChartDemo />
        <LineChartDemo />
      </div>
    </main>
  );
}
