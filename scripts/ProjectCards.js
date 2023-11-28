var projectCard = "" +
    "            <input type=\"radio\" name=\"slide\" id=\"proj1\" checked=\"checked\"/>" +
    "            <label for=\"proj1\" class=\"project\">" +
    "                <div class=\"row\">" +
    "                    <div class=\"icon\">1</div>" +
    "                    <div class=\"description\">" +
    "                        <h4>PROJECT 1</h4>" +
    "                        <p>the description for project one.</p>" +
    "                    </div>" +
    "                </div>" +
    "            </label>" +
    "            <input type=\"radio\" name=\"slide\" id=\"proj2\"/>" +
    "            <label for=\"proj2\" class=\"project\">" +
    "                <div class=\"row\">" +
    "                    <div class=\"icon\">2</div>" +
    "                    <div class=\"description\">" +
    "                        <h4>PROJECT 2</h4>" +
    "                        <p>the description for project one.</p>" +
    "                    </div>" +
    "                </div>" +
    "            </label>" +
    "            <input type=\"radio\" name=\"slide\" id=\"proj3\"/>" +
    "            <label for=\"proj3\" class=\"project\">" +
    "                <div class=\"row\">" +
    "                    <div class=\"icon\">3</div>" +
    "                    <div class=\"description\">" +
    "                        <h4>PROJECT 3</h4>" +
    "                        <p>the description for project one.</p>" +
    "                    </div>" +
    "                </div>" +
    "            </label>" +
    "            <input type=\"radio\" name=\"slide\" id=\"proj4\"/>" +
    "            <label for=\"proj4\" class=\"project\">" +
    "                <div class=\"row\">" +
    "                    <div class=\"icon\">4</div>" +
    "                    <div class=\"description\">" +
    "                        <h4>PROJECT 4</h4>" +
    "                        <p>the description for project one.</p>" +
    "                    </div>" +
    "                </div>" +
    "            </label>" +
    "";
let projectContainer= document.getElementById("project");
// console.log(projectCard);
projectContainer.innerHTML = (projectCard);
