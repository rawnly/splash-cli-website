workflow "New workflow" {
  on = "push"
  resolves = ["Update deployment"]
}

action "Update deployment" {
  uses = "actions/zeit-now@9fe84d5"
  runs = "now"
  secrets = [
    "GITHUB_TOKEN",
    "ZEIT_TOKEN",
  ]
  args = "--token $ZEIT_TOKEN"
}
