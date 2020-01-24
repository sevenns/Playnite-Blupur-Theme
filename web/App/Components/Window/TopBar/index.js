import styled from 'vue-styled-components';

import AppLogo from './AppLogo';
import WindowClose from './WindowClose';

const TopBarStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  padding-left: 10px;
`;

export default {
  props: {
    logo: { type: String }
  },

  render(h) {
    return (
      <TopBarStyles>
        <AppLogo src={this.$props.logo} />
        <WindowClose />
      </TopBarStyles>
    );
  }
};
