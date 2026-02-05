export const getImagePath = (src: string) => {
  const repoName = "/data-overflow-website";

  return process.env.NODE_ENV === "production" ? `${repoName}${src}` : src;
};
