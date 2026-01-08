import Counter from "./components/counter";
import LiquidGlassButton from "./components/LiquidGlassButton";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="glass-surface rounded-3xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            iOS 26 Liquid Glass UI
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Cam efekti ile içerik arka planıyla uyumlu bir derinlik ve yansıma hissi.
          </p>
          <Counter />
        </div>

        <div className="glass-surface rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Liquid Glass Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <LiquidGlassButton
              variant="primary"
              onClick={() => alert("Primary buton tıklandı!")}
            >
              Primary Button
            </LiquidGlassButton>
            <LiquidGlassButton
              variant="secondary"
              onClick={() => alert("Secondary buton tıklandı!")}
            >
              Secondary Button
            </LiquidGlassButton>
            <LiquidGlassButton
              variant="success"
              onClick={() => alert("Success buton tıklandı!")}
            >
              Success Button
            </LiquidGlassButton>
            <LiquidGlassButton
              variant="danger"
              onClick={() => alert("Danger buton tıklandı!")}
            >
              Danger Button
            </LiquidGlassButton>
            <LiquidGlassButton variant="primary" disabled>
              Disabled Button
            </LiquidGlassButton>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <LiquidGlassButton size="sm" variant="primary">
              Small Button
            </LiquidGlassButton>
            <LiquidGlassButton size="md" variant="primary">
              Medium Button
            </LiquidGlassButton>
            <LiquidGlassButton size="lg" variant="primary">
              Large Button
            </LiquidGlassButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
