import { Button } from "@/components/button";
import { Header } from "@/sections/header";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <Button variant="secondary">Hello</Button>
    </div>
  );
}
