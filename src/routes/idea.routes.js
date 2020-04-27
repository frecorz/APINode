const { Router } = require("express")

module.exports = function ({ IdeaController }) {
  const router = Router()

  router.get("/", IdeaController.getAll)
  router.get("/:ideaId", IdeaController.get)
  router.get("/:userId/all", IdeaController.getByUser)
  router.post("/", IdeaController.create)
  router.patch("/:ideaId", IdeaController.update)
  router.delete("/:ideaId", IdeaController.delete)
  router.post("/:ideaId/upvote", IdeaController.upvoteIdea)
  router.post("/:ideaId/upvote", IdeaController.downvoteIdea)

  return router
}
