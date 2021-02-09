import Link from 'next/link';

const TagList = ({tags}) => (
  <div className="text-lg text-blue-600">
    {tags.map(t => (
      <Link key={t.slug} href={`/${t.slug}`}>
        <a >#{t.slug} </a>
      </Link>
    ))}
  </div>
);

export default TagList;