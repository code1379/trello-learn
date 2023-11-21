# 这里并没有把 ClerkProvider 直接导入到 RootLayout

- 在使用的界面使用 ClerkProvider
- 没有在 RootLayout 上包裹 ClerkProvider

原因：

1. 因为 marketing 不需要登录就可以查看

## [文档](https://clerk.com/docs/quickstarts/nextjs)

### [自定义登录、注册](https://clerk.com/docs/references/nextjs/custom-signup-signin-pages)
