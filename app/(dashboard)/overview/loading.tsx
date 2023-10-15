import Loader from '@/components/Loader/Loader';

const Loading = () => {
  return (
    <Loader
      width={300}
      height={300}
      wrapperClass="w-full h-full flex justify-center items-center"
    />
  );
};

export default Loading;
