import Input from '../Input';
import '../styles/inputs.css';

const InputComponent = () => {
  return (
    <>
      <h1>Input</h1>
      <div className="component-container grid-cols-3">
        <div>
          <p>{'<Input />'}</p>
          <Input />
        </div>
        <div>
          <p>{'&:hover'}</p>
          <Input inputClassName="hover" />
        </div>
        <div>
          <p>{'&:focus'}</p>
          <Input inputClassName="focus" />
        </div>
      </div>
      <div className="component-container grid-cols-3">
        <div>
          <p>{'<Input error />'}</p>
          <Input error />
        </div>
        <div>
          <p>{'&:hover'}</p>
          <Input inputClassName="hover" />
        </div>
        <div>
          <p>{'&:focus'}</p>
          <Input error />
        </div>
      </div>
      <div className="component-container grid-cols-1">
        <div>
          <p>{'<Input disabled />'}</p>
          <Input disabled />
        </div>
      </div>
      <div className="component-container">
        <div>
          <p>{'<Input helperText="Some interesting text" />'}</p>
          <Input helperText="Some interesting text" />
        </div>
        <div>
          <p>{'<Input helperText="Some interesting text" error />'}</p>
          <Input helperText="Some interesting text" error />
        </div>
      </div>
      <div className="component-container">
        <div>
          <p>{'<Input startIcon />'}</p>
          <Input startIcon="phone" />
        </div>
        <div>
          <p>{'<Input endIcon />'}</p>
          <Input endIcon="lock" />
        </div>
      </div>
      <div className="component-container grid-cols-1">
        <div>
          <p>{'<Input value="Text" />'}</p>
          <Input value="Text" />
        </div>
      </div>
      <div className="component-container">
        <div>
          <p>{'<Input size="sm" />'}</p>
          <Input size="sm" />
        </div>
        <div>
          <p>{'<Input size="md" />'}</p>
          <Input size="md" />
        </div>
      </div>
      <div className="component-container grid-cols-1">
        <div>
          <p>{'<Input fullWidth />'}</p>
          <Input fullWidth />
        </div>
      </div>
      <div className="component-container grid-cols-1">
        <div>
          <p>{'<Input multiline rows="4" />'}</p>
          <Input multiline rows={4} />
        </div>
      </div>
    </>
  );
};

export default InputComponent;
