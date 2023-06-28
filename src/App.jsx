import CardPage from "./components/ViteCard";
import Btn from "./components/Button";

export default function App() {
  return (
    <>
      <div className="todo">
        <div className="container">
          <div>
            <h1>
              <span className="vite">Vite</span>
            </h1>
            <h2>Next Generation Frontend Tooling</h2>
            <p className="parrafo">
              Get ready for a development environment that can finally catch up
              with you.
            </p>
          </div>
          <div className="resplandor"></div>
          <span className="contImg">
            <img src="https://vitejs.dev/logo-with-shadow.png" alt="" />
          </span>
        </div>
        <div className="btn">
          <Btn value="Get Star" />
          <Btn value="Why Vite" />
          <Btn value="View on GitHub" />
        </div>

        <div className="listCard">
          <article className="card">
            <div className="icon">💡</div>
            <CardPage
              title="Instant Server Start"
              content="On demand file serving over native ESM, no bundling required!"
            />
          </article>
          <article className="card">
            <div className="icon">⚡️</div>
            <CardPage
              title="Lightning Fast HMR"
              content="Hot Module Replacement (HMR) that stays fast regardless of app size."
            />
          </article>
          <article className="card">
            <div className="icon">🛠️</div>
            <CardPage
              title="Rich Features"
              content="Out-of-the-box support for TypeScript, JSX, CSS and more."
            />
          </article>
          <article className="card">
            <div className="icon">📦</div>
            <CardPage
              title="Optimized Build"
              content="Pre-configured Rollup build with multi-page and library mode support."
            />
          </article>
          <article className="card">
            <div className="icon">🔩</div>
            <CardPage
              title="Universal Plugins"
              content="Rollup-superset plugin interface shared between dev and build."
            />
          </article>
          <article className="card">
            <div className="icon">🔑</div>
            <CardPage
              title="Fully Typed APIs"
              content="Flexible programmatic APIs with full TypeScript typing."
            />
          </article>
        </div>
      </div>
    </>
  );
}
