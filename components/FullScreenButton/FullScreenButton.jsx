const FullScreenButton = ({enabled, onClick}) => (
  enabled ?
    <svg onClick={onClick} height="24" width="24" viewBox="0 0 32 32">
      <path d="M32,3l-7,7h5v4H18V2h4V7l7-7ZM3,32l7-7v5h4V18H2v4H7L0,29Z"></path>
    </svg>
  :
    <svg onClick={onClick} height="24" width="24" viewBox="0 0 32 32">
      <path d="M15,20,7,28h5v4H0V20H4v5l8-8Zm5-5,8-8v5h4V0H20V4h5l-8,8Z"></path>
    </svg>
);

export default FullScreenButton;