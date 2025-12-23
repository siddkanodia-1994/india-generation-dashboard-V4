import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ElectricityDashboard from "./ElectricityDashboard";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 pt-6">
        {/* Top tabs */}
        <Tabs>
          <TabList className="flex flex-wrap gap-2 rounded-2xl bg-white p-2 ring-1 ring-slate-200">
            <Tab
              className="cursor-pointer select-none rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 outline-none hover:bg-slate-50"
              selectedClassName="bg-slate-900 text-white hover:bg-slate-900"
            >
              Generation
            </Tab>
            <Tab
              className="cursor-pointer select-none rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 outline-none hover:bg-slate-50"
              selectedClassName="bg-slate-900 text-white hover:bg-slate-900"
            >
              Demand
            </Tab>
            <Tab
              className="cursor-pointer select-none rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 outline-none hover:bg-slate-50"
              selectedClassName="bg-slate-900 text-white hover:bg-slate-900"
            >
              Supply
            </Tab>
          </TabList>

          <div className="mt-4">
            <TabPanel>
              <ElectricityDashboard
                type="generation"
                title="India Electricity Generation Dashboard"
                subtitle="Track daily all-India generation (units/MU) and view monthly totals, YoY% and MoM% growth."
                seriesLabel="Generation"
                unitLabel="units / MU"
                valueColumnKey="generation_gwh"
                defaultCsvPath="/data/generation.csv"
                enableAutoFetch={true}
              />
            </TabPanel>

            <TabPanel>
              <ElectricityDashboard
                type="demand"
                title="India Electricity Demand Dashboard"
                subtitle="Track daily all-India electricity demand (units/MU) and view monthly totals, YoY% and MoM% growth."
                seriesLabel="Demand"
                unitLabel="units / MU"
                valueColumnKey="demand_gwh"
                defaultCsvPath="/data/demand.csv"
                enableAutoFetch={false}
              />
            </TabPanel>

            <TabPanel>
              <ElectricityDashboard
                type="supply"
                title="India Electricity Supply Dashboard"
                subtitle="Track daily all-India electricity supply (units/MU) and view monthly totals, YoY% and MoM% growth."
                seriesLabel="Supply"
                unitLabel="units / MU"
                valueColumnKey="supply_gwh"
                defaultCsvPath="/data/supply.csv"
                enableAutoFetch={false}
              />
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
