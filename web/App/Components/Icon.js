import styled from 'vue-styled-components';

import Icons from './Icons';
import StylesHelper from '$Helpers/StylesHelper';
import UtilityHelper from '$Helpers/UtilityHelper';

const IconStyles = styled.div`
  display: flex;
  font-size: inherit;
  vertical-align: middle;
`;

const possibleIconNames = Object.values(Icons).map(i => i.name.toLowerCase());

export default {
  components: { IconStyles },

  props: {
    name: {
      type: String,
      required: true,
      validator: v => possibleIconNames.includes(v.toLowerCase())
    },

    color: {
      type: String,
      default: StylesHelper.colors.FictitiousHazel,
      validator: v => UtilityHelper.validateColor(v)
    },

    width: {
      type: String,
      default: '100%',
      validator: v => (/^[0-9]+(px|%)$/).test(v)
    },

    height: {
      type: String,
      default: '100%',
      validator: v => (/^[0-9]+(px|%)$/).test(v)
    }
  },

  render (h) {
    const Icon = Object.values(Icons).find(
      i => i.name.toLowerCase() === this.$props.name.toLowerCase()
    );

    return (
      <IconStyles>
        <Icon
          color={this.$props.color}
          width={this.$props.width}
          height={this.$props.height}
        />
      </IconStyles>
    );
  }
};
