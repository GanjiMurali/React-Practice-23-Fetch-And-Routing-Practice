// Write your JS code here
import {Component} from 'react'
import './index.css'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blogData: [], isLoder: true}

  componentDidMount() {
    this.getBlogListData()
  }

  getBlogListData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    // console.log(data)
    const updatedData = data.map(eachItem => ({
      author: eachItem.author,
      avatarUrl: eachItem.avatar_url,
      id: eachItem.id,
      imageUrl: eachItem.image_url,
      title: eachItem.title,
      topic: eachItem.topic,
    }))
    // console.log(updatedData)

    this.setState({blogData: updatedData, isLoder: false})
  }

  render() {
    const {blogData, isLoder} = this.state
    console.log(blogData, isLoder)

    return (
      <div>
        {isLoder ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogData.map(eachItem => (
            <BlogItem blogItem={eachItem} key={eachItem.id} />
          ))
        )}
      </div>
    )
  }
}
export default BlogList
