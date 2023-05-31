import { useRouter } from 'next/router';
 
export default function SubCategory() {
  const router = useRouter();
  return <p>Post: {router.query.slug}</p>;
}