import { Link, routes } from '@redwoodjs/router'

const BoardPost = ({ post }) => {
  return (
    <article>
      <header>
        <h2>
          <Link to={routes.boardPost({ id: post.id })}>{post.title}</Link>
        </h2>
      </header>
      <div>{post.body}</div>
    </article>
  )
}

export default BoardPost
