import { checkDevMode } from '../../lib/helper';

const DevArea = () => {
  if (checkDevMode()) {
    return <strong>🛠️ 아직 개발 중..</strong>;
  }
  return <></>;
};

export default DevArea;
