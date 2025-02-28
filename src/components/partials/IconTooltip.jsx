
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import PropTypes from 'prop-types';


const IconTooltip = ({ icon: Icon, text , size}) => {
  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip>{text}</Tooltip>}
    >
      <div style={{ display: "inline-block", cursor: "pointer", margin: "0 8px" }}>
        <Icon size={size} />
      </div>
    </OverlayTrigger>
  );
};
IconTooltip.propTypes = {
  icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default IconTooltip;

