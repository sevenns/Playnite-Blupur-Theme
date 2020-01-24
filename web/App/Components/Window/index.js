import styled from 'vue-styled-components';

import StylesHelper from '$Helpers/StylesHelper';
import TopBar from '$Components/Window/TopBar';
import Content from '$Components/Window/Content';
import PlayButton from '$Components/Window/PlayButton';

const WindowStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  min-height: 500px;
  min-width: 768;
  width: 85vw;
  height: 40vh;
  color: ${StylesHelper.colors.Text};
  background: ${StylesHelper.colors.MainWindowBackground};
  border: 1px solid ${StylesHelper.colors.MainWindowBorders};
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
  margin-bottom: -50px;
`;

export default {
  components: { Content, PlayButton },

  props: {
    logo: { type: String }
  },

  render(h) {
    return (
      <WindowStyles>
        <TopBar logo={this.$props.logo}></TopBar>
        <Content>
          <PlayButton>Play</PlayButton>
        </Content>
      </WindowStyles>
    );
  }
};
