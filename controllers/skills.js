import { Skill } from "../models/skill.js";

function index(req, res) {
  Skill.find({})
    .then((skills) => {
      res.render("skills/index", {
        skills,
        time: req.time,
      });
    })
    .catch((error) => {
      console.log(error);
      res.redirect("/");
    });
}

function newSkill(req, res) {
  res.render("skills/new");
}

function create(req, res) {
  console.log(req.body);
  req.body.done = false;
  Skill.create(req.body)
    .then((skill) => {
      res.redirect("/skills");
    })
    .catch((error) => {
      console.log(error);
      res.redirect("/skills");
    });
}

function show(req, res) {
  Skill.findById(req.params.id)
    .then((skill) => {
      res.render("skills/show", {
        skill: skill,
      });
    })
    .catch((error) => {
      console.log(error);
      res.redirect("/skills");
    });
}

function deleteSkills(req, res) {
  Skill.findByIdAndDelete(req.params.id)
    .then((skill) => {
      res.redirect("/skills");
    })
    .catch((error) => {
      console.log(error);
      res.redirect("/skills");
    });
}

function edit(req, res) {
  // find the todo by it's id
  // render a view, passing in out skill
  Skill.findById(req.params.id)
    .then((skill) => {
      res.render("skills/edit", {
        skill,
      });
    })
    .catch((error) => {
      console.log(error);
      res.redirect("/skills");
    });
}

export { index, newSkill as new, create, show, deleteSkills as delete, edit };
