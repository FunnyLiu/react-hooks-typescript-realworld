import React from 'react';
// 一个简单的ul li
export default function ArticleTags({ tagList }: { tagList: string[] }) {
  return (
    <ul className="tag-list">
      {tagList.map((tag) => (
        <li className="tag-default tag-pill tag-outline" key={tag}>
          {tag}
        </li>
      ))}
    </ul>
  );
}
