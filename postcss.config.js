import postcssPixToRem from "postcss-pxtorem"

export default ({ env }) => {
  const isProd = env === "production"
  const plugins = []

  if (isProd) {
    plugins.push(
      postcssPixToRem({
        propList: ["*"],
        mediaQuery: true,
      })
    )
  }

  return {
    plugins,
  }
}
