# ![RealWorld Example App](logo.png)


# 源码分析

## 文件结构

``` bash
/Users/liufang/openSource/FunnyLiu/react-hooks-typescript-realworld
├── src
|  ├── api
|  |  ├── APIUtils.ts
|  |  ├── ArticlesAPI.ts
|  |  ├── AuthAPI.ts
|  |  ├── CommentsAPI.ts
|  |  ├── ProfileAPI.ts
|  |  └── TagsAPI.ts
|  ├── components
|  |  ├── App.tsx
|  |  ├── Article
|  |  |  ├── ArticleActions.tsx
|  |  |  ├── ArticleMeta.tsx
|  |  |  ├── Comment.tsx
|  |  |  ├── CommentContainer.tsx
|  |  |  ├── CommentInput.tsx
|  |  |  ├── DeleteButton.tsx
|  |  |  └── index.tsx
|  |  ├── ArticleList.tsx
|  |  ├── ArticlePreview.tsx
|  |  ├── Editor.tsx
|  |  ├── Header.tsx
|  |  ├── Home
|  |  |  ├── Banner.tsx
|  |  |  ├── MainView.tsx
|  |  |  ├── Tags.tsx
|  |  |  └── index.tsx
|  |  ├── ListPagination.tsx
|  |  ├── Login.tsx
|  |  ├── PrivateRoute.tsx
|  |  ├── Profile.tsx
|  |  ├── ProfileArticles.tsx
|  |  ├── Register.tsx
|  |  ├── Settings.tsx
|  |  └── common
|  |     ├── ArticleAvatar.tsx
|  |     ├── ArticleTags.tsx
|  |     ├── FavoriteButton.tsx
|  |     ├── FollowUserButton.tsx
|  |     ├── ListErrors.tsx
|  |     └── TabList.tsx
|  ├── context
|  |  ├── articles.tsx
|  |  └── auth.tsx
|  ├── index.css
|  ├── index.tsx
|  ├── react-app-env.d.ts
|  ├── reducers
|  |  ├── article.tsx
|  |  ├── articleList.tsx
|  |  ├── auth.tsx
|  |  └── editor.tsx
|  ├── types
|  |  └── index.ts
|  └── utils.ts
├── tsconfig.json
└── yarn.lock

directory: 15 file: 59

ignored

```

## 外部模块依赖

请在： http://npm.broofa.com?q=react-hooks-typescript-realworld 查看

## 内部模块依赖

![img](./inner.svg)
  


> ### React Hooks + Typescript codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the [RealWorld](https://github.com/gothinkster/realworld) spec and API.

### [Demo](https://github.com/gothinkster/realworld)&nbsp;&nbsp;&nbsp;&nbsp;[RealWorld](https://github.com/gothinkster/realworld)

This codebase was created to demonstrate a fully fledged fullstack application built with **React Hooks** and **Typescript** including CRUD operations, authentication, routing, pagination, and more.

We've gone to great lengths to adhere to the **React Hooks** and **Typescript** community styleguides & best practices.

For more information on how to this works with other frontends/backends, head over to the [RealWorld](https://github.com/gothinkster/realworld) repo.

# How it works

> Describe the general architecture of your app here

# Todos

- [ ] Testing
- [ ] Improve Accessibility

# Getting started

```bash
# Clone the reposiory
git clone https://github.com/haythemchagwey/react-hooks-typescript-realworld.git
# Cd into the folder
cd react-hooks-typescript-realworld
# Install the dependencies
yarn install
# Run the development server
yarn start
```
