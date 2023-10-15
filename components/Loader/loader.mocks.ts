import { PRIMARY_COLOR } from '../../constants/colors';
import { LoaderProps } from './Loader';

const base: LoaderProps = {
  wrapperClass: '',
  height: 100,
  width: 100,
  color: PRIMARY_COLOR,
  firstLineColor: PRIMARY_COLOR,
  middleLineColor: PRIMARY_COLOR,
  lastLineColor: PRIMARY_COLOR,
};

export const mockLoaderProps = {
  base,
};
