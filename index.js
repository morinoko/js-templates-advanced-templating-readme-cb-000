function loadIssues() {
  let template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
  let result = template(issues);

  document.getElementsByTagName("main")[0].innerHTML += result;
}
