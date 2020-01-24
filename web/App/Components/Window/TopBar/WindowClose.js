import styled from 'vue-styled-components';

import Icon from '$Components/Icon';
import StylesHelper from '$Helpers/StylesHelper';

const WindowCloseStyles = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default {
  functional: true,

  render(h, { props }) {
    return (
      <WindowCloseStyles>
        <Icon name='close' width='18px' color={StylesHelper.colors.Text} />
      </WindowCloseStyles>
    );
  }
};
