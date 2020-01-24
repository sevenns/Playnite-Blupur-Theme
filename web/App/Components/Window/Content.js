import styled from 'vue-styled-components';

const ContentStyles = styled.div`
  text-align: center;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100% - 50px);
`;

export default {
  render(h) {
    return (
      <ContentStyles>
        {this.$slots.default}
      </ContentStyles>
    );
  }
};
