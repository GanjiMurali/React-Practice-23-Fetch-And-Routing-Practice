// Write your JS code here
import './index.css'

import {Component} from 'react'

class BlogItemDetails extends Component {
  state = {blogItemDetail: []}

  componentDidMount() {
    this.getDataFromApi()
  }

  getDataFromApi = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updatedData = {
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      id: data.id,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
    }

    this.setState({blogItemDetail: updatedData})
  }

  render() {
    const {blogItemDetail} = this.state
    const {author, avatarUrl, content, imageUrl, title} = blogItemDetail

    // console.log(isLoaderA)

    return (
      <div className="blog-info">
        <h1 className="blog-details-title">{title}</h1>
        <div className="author-details">
          <img className="author-pic" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>
        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    )
  }
}

export default BlogItemDetails
