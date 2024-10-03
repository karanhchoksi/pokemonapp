"use client";

import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Breadcrumb() {
  const router = useRouter();
  const pathSegments = router.asPath.split('/').filter(Boolean);
  
  return (
    <nav className="mb-4">
      {pathSegments.map((segment, index) => (
        <span key={index}>
          <Link href={`/${pathSegments.slice(0, index + 1).join('/')}`} className="text-blue-500">
            {segment}
          </Link>
          {index < pathSegments.length - 1 && ' → '}
        </span>
      ))}
    </nav>
  );
}

