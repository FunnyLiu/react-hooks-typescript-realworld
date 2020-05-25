import React from 'react';
import { IArticle } from '../../types';
import { ArticleAction } from '../../reducers/article';
import { ArticleListAction } from '../../reducers/articleList';
import { favoriteArticle, unfavoriteArticle } from '../../api/ArticlesAPI';

type FavoriteButtonProps = {
  article: IArticle;
  dispatch: React.Dispatch<ArticleAction & ArticleListAction>;
  children: React.ReactNode;
};

export default function FavoriteButton({
  article,
  dispatch,
  // 子内容
  children,
}: FavoriteButtonProps) {
  // loading状态
  const [loading, setLoading] = React.useState(false);
  // click后的异步逻辑      
  const handleClick = async () => {
    setLoading(true);
    if (article.favorited) {
      const payload = await unfavoriteArticle(article.slug);
      dispatch({
        type: 'ARTICLE_UNFAVORITED',
        payload: payload.data,
      });
    } else {
      const payload = await favoriteArticle(article.slug);
      dispatch({
        type: 'ARTICLE_FAVORITED',
        payload: payload.data,
      });
    }
    setLoading(false);
  };
  // 通过className来控制样式的显示与否
  const classNames = ['btn', 'btn-sm'];

  if (article.favorited) {
    classNames.push('btn-primary');
  } else {
    classNames.push('btn-outline-primary');
  }

  return (
    <button
      className={classNames.join(' ')}
      onClick={handleClick}
      disabled={loading}
    >
      <i className="ion-heart" />
      &nbsp;
      {/* 字内容透传 */}
      {children}
    </button>
  );
}
