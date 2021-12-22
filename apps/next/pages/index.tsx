import { Button } from "ui";
import custom from "custom";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Button />
      <p>{JSON.stringify(custom)}</p>
    </div>
  );
}
