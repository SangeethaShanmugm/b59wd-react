import { Counter } from "./Counter";

function ProfilePic({ name, pic }) {
  return (
    <div>
      <img src={pic} />
      <h3>{name}</h3>
      <Counter />
    </div>
  );
}
