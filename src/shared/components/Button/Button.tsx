import { Pressable, StyleSheet, Text } from "react-native";

type ButtonProps = {
  title: string,
  variant?: 'buttonVariant',
  size?: 'ButtonSize',
};

const Button = ({
  title,
  variant,
  size,
  ...rest
}: ButtonProps) => {
  return (
    <Pressable style={[
      styles.base,
    ]}
      {...rest}
    >
      <Text>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  base: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
