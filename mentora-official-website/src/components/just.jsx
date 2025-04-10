import PricingComparison from './components/PricingComparison';


const App = () => (
    <Router>
      <Routes>
        <Route path="/pricing-comparison" element={<PricingComparison />} />
      </Routes>
    </Router>
  );