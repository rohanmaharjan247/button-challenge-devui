import Button from '../Button';
import '../styles/buttons.css';

const ButtonComponent = () => {
  return (
    <>
      <h1>Button</h1>
      <div className="component-container">
        <div>
          <p className="component-header">{`<Button />`}</p>
          <Button />
        </div>
        <div>
          <p className="component-header btn-text">{`&:hover, &:focus`}</p>
          <Button className="btn-hover" />
        </div>
      </div>
      <div className="component-container">
        <div>
          <p className="component-header">{`<Button variant="outline" />`}</p>
          <Button variant="outline" />
        </div>
        <div>
          <p className="component-header btn-text">{`&:hover, &:focus`}</p>
          <Button variant="outline" className="hover" />
        </div>
      </div>
      <div className="component-container">
        <div>
          <p className="component-header">{`<Button variant="text" />`}</p>
          <Button variant="text" />
        </div>
        <div>
          <p className="component-header btn-text">{`&:hover, &:focus`}</p>
          <Button variant="text" className="hover" />
        </div>
      </div>
      <div className="component-container">
        <div>
          <p className="component-header">{`<Button disableShadow />`}</p>
          <Button disableShadow />
        </div>
      </div>
      <div className="component-container">
        <div>
          <p className="component-header">{`<Button disabled />`}</p>
          <Button disabled text="Disabled" />
        </div>
        <div>
          <p className="component-header">{`<Button variant="text disabled />`}</p>
          <Button variant="text" text="Disabled" disabled />
        </div>
      </div>
      <div className="component-container">
        <div>
          <p className="component-header">{`<Button startIcon="add_shopping_cart" />`}</p>
          <Button startIcon="add_shopping_cart" color="primary" />
        </div>
        <div>
          <p className="component-header">{`<Button endIcon="add_shopping_cart" />`}</p>
          <Button endIcon="storefront" color="primary" />
        </div>
      </div>
      <div className="component-container grid-cols-3">
        <div>
          <p className="component-header">{`<Button size="sm" />`}</p>
          <Button size="sm" color="primary" />
        </div>
        <div>
          <p className="component-header">{`<Button size="md" />`}</p>
          <Button size="md" color="primary" />
        </div>
        <div>
          <p className="component-header">{`<Button size="lg" />`}</p>
          <Button size="lg" color="primary" />
        </div>
      </div>
      <div className="component-container grid-cols-4">
        <div>
          <p className="component-header">{`<Button color="default" />`}</p>
          <Button color="default" />
        </div>
        <div>
          <p className="component-header">{`<Button color="primary" />`}</p>
          <Button color="primary" />
        </div>
        <div>
          <p className="component-header">{`<Button color="secondary" />`}</p>
          <Button color="secondary" text="Secondary" />
        </div>
        <div>
          <p className="component-header">{`<Button color="danger" />`}</p>
          <Button color="danger" text="Danger" />
        </div>
      </div>
      <div>
        <p className="component-header">{`&:hover, &:focus`}</p>
        <div className="component-container grid-cols-4">
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
    </>
  );
};

export default ButtonComponent;
