import React from 'react';
import { IProfile } from '../../types';

type FollowUserButtonProps = {
  profile: IProfile;
  onClick: () => void;
  loading: boolean;
};
// 关注组件
export default function FollowUserButton({
  profile,
  onClick,
  loading,
}: FollowUserButtonProps) {
  const classNames = ['btn', 'btn-sm', 'action-btn'];
  let text = '';
  // 样式操作和组件内的简单文案显示逻辑
  if (profile.following) {
    classNames.push('btn-secondary');
    text += `Unfollow ${profile.username}`;
  } else {
    classNames.push('btn-outline-secondary');
    text += `Follow ${profile.username}`;
  }

  return (
    <button
      className={classNames.join(' ')}
      onClick={onClick}
      disabled={loading}
    >
      <i className="ion-plus-round" />
      &nbsp;
      {text}
    </button>
  );
}
