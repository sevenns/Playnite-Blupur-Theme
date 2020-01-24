import styled from 'vue-styled-components';

const AppLogoStyles = styled.div`
  width: 40px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AppLogoImg = styled.img`
  width: 100%;
`;

export default {
  functional: true,

  render(h, { props }) {
    return (
      <AppLogoStyles>
        {props.src && <AppLogoImg src={props.src} />}
      </AppLogoStyles>
    );
  }
};
