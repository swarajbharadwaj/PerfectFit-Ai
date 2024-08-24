import { Link } from "react-router-dom";

const Logo = () => {
  const logoContainerStyle = {
    width: '100px', // Adjust to your desired width
    height: '100px', // Adjust to your desired height
    overflow: 'hidden', // Hides the overflow of the image
    display: 'flex',
    alignItems: 'center', // Centers image vertically
    justifyContent: 'center', // Centers image horizontally
  };

  const logoImgStyle = {
    width: 'auto', // Maintains aspect ratio
    height: '100%', // Adjust to fit container height
    objectFit: 'cover', // Ensures image covers the container
  };

  return (
    <Link to="/">
      <div style={logoContainerStyle}>
        <img
          src="https://images-platform.99static.com/lcpfwksmJ7KMG5V5kJKsHJDiyt4=/500x500/top/smart/99designs-contests-attachments/22/22099/attachment_22099036"
          alt="Logo"
          style={logoImgStyle}
        />
      </div>
    </Link>
  );
};

export default Logo;
