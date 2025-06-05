import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/carol-soares-blog/blog',
    component: ComponentCreator('/carol-soares-blog/blog', '9a0'),
    exact: true
  },
  {
    path: '/carol-soares-blog/blog/archive',
    component: ComponentCreator('/carol-soares-blog/blog/archive', 'f96'),
    exact: true
  },
  {
    path: '/carol-soares-blog/blog/authors',
    component: ComponentCreator('/carol-soares-blog/blog/authors', '28f'),
    exact: true
  },
  {
    path: '/carol-soares-blog/blog/authors/carolsoares',
    component: ComponentCreator('/carol-soares-blog/blog/authors/carolsoares', '8d6'),
    exact: true
  },
  {
    path: '/carol-soares-blog/blog/dtc-conference',
    component: ComponentCreator('/carol-soares-blog/blog/dtc-conference', '7f0'),
    exact: true
  },
  {
    path: '/carol-soares-blog/blog/large-language-models-llm',
    component: ComponentCreator('/carol-soares-blog/blog/large-language-models-llm', 'f5b'),
    exact: true
  },
  {
    path: '/carol-soares-blog/blog/long-blog-post',
    component: ComponentCreator('/carol-soares-blog/blog/long-blog-post', '901'),
    exact: true
  },
  {
    path: '/carol-soares-blog/blog/mental-health-being-a-developer',
    component: ComponentCreator('/carol-soares-blog/blog/mental-health-being-a-developer', '428'),
    exact: true
  },
  {
    path: '/carol-soares-blog/blog/python-tips-fun-facts',
    component: ComponentCreator('/carol-soares-blog/blog/python-tips-fun-facts', '12a'),
    exact: true
  },
  {
    path: '/carol-soares-blog/blog/tags',
    component: ComponentCreator('/carol-soares-blog/blog/tags', '00a'),
    exact: true
  },
  {
    path: '/carol-soares-blog/blog/tags/ai',
    component: ComponentCreator('/carol-soares-blog/blog/tags/ai', '222'),
    exact: true
  },
  {
    path: '/carol-soares-blog/blog/tags/artificial-intelligence',
    component: ComponentCreator('/carol-soares-blog/blog/tags/artificial-intelligence', '240'),
    exact: true
  },
  {
    path: '/carol-soares-blog/blog/tags/career',
    component: ComponentCreator('/carol-soares-blog/blog/tags/career', '615'),
    exact: true
  },
  {
    path: '/carol-soares-blog/blog/tags/creativity',
    component: ComponentCreator('/carol-soares-blog/blog/tags/creativity', '81a'),
    exact: true
  },
  {
    path: '/carol-soares-blog/blog/tags/future',
    component: ComponentCreator('/carol-soares-blog/blog/tags/future', 'b8e'),
    exact: true
  },
  {
    path: '/carol-soares-blog/blog/tags/generative-ai',
    component: ComponentCreator('/carol-soares-blog/blog/tags/generative-ai', '148'),
    exact: true
  },
  {
    path: '/carol-soares-blog/blog/tags/innovation',
    component: ComponentCreator('/carol-soares-blog/blog/tags/innovation', 'd9f'),
    exact: true
  },
  {
    path: '/carol-soares-blog/blog/tags/learnings',
    component: ComponentCreator('/carol-soares-blog/blog/tags/learnings', 'fb9'),
    exact: true
  },
  {
    path: '/carol-soares-blog/blog/tags/llm',
    component: ComponentCreator('/carol-soares-blog/blog/tags/llm', '0fe'),
    exact: true
  },
  {
    path: '/carol-soares-blog/blog/tags/machine-learning',
    component: ComponentCreator('/carol-soares-blog/blog/tags/machine-learning', '095'),
    exact: true
  },
  {
    path: '/carol-soares-blog/blog/tags/mental-health',
    component: ComponentCreator('/carol-soares-blog/blog/tags/mental-health', 'b2e'),
    exact: true
  },
  {
    path: '/carol-soares-blog/blog/tags/product-development',
    component: ComponentCreator('/carol-soares-blog/blog/tags/product-development', '684'),
    exact: true
  },
  {
    path: '/carol-soares-blog/blog/tags/python',
    component: ComponentCreator('/carol-soares-blog/blog/tags/python', 'bdd'),
    exact: true
  },
  {
    path: '/carol-soares-blog/blog/tags/research',
    component: ComponentCreator('/carol-soares-blog/blog/tags/research', 'e31'),
    exact: true
  },
  {
    path: '/carol-soares-blog/blog/tags/software-development',
    component: ComponentCreator('/carol-soares-blog/blog/tags/software-development', 'dcf'),
    exact: true
  },
  {
    path: '/carol-soares-blog/blog/tags/technology',
    component: ComponentCreator('/carol-soares-blog/blog/tags/technology', '213'),
    exact: true
  },
  {
    path: '/carol-soares-blog/blog/tags/tips',
    component: ComponentCreator('/carol-soares-blog/blog/tags/tips', '569'),
    exact: true
  },
  {
    path: '/carol-soares-blog/blog/tags/trends',
    component: ComponentCreator('/carol-soares-blog/blog/tags/trends', '58b'),
    exact: true
  },
  {
    path: '/carol-soares-blog/markdown-page',
    component: ComponentCreator('/carol-soares-blog/markdown-page', '099'),
    exact: true
  },
  {
    path: '/carol-soares-blog/resume/curriculo',
    component: ComponentCreator('/carol-soares-blog/resume/curriculo', 'ca7'),
    exact: true
  },
  {
    path: '/carol-soares-blog/docs',
    component: ComponentCreator('/carol-soares-blog/docs', '365'),
    routes: [
      {
        path: '/carol-soares-blog/docs',
        component: ComponentCreator('/carol-soares-blog/docs', '832'),
        routes: [
          {
            path: '/carol-soares-blog/docs',
            component: ComponentCreator('/carol-soares-blog/docs', '556'),
            routes: [
              {
                path: '/carol-soares-blog/docs/category/tutorial---basics',
                component: ComponentCreator('/carol-soares-blog/docs/category/tutorial---basics', '360'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/carol-soares-blog/docs/category/tutorial---extras',
                component: ComponentCreator('/carol-soares-blog/docs/category/tutorial---extras', 'c9c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/carol-soares-blog/docs/intro',
                component: ComponentCreator('/carol-soares-blog/docs/intro', '833'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/carol-soares-blog/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/carol-soares-blog/docs/tutorial-basics/congratulations', '52b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/carol-soares-blog/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/carol-soares-blog/docs/tutorial-basics/create-a-blog-post', '278'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/carol-soares-blog/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/carol-soares-blog/docs/tutorial-basics/create-a-document', '782'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/carol-soares-blog/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/carol-soares-blog/docs/tutorial-basics/create-a-page', '017'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/carol-soares-blog/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/carol-soares-blog/docs/tutorial-basics/deploy-your-site', '2a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/carol-soares-blog/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/carol-soares-blog/docs/tutorial-basics/markdown-features', 'e80'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/carol-soares-blog/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/carol-soares-blog/docs/tutorial-extras/manage-docs-versions', 'b70'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/carol-soares-blog/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/carol-soares-blog/docs/tutorial-extras/translate-your-site', '3f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/carol-soares-blog/',
    component: ComponentCreator('/carol-soares-blog/', '339'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
