export default function WaveDivider({ flip = false, className = "" }) {
  return (
    <svg
      className={className + (flip ? " rotate-180" : "")}
      viewBox="0 0 1440 320"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M0,192L60,202.7C120,213,240,235,360,229.3C480,224,600,192,720,181.3C840,171,960,181,1080,202.7C1200,224,1320,256,1380,272L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
      ></path>
    </svg>
  );
}

export function WaveDividerMoreWaves({ flip = false, className = "" }) {
  return (
    <svg
      className={className + (flip ? " rotate-180" : "")}
      viewBox="0 0 1440 320"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M0,160L48,144C96,128,192,96,288,117.3C384,139,480,213,576,224C672,235,768,181,864,154.7C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
  );
}
