import Router from 'next/router';

export default (context = {}, target) => {
  const { isServer, req, res } = context.ctx
  let next
  if (isServer) {
    next = req && req.originalUrl
    res.writeHead(303, { Location: `/${target}${(next && next.length) ? `?next=${next}` : ''}` })
    res.end()
  } else {
    next = context && context.asPath
    Router.push(`/${target}${(next && next.length) ? `?next=${next}` : ''}`)
  }
};
