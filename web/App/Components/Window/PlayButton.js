import styled from 'vue-styled-components';
import StylesHelper from '$Helpers/StylesHelper';

const PlayButtonStyles = styled.button`
  cursor: pointer;
  outline: none;
  font-size: 1rem;
  letter-spacing: 1px;
  min-height: 40px;
  padding: 10px;
  min-width: 150px;
  color: ${StylesHelper.colors.ActiveElements};
  background: ${StylesHelper.colors.AccentActiveElements};
  border: 2px solid ${StylesHelper.colors.ActiveElements};
  border-radius: ${StylesHelper.borderRadius};
  box-shadow: 0 0 50px ${() => {
    const rgba = StylesHelper.hexToRgb(
      StylesHelper.colors.AccentActiveElements,
      0.5
    );

    return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;
  }};
  transition: box-shadow 0.5s ease;

  &:hover {
    box-shadow: 0 0 25px ${() => {
      const rgba = StylesHelper.hexToRgb(
        StylesHelper.colors.AccentActiveElements,
        0.85
      );

      return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;
    }};
  }
`;

export default {
  render(h) {
    return <PlayButtonStyles>{this.$slots.default}</PlayButtonStyles>;
  }
};
