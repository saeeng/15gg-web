import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
const Comment = () => {
  const [userName, setUserName] = useState<string>('');
  const router = useRouter();
  const smnName: string = router.query['smnName'] as string;
  const smnNameRegex = /(?<=userName=).*/;
  useEffect(() => {
    // 브라우저 API를 이용하여 문서 타이틀을 업데이트합니다.
    if (smnName) {
      const userNameMathces = smnName.match(smnNameRegex);
      console.log(userNameMathces);
      setUserName(userNameMathces[0]);
      console.log(`You clicked ${smnName} times`);
    }
  });
  return (
    <>
      d<h1>smnName: {userName}</h1>
    </>
  );
};

export default Comment;
