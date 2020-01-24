import App from '$Components/App';
import Heading from '$Components/Heading';
import Window from '$Root/App/Components/Window';

export default {
  data: () => ({}),

  render (h) {
    return (
      <App>
        <Heading>Playnite Blupur Theme - Customizer</Heading>
        <Window logo='/images/applogo.png'></Window>
      </App>
    );
  }
};
