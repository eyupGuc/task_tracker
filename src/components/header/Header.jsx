import FormDisabledInputExample from "./Form";
const Header = () => {
  return (
    <div>
      <h1>Task Tracker</h1>{" "}
      <button className="bg-danger text-light">Show Add Task Bar</button>
      <FormDisabledInputExample/>
    </div>
  );
};

export default Header;
