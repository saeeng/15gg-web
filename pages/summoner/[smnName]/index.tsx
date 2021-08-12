import { useRouter } from 'next/router';

const Comment = () => {
  const router = useRouter();
  const { smnName } = router.query;

  return (
    <>
      d<h1>smnName: {smnName}</h1>
    </>
  );
};

export default Comment;
