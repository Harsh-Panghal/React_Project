import moreIcon from '../assets/more-icon.svg';

function MoreSection() {
  return (
    <div className="more">
      <img src={moreIcon} alt="More" className="moreicon" />
      <span>More</span>
    </div>
  );
}

export default MoreSection;
// This component serves as a section in the sidebar for additional options.
// It includes an icon representing more options and a label, enhancing the user interface and navigation experience.