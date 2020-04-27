const BaseRepository = require("./base.repository")
let _idea = null

class IdeaRepository extends BaseRepository {
  constructor({ Idea }) {
    super()
    _idea = Idea
  }

  async getByUser(author) {
    return await _idea.find({ author })
  }
}

module.exports = IdeaRepository
