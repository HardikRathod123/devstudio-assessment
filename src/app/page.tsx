import { ControlsTab } from "@/components/controls-tab";
import { TabItem, Tabs } from "@/components/tabs";
import { Header } from "@/sections/header";

export default function Home() {
  const tabs: TabItem[] = [
    { label: "Controls", value: "controls", content: <ControlsTab /> },
    { label: "Artist", value: "artist", content: <div>tab2</div> },
    { label: "Genre", value: "genre", content: <div>tab3</div> },
  ];

  return (
    <div className="container">
      <Header />
      <Tabs tabs={tabs} defaultValue="controls" />
    </div>
  );
}
