function loadIssue() {
  let template = Handlebars.compile(document.getElementById("issue-template").innerHTML);

  for (let i = 0; i < issues.length; i++) {
    let result = template(issues[i]);
    document.getElementsByTagName("main")[0].innerHTML += result;
  }
}
