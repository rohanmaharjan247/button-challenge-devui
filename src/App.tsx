import Button from './component/Button';

function App() {
  return (
    <div className="app">
      <h1>Button</h1>
      <div className="button-container">
        <div>
          <p className="btn-header">{`<Button />`}</p>
          <Button />
        </div>
        <div>
          <p className="btn-header btn-text">{`&:hover, &:focus`}</p>
          <Button className="btn-hover" />
        </div>
      </div>
      <div className="button-container">
        <div>
          <p className="btn-header">{`<Button variant="outline" />`}</p>
          <Button variant="outline" />
        </div>
        <div>
          <p className="btn-header btn-text">{`&:hover, &:focus`}</p>
          <Button variant="outline" className="hover" />
        </div>
      </div>
      <div className="button-container">
        <div>
          <p className="btn-header">{`<Button variant="text" />`}</p>
          <Button variant="text" />
        </div>
        <div>
          <p className="btn-header btn-text">{`&:hover, &:focus`}</p>
          <Button variant="text" className="hover" />
        </div>
      </div>
      <div className="button-container">
        <div>
          <p className="btn-header">{`<Button disableShadow />`}</p>
          <Button disableShadow />
        </div>
      </div>
      <div className="button-container">
        <div>
          <p className="btn-header">{`<Button disabled />`}</p>
          <Button disabled text="Disabled" />
        </div>
        <div>
          <p className="btn-header">{`<Button variant="text disabled />`}</p>
          <Button variant="text" text="Disabled" disabled />
        </div>
      </div>
      <div className="button-container">
        <div>
          <p className="btn-header">{`<Button startIcon="add_shopping_cart" />`}</p>
          <Button startIcon="add_shopping_cart" color="primary" />
        </div>
        <div>
          <p className="btn-header">{`<Button endIcon="add_shopping_cart" />`}</p>
          <Button endIcon="storefront" color="primary" />
        </div>
      </div>
      <div className="button-container grid-cols-3">
        <div>
          <p className="btn-header">{`<Button size="sm" />`}</p>
          <Button size="sm" color="primary" />
        </div>
        <div>
          <p className="btn-header">{`<Button size="md" />`}</p>
          <Button size="md" color="primary" />
        </div>
        <div>
          <p className="btn-header">{`<Button size="lg" />`}</p>
          <Button size="lg" color="primary" />
        </div>
      </div>
      <div className="button-container grid-cols-4">
        <div>
          <p className="btn-header">{`<Button color="default" />`}</p>
          <Button color="default" />
        </div>
        <div>
          <p className="btn-header">{`<Button color="primary" />`}</p>
          <Button color="primary" />
        </div>
        <div>
          <p className="btn-header">{`<Button color="secondary" />`}</p>
          <Button color="secondary" text="Secondary" />
        </div>
        <div>
          <p className="btn-header">{`<Button color="danger" />`}</p>
          <Button color="danger" text="Danger" />
        </div>
      </div>
      <div>
        <p className="btn-header">{`&:hover, &:focus`}</p>
        <div className="button-container grid-cols-4">
          <div>
            <Button color="default" className="btn-hover" />
          </div>
          <div>
            <Button color="primary" className="btn-primary-hover" />
          </div>
          <div>
            <Button
              color="secondary"
              text="Secondary"
              className="btn-secondary-hover"
            />
          </div>
          <div>
            <Button color="danger" text="Danger" className="btn-danger-hover" />
          </div>
        </div>
      </div>
      <p className="footer">
        Created By:{' '}
        <a
          href="https://devchallenges.io/portfolio/rohanmaharjan247"
          target="_blank"
        >
          @rohanmaharjan247
        </a>{' '}
        - devChallenges.io
      </p>
    </div>
  );
}

export default App;
