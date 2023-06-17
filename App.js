/**
 * <div id="parent">
 *      <div id="child1">
 *          <h1> I'm H1 tag</h1>
 *      </div>
 *      <div id="child2">
 *          <h1> I'm H1 tag</h1>
 *      </div>
 * </div>
 */

// React.createElemt(tagName, {tagAttibute:"value"}, "text to be displayed");


const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm H1 tag."),
    React.createElement("h2", {}, "I'm H2 tag."),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm H1 tag."),
    React.createElement("h2", {}, "I'm H2 tag."),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
