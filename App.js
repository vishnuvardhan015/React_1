import Data from "./Data";
import Work from "./Work";

const App = () => {
  return (
    <section className="Main">
      {Data.map((eachObj) => {
        const { id, name, email, body } = eachObj;
        return <Work key={id} id={id} name={name} email={email} body={body} />;
      })}
    </section>
  );
};

export default App;
