import { FormInputLabel, Group, Input } from "./form-input.styles.js";
const FromInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel htmlFor="" shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};
export default FromInput;
