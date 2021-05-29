import React from 'react';
import { useRouter } from 'next/router';

const Name: React.FC = () => {
  const router = useRouter();
  console.log(router.query);
  const { name } = router.query;
  return <h1>送られてきたパラメータ name は、 {name} です！</h1>;
};

export default Name;
