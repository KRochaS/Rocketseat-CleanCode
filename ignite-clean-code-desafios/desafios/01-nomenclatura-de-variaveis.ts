// Nomenclatura de variáveis

const categorys = [
  {
    title: 'User',
    followers: 5
  },
  {
    title: 'Friendly',
    followers: 50,
  },
  {
    title: 'Famous',
    followers: 500,
  },
  {
    title: 'Super Star',
    followers: 1000,
  },
]

export default async function getData(req, res) {
  const githubUsername = String(req.query.username)

  if (!githubUsername) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const users = await fetch(`https://api.github.com/users/${githubUsername}`);

  if (users.status === 404) {
    return res.status(400).json({
      message: `User with username "${githubUsername}" not found`
    })
  }

  const usersJson = await users.json()

  const orderCategorys = categorys.sort((a, b) =>  b.followers - a.followers); 

  const category = orderCategorys.find(category => usersJson.followers > category.followers)

  const user = {
    githubUsername,
    category: category.title
  }

  return user
}

getData({ query: {
  username: 'krochas'
}}, {})