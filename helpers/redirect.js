import Router from 'next/router';

export default (context = {}, target, next) => {
  const { isServer, req, res } = context.ctx
  if (isServer) {
    res.writeHead(303, { Location: `/${target}${next ? `?next=${req.originalUrl}`: ''}` })
    res.end()
  } else {
    Router.push(`/${target}${next ? `?next=${context.asPath}`: ''}`)
  }
};
